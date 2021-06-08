import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap'
import userService from '../../services/user'
const ForgotPassword = () => {
    const [email, set_email] = useState('')
    const [show_message, set_show_message] = useState(false)

    const handle_reset = async (e) => {
        e.preventDefault()
        set_show_message(true)

        await userService.forgot_password(email)
    }
    return (
        <div className="Login">
            <Form onSubmit={handle_reset}>
                {show_message && <p style={{color:'green'}}>If email you entered is correct, you will receive further instructions!</p> }<br/><br/>
                <h3 style={{textAlign:"center"}}>Password Reset</h3> <br/>

                <Form.Label>Enter email to reset your password</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => set_email(e.target.value)}
                />
                <br/>
                <Button block size="lg" type="submit">
                Login
                </Button>
              
            </Form>
        </div>
    )
}

export default ForgotPassword;