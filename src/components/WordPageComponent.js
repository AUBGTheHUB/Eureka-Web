import React from 'react';
import { useParams } from 'react-router-dom'
import LemmaSection from './LemmaComponent'
import LemmaTable from './LemmaTable'
import PoSComponent from './PoSComponent'
import SubmitDialog from './LemmaSubmitComponent'
import NavbarUnimorph from './NavbarComponent';

const WordComponent = () => {
    const { slug } = useParams();
    return(
        <div>
            <NavbarUnimorph/>
            <SubmitDialog />
            <PoSComponent/>
            <LemmaTable lemma={slug}/>
        </div>
    )
}

export default WordComponent;