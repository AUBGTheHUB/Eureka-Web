import React from 'react';
import ReactDOM from 'react-dom';

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const App = () =>(
    <div>
        Hello world!!!!!!!!!!!!!!!!!!!!!!!!!!
    </div>
)

function NavbarUnimorph() {
  return (
        <div className="NavbarUnimorph">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src="/src/Mu_logo3.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

                <Nav className="mr-auto">
                </Nav>

                <Nav>
                    <Nav.Link href="#about">About the project</Nav.Link>
                    <Nav.Link href="#about">Download</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                    <Nav.Link href="#account">My Account</Nav.Link>
                </Nav>

            </Navbar>
        </div>
 );
}

function HeaderLogo(){
    return(
        <div className="HeaderLogo">
            <Image src="/src/logoUniMorph.svg" fluid />
        </div>
    )
}

ReactDOM.render(
    <NavbarUnimorph/>,
    document.getElementById('root')
)
ReactDOM.render(
    <HeaderLogo/>,
    document.getElementById('header_logo')
)
