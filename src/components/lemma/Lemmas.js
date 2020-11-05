import React from 'react';
import { useParams } from 'react-router-dom';
import AllLemmasComponent from './AllLemmasComponent';

const Lemmas = () => {
    const { lang } = useParams();
    return(
        <>
            <AllLemmasComponent lang={lang}/>
        </>
    )
}

export default Lemmas;