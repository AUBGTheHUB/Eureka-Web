import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { signOut } from '../../store/actions/user';
import '../../styles.css';


export default function NavbarUnimorph(props) {
    console.log(props.user);
    const handleClick = () => {
        window.localStorage.removeItem("user");
        props.dispatch(signOut());
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
                    { props.user.token ? (
                        <>
                            <Nav.Link href="/me">{props.user?.email}</Nav.Link>
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