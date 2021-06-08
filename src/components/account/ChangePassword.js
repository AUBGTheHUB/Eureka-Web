import React, { useContext, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import UserService from '../../services/user';
import { Context } from '../../store';

const ChangePassword = () => {
    const [state, dispatch] = useContext(Context);

    const [new_pass, set_new_pass] = useState("");
    const [old, set_old] = useState("");

    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // useEffect(()=>{
    //     if (!state.user) return <Redirect push to='/'/>
    // },[state.user])

    function validateForm() {
        return new_pass.length > 0 && old.length > 5;
      }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            old_password: old,
            new_password: new_pass
        }
        try{
            await UserService.change_password(payload, state.user.token)
            setSuccess(true)
        }catch(e){
            setError(true)
            setTimeout(()=>{
                setError(false)
            },3000)
        }
    }
    return (
        <div className="Login">
            {error ? <p className="text-center" style={{ color: "red" }}>Incorrect old password</p> : null}
            {success ? <p className="text-center" style={{ color: "green" }}>Successfully changed password</p> : null}
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                <Form.Label>Old Password</Form.Label>
                <Form.Control
                    autoFocus
                    type="password"
                    value={old}
                    onChange={(e) => set_old(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                    type="password"
                    value={new_pass}
                    onChange={(e) => set_new_pass(e.target.value)}
                />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                Change Password
                </Button>
              
            </Form>
        </div>
    );
}

export default ChangePassword;