import React, { useState, useEffect } from 'react';
import NavbarUnimorph from './NavbarComponent';
import axios from 'axios';
import config from '../constants';
import { Typography, makeStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ListGroup from 'react-bootstrap/ListGroup'

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
    const classes = useStyles();
    const [languages, setLanguages] = useState([{
        name: '',
        walsCode: '',
        family: '',
        genus: '',
        lemmas: '',
        words: ''
    }]);
    const [error, setError] = useState();

    useEffect(() => {
        const getLanguages = async () => {
            const {data, error} = await axios.get(`${baseUrl}/languages/`);
            if(error){
                setError(error);
            }
            setLanguages(data.results.map(lang => {
                return {
                    name: lang.name,
                    walsCode: lang.walsCode,
                    family: lang.family.name,
                    genus: lang.genus.name,
                    lemmas: getRandomInt(10000, 50000),
                    words: getRandomInt(50000, 500000)
                }
            }));
        };
        getLanguages();
    }, []);

    console.log(languages);

    return(
        <div>
            <NavbarUnimorph />
            <div className={classes.root} style={{marginTop: 25, marginBottom: 25}}>
                <Typography variant="h6" component="h6" gutterBottom className="centered_text" style={{fontFamily: 'Monospace'}}>
                    Download data for languages
                </Typography>
                <ListGroup variant="flush">
                    <ListGroup.Item>1. Download the whole data for a language by clicking on language name</ListGroup.Item>
                    <ListGroup.Item>2. Download the set of languages in a given genus/family by clicking on its name</ListGroup.Item>
                    <ListGroup.Item>3. Explore lemmas and words of a given language by clicking on a value of the lemmas/words</ListGroup.Item>
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
                                        <a href={`${baseUrl}/download/languages/genera/${lang.genus}/`}>
                                            {lang.genus}
                                        </a>
                                    </td>
                                    <td>    
                                        <a href="/lemmas" >
                                            {lang.lemmas}
                                        </a>
                                    </td>
                                    <td>    
                                        <a href="/words/" >
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