import React from 'react';
import { useParams } from 'react-router-dom';
import LemmaTableV1 from './LemmaTableV1';

const LemmaDetailPage = () => {
    const { slug, lang } = useParams();
    return(
        <div>
            <LemmaTableV1 lemma={slug} lang={lang}/>
        </div>
    )
}

export default LemmaDetailPage;