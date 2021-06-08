import React from 'react';
import { DropdownButton, Nav, Dropdown, Navbar } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { signOut } from '../../store/actions/user';
import '../../styles.css';


export default function NavbarUnimorph(props) {
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

                <Nav className='nav_links'>
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

                <DropdownButton drop={'left'} variant={'Info'} className='nav_dropdown' id="dropdown-basic-button" title="Menu">
                <Dropdown.Item href="/about">About the project</Dropdown.Item>
                <Dropdown.Item href="/languages">Languages</Dropdown.Item>
                <Dropdown.Item href="/contact">Contact Us</Dropdown.Item>
                { props.user.token ? (
                        <>
                            <Dropdown.Item href="/me">Account</Dropdown.Item>
                            <Dropdown.Item href="/" as="a" onClick={() => handleClick()}>Log out</Dropdown.Item>
                        </>
                    ) : (
                        <>
                            <Nav.Link href="/login" as="a">Log in</Nav.Link>
                        </>
                    )}
                

                </DropdownButton>


            </Navbar>
        </div>
    );
}