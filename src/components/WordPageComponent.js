import React from 'react';
import { useParams } from 'react-router-dom'
import NavbarLemma from './NavbarLemmaComponent'
import LemmaSection from './LemmaComponent'
import DimensionsComponent from './DimensionsComponent'
import PoSComponent from './PoSComponent'
import SubmitDialog from './LemmaSubmitComponent'

const WordComponent = () => {
    const { slug } = useParams()
    return(
        <div>
            <NavbarLemma/>
            <SubmitDialog />
            <LemmaSection lemma={slug}/>
            <PoSComponent/>
            <DimensionsComponent word={slug}/>
        </div>
    )
}

export default WordComponent;