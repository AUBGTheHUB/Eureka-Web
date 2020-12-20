import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import config from '../constants';
import { initializeLanguages } from '../store/actions/language';
import NavbarUnimorph from './core/NavbarComponent';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


const useStyles = makeStyles({
    root: {
        fontFamily: 'Monospace', 
        margin: 'auto', 
        width: '50%'
    }
});

const LanguagesList = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(initializeLanguages());
    }, []);
    
    const languages = useSelector(state => state.languages);

    console.log(languages);
    if(languages.length === 0){
        return null;
    }
    return(
        <div>
            <NavbarUnimorph/>   
            <div className={classes.root} style={{marginTop: 25, marginBottom: 25}}>
                <Typography variant="h6" component="h6" gutterBottom className="centered_text" style={{fontFamily: 'Monospace'}}>
                    Download data
                </Typography>
                <ListGroup variant="flush">
                    <ListGroup.Item>1. Download the whole data for a language by clicking on language name</ListGroup.Item>
                    <ListGroup.Item>2. Download the set of languages in a given genus/family by clicking on its name</ListGroup.Item>
                    <ListGroup.Item>3. Explore lemma paradigms in a given language by clicking on the value of lemmas</ListGroup.Item>
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
                                        <a href={`${baseUrl}data/download/words/${lang.name}/`}>
                                            {lang.name}
                                        </a>
                                    </td>
                                    <td>
                                        {lang.walsCode}
                                    </td>
                                    <td>    
                                        <a href={`${baseUrl}data/download/families/${lang.family}`}>
                                            {lang.family.name ? lang.family.name : ""}
                                        </a>
                                    </td>                                                                        
                                    <td>    
                                        <a href={`${baseUrl}data/download/genera/${lang.genus}/`}>
                                            {lang.genus.name ? lang.genus.name : ""}
                                        </a>
                                    </td>
                                    <td>    
                                        <a href={`${lang.walsCode}/lemmas`}>
                                            open
                                        </a>
                                    </td>
                                    <td>    
                                        <a>
                                            
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