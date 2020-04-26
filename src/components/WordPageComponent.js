import React from 'react';
import WordTableComponent from './WordTableComponent'
import NavbarLemma from './NavbarLemmaComponent'
import LemmaSection from './LemmaComponent'
import PSection from './PoSComponent'

export default function WordComponent(){
    return(
        <div>
            <NavbarLemma/>
            <LemmaSection/>
            <PSection/>
        </div>
    )
}