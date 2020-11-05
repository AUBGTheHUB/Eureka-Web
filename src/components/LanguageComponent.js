import React, { useState, useEffect } from 'react';
import NavbarUnimorph from './core/NavbarComponent';
import axios from 'axios';
import config from '../constants';
import { Typography, makeStyles } from '@material-ui/core';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import {initializeLanguages} from '../store/actions/language';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


const useStyles = makeStyles({
    root: {
        fontFamily: 'Monospace', 
        margin: 'auto', 
        width: '50%'
    }
});

// random number generator for lemmas and words. Demo purposes only, will be removed in next stage
function getRandomInt(min, max) {
    return Math.floor(Math.random(min) * Math.floor(max));
}

const LanguagesList = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(initializeLanguages());
    }, []);
    
    const languages = useSelector(state => state.languages);

    if(languages.length === 0){
        return null;
    }
    return(
        <div>
            <NavbarUnimorph />
            <div className={classes.root} style={{marginTop: 25, marginBottom: 25}}>
                <Typography variant="h6" component="h6" gutterBottom className="centered_text" style={{fontFamily: 'Monospace'}}>
                    Download data
                </Typography>
                <ListGroup variant="flush">
                    <ListGroup.Item>1. Download the whole data for a language by clicking on language name</ListGroup.Item>
                    <ListGroup.Item>2. Download the set of languages in a given genus/family by clicking on its name</ListGroup.Item>
                    <ListGroup.Item>3. Explore lemmas or words in a given language by clicking on the value of lemmas/words</ListGroup.Item>
                </ListGroup>
            </div>
            <div id="lang-table" className="d-flex justify-content-center">
                <table className={"table table-hover"} style={{fontFamily: 'Monospace', margin: 'auto', width: '50%'}}>
                    <thead style={{fontSize: 15}}>
                        <tr>
                            <th>#</th>
                            {Object.keys(languages[0]).map((key, i) => <th key={i} scope="col">{key}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {languages.map((lang, i) => {
                            return (
                                <tr key={lang.name}>
                                    <td>{i+1}</td>
                                    <td>    
                                        <a href={`${baseUrl}/download/words/${lang.name}/`}>
                                            {lang.name}
                                        </a>
                                    </td>
                                    <td>
                                        {lang.walsCode}
                                    </td>
                                    <td>    
                                        <a href={`${baseUrl}/download/languages/families/${lang.family}`}>
                                            {lang.family}
                                        </a>
                                    </td>                                                                        
                                    <td>    
                                        <a href={`${baseUrl}/download/genera/${lang.genus}/`}>
                                            {lang.genus}
                                        </a>
                                    </td>
                                    <td>    
                                        <a href={`${lang.walsCode}/lemmas`}>
                                            {lang.lemmas}
                                        </a>
                                    </td>
                                    <td>    
                                        <a href={`${lang.walsCode}/lemmas`} >
                                            {lang.words}
                                        </a>
                                    </td>                                    
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default LanguagesList;