import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Navbar, Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


const App = () => (
    <div>
        Hello world!!!!!!!!!!!!!!!!!!!!!!!!!!
    </div>
)

function NavbarUnimorph() {
    return (
        <div className="NavbarUnimorph">
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        src="/src/Mu_logo3.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>

//                 <Nav className="mr-auto">
//                 </Nav>

                <Nav>
                    <Nav.Link href="#about">About the project</Nav.Link>
                    <Nav.Link href="#about">Download Data</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                    <Nav.Link href="#account">My Account</Nav.Link>
                </Nav>

            </Navbar>
        </div>
    );
}

function HeaderLogo() {
    return (
        <div className="HeaderLogo">
            <Jumbotron className="jumbotronstyle">
                <img className="center-block" src="/src/LogoUniMorph4.png" />
            </Jumbotron>
        </div>
    )
}

function ContributeDownload() {
    return (
        <div className="row">
            <div className="col-md-2 col-xs-2 col-sm-2">
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4 justify-content-between">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/src/contribueimg.png" />
                    <Card.Body>
                        <Card.Title>Contribute to the Base</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-4 col-xs-4 col-sm-4">
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/src/contribueimg.png" />
                    <Card.Body>
                        <Card.Title>Download Data</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-2 col-xs-2 col-sm-2">
            </div>
        </div>
    )
}

function AboutUsSection() {
    return (
        <div className="colored_info">
            <h3 className="centered_text">About UniMorph</h3>
            <Carousel className>
                <Carousel.Item>
                    <p className="infopar">
                        The UniMorph project is a collaborative effort to improve how NLP handles complex morphology in the world’s languages. The goal of UniMorph is to annotate morphological data in a *universal schema* that allows an inflected word from any language to be defined by its lexical meaning, typically carried by the lemma, and by a rendering of its inflectional form in terms of a bundle of morphological features from our schema.
                    </p>
                </Carousel.Item>
                <Carousel.Item>
                    <p className="infopar">
                        The Unimorph presents the data collected both from the English part of Wiktionary and linguists.
                        Unlike Wiktionary, UniMorph provides a friendly interface that allows users (linguists, informants, annotators) to edit entries and add new data.
                        Its universal schema serves as a great source of knowledge for cross-linguistic studies and analyses as well as can be found useful in the development of multilingual systems (machine translation, automatic morphological inflection, and other scenarios).
                    </p>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

function SearchSection() {
    return (
        <div className="container">
            <div className="row searchform">
                <div className="col-md-2 col-xs-2 col-sm-2">
                </div>

                <div className="col-md-8 col-xs-8 col-sm-8">

                    <div className="row">
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <DropdownButton variant="outline-secondary" id="dropdown-basic-button" title="Select Language">
                                    <Dropdown.Item href="#/action-1">Bulgarian</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Albanian</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup.Append>
                            <FormControl
                                placeholder="Search word"
                                aria-label="Search word"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>

                </div>

                <div className="col-md-2 col-xs-2 col-sm-2">
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(
    <NavbarUnimorph />,
    document.getElementById('root')
)
ReactDOM.render(
    <HeaderLogo />,
    document.getElementById('header_logo')
)
ReactDOM.render(
    <AboutUsSection />,
    document.getElementById('about_us')
)
ReactDOM.render(
    <SearchSection />,
    document.getElementById('search')
)
ReactDOM.render(
    <ContributeDownload />,
    document.getElementById('contribute_download')
)
