import React from 'react';
import { useParams } from 'react-router-dom';
import LemmaTable from './LemmaTable';
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
            <LemmaTable lemma={slug}/>
        </div>
    )
}

export default LemmaDetailPage;