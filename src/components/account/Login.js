import React, { useContext, useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Redirect } from 'react-router';
import UserService from '../../services/user';
import { Context } from '../../store';
import { login } from '../../store/actions/user';
import "./styles/Login.css";

const LoginComponent = (props) => {
    const [state, dispatch] = useContext(Context);
    
    useEffect(() => {
        const user = window.localStorage.getItem("user");
        if(user){
            dispatch(login(JSON.parse(user)));
        }
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    function validateForm() {
        return email.length > 0 && password.length > 5;
      }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await UserService.login({ email, password });
        if (response.name !== "Error"){
            window.localStorage.setItem("user", JSON.stringify({ email, token: response.data.token }));
            dispatch(login({ email, token: response.data.token }));
            setLoggedIn(true);
        }
        else{
            setError(response.message);
        }
    }
    if(loggedIn){
        return (
            <Redirect push to="/"/>
        );
    }
    return (
        <div className="Login">
            {error ? <p className="text-center" style={{ color: "red" }}>Incorrect password or email</p> : null}
            <h3 style={{textAlign:"center"}}>Login</h3> <br/>

            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                Login
                </Button>
                <div style={{color: "#919191",paddingBottom: 10, paddingTop: 20}}>
                    {/* <p>forgot your password? <a href="/register">click here</a></p> */}
                    <p>New user? <a href="/register">Create new account</a></p>
                    <p> <a href="/forgotpassword">Forgot Password?</a></p>
                </div>
            </Form>
        </div>
    );
}

export default LoginComponent;