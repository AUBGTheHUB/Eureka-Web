import React, {useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserService from "../../services/user";
import "./styles/Login.css";
import { Redirect } from 'react-router';
import NavbarUnimorph from '../core/NavbarComponent';

const RegisterComponent = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    function validateForm() {
        return email.length > 0 && password.length > 5 && name.length > 0;
      }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await UserService.register({
            email, password, name
        });
        if (response.name !== "Error"){
            const { data, error} = await UserService.login({ email, password });
            window.localStorage.setItem("user", JSON.stringify({ email, token: data.token }));
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
            <NavbarUnimorph />
            <div className="Login">
                {error ? <p className="text-center" style={{ color: "red" }}>Invalid password or email</p> : null}
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

                    <Form.Group size="lg" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Sign Up
                    </Button>
                    <div style={{color: "#919191",paddingBottom: 10, paddingTop: 20}}>
				        {/* <p>forgot your password? <a href="/register">click here</a></p> */}
				        <p>log in? <a href="/login">login</a></p>
			        </div>
                </Form>
            </div>
        </div>
    );
}

export default RegisterComponent;