import React from 'react';
import { useParams } from 'react-router-dom';
import LemmaTableV1 from './LemmaTableV1';
import SubmitDialog from '../submit-dialogs/SubmitDialog';
import NavbarUnimorph from '../core/NavbarComponent';

const LemmaDetailPage = () => {
    const { slug, lang } = useParams();
    console.log(lang)
    return(
        <div>
            <NavbarUnimorph/>
            <SubmitDialog />
            <LemmaTableV1 lemma={slug} lang={lang}/>
        </div>
    )
}

export default LemmaDetailPage;