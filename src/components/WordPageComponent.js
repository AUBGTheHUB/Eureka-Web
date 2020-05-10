import React from 'react';
import WordTableComponent from './WordTableComponent'
import NavbarLemma from './NavbarLemmaComponent'
import LemmaSection from './LemmaComponent'
import PoSComponent from './PoSComponent'
import SubmitDialog from './LemmaSubmitComponent'
import DimensionsComponent from './DimensionsComponent'

export default function WordComponent(){
    return(
        <div>
            <NavbarLemma/>
            <SubmitDialog/>
            <LemmaSection/>
            <DimensionsComponent/>
        </div>
    )
}
