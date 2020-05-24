import React from 'react';
import { useParams } from 'react-router-dom';
import NavbarLemma from './NavbarLemmaComponent'
import WordInfoComponent from './WordInfoComponent'

export default function EditWordComponent(){
    const { slug } = useParams()
    return(
        <div>
            <NavbarLemma/>
            <WordInfoComponent word={ slug }/>
        </div>
    )
}