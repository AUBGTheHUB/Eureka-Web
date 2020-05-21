import React from 'react';
import NavbarLemma from './NavbarLemmaComponent'
import LemmaSection from './LemmaComponent'
import DimensionsComponent from './DimensionsComponent'
import PoSComponent from './PoSComponent'
import SubmitDialog from './LemmaSubmitComponent'

export default function WordComponent(){
    return(
        <div>
            <NavbarLemma/>
            <SubmitDialog />
            <LemmaSection/>
            <PoSComponent/>
            <DimensionsComponent/>
        </div>
    )
}
