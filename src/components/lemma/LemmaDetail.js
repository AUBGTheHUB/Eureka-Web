import React from 'react';
import { useParams } from 'react-router-dom';
import LemmaTableV1 from './LemmaTableV1';
import PoSComponent from '../PoSComponent';
import SubmitDialog from '../submit-dialogs/SubmitDialog';
import NavbarUnimorph from '../core/NavbarComponent';

const LemmaDetailPage = () => {
    const { slug } = useParams();
    return(
        <div>
            <NavbarUnimorph/>
            <SubmitDialog />
            <PoSComponent/>
            <LemmaTableV1 lemma={slug}/>
        </div>
    )
}

export default LemmaDetailPage;