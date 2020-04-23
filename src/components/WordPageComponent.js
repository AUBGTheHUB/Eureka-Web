import React from 'react';
import WordTableComponent from './WordTableComponent'
import NavbarLemma from './NavbarLemmaComponent'
import LemmaSection from './LemmaComponent'
import BasicTextFields from './PoSComponent'

export default function WordComponent(){
    return(
        <div>
            <NavbarLemma/>
            <LemmaSection/>
            <BasicTextFields/>
        </div>
    )
}