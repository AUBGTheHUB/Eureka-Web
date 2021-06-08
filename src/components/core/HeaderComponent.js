import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export default function HeaderLogo() {
    return (
        <div className="HeaderLogo container">
            <Jumbotron className="jumbotronstyle">
                <img className='header_logo'  src="/assets/LogoUniMorph.png" />
            </Jumbotron>
        </div>
    )
}