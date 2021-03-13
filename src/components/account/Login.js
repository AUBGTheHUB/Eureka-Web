import React, { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Redirect } from 'react-router';
import UserService from '../../services/user';
import "./styles/Login.css";

const LoginComponent = (props) => {
    useEffect(() => {
        const user = window.localStorage.getItem("user");
        if(user){
            setLoggedIn(true);
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
        <div>
            <div className="Login">
                {error ? <p className="text-center" style={{ color: "red" }}>Incorrect password or email</p> : null}
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
				        <p>new user? <a href="/register">create new account</a></p>
			        </div>
                </Form>
            </div>
        </div>
    );
}

export default LoginComponent;