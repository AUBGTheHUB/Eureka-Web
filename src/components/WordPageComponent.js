import React from 'react';
import NavbarLemma from './NavbarLemmaComponent'
import LemmaSection from './LemmaComponent'
import DimensionsComponent from './DimensionsComponent'

export default function WordComponent(){
    return(
        <div>
            <NavbarLemma/>
            <LemmaSection/>
            <DimensionsComponent/>
        </div>
    )
}
