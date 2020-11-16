import React, { useEffect, useState } from 'react';
import '../../styles.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Redirect } from 'react-router';

export default function NavbarUnimorph(props) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("user"));
        setUser(user);
    }, []);

    const handleClick = () => {
        window.localStorage.removeItem("user");
        setUser(null);
        return (
            <Redirect push to="/"/>
        );
    }
    return (
        <div className="NavbarUnimorph">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">
                    <img
                        src="/assets/favicon_logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Nav className="mr-auto">
                </Nav>

                <Nav>
                    <Nav.Link href="/about">About the project</Nav.Link>
                    <Nav.Link href="/languages">Languages</Nav.Link>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                    { user ? (
                        <>
                            <Nav.Link href="/me">{user.email}</Nav.Link>
                            <Nav.Link href="/" as="a" onClick={() => handleClick()}>Log out</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link href="/login" as="a">Log in</Nav.Link>
                        </>
                    )}
                </Nav>

            </Navbar>
        </div>
    );
}