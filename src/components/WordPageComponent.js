import React from 'react';
import { useParams } from 'react-router-dom'
import NavbarLemma from './NavbarLemmaComponent'
import LemmaSection from './LemmaComponent'
import LemmaTable from './LemmaTable'
import PoSComponent from './PoSComponent'
import SubmitDialog from './LemmaSubmitComponent'

const WordComponent = () => {
    const { slug } = useParams();
    return(
        <div>
            <NavbarLemma/>
            <SubmitDialog />
            <PoSComponent/>
            <LemmaTable lemma={slug}/>
        </div>
    )
}

export default WordComponent;