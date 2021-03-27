import { makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Redirect } from 'react-router';
import config from '../constants';
import languageService from '../services/language';
import { Context } from '../store/';
import { initializeLanguages } from '../store/actions/language';

const baseUrl = config.url.API_URL;

const useStyles = makeStyles({
    root: {
        fontFamily: 'Monospace', 
        margin: 'auto', 
        width: '50%'
    }
});

const LanguagesList = (props) => {
    const [state, dispatch] = useContext(Context);
    const classes = useStyles();
    const [chosen, setChosen] = useState("");

    useEffect(() => {
        const getLangs = async () => {
            const {data} = await languageService.getAll();
            dispatch(initializeLanguages(data));
        }
        getLangs();
    }, []);
    
    const languages = state.languages;

    const onClick = (event, lang) => {
        event.preventDefault();
        window.localStorage.setItem("language", JSON.stringify({name: lang.name, walsCode: lang.walsCode}));
        setChosen(lang.walsCode);
    }

    if(chosen !== ""){
        return (
            <Redirect push to={`${chosen}/lemmas`}/>
        )
    }

    return(
        <div>
            <div className={classes.root} style={{marginTop: 25, marginBottom: 25}}>
                <Typography variant="h6" component="h6" gutterBottom className="centered_text" style={{fontFamily: 'Monospace'}}>
                    Download data
                </Typography>
                <ListGroup variant="flush">
                    <ListGroup.Item>1. Download the whole data for a language by clicking on language name</ListGroup.Item>
                    <ListGroup.Item>2. Download the set of languages in a given genus/family by clicking on its name</ListGroup.Item>
                    <ListGroup.Item>3. Explore lemma paradigms in a given language by clicking on the link</ListGroup.Item>
                </ListGroup>
            </div>
            <div id="lang-table" className="d-flex justify-content-center">
                <table className={"table table-hover"} style={{fontFamily: 'Monospace', margin: 'auto', width: '50%'}}>
                    <thead style={{fontSize: 15}} >
                        <tr className="text-center">
                            <th>#</th>
                            <th>genus</th>
                            <th>walsCode</th>
                            <th>family</th>
                            <th>name</th>
                            <th>link</th>
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
                                        <a href={`${baseUrl}data/download/families/${lang.family?.name}`}>
                                            {lang.family?.name}
                                        </a>
                                    </td>                                                                        
                                    <td>    
                                        <a href={`${baseUrl}data/download/genera/${lang.genus?.name}/`}>
                                            {lang.genus?.name}
                                        </a>
                                    </td>
                                    <td>    
                                        <a href={`${lang.walsCode}/lemmas`} onClick={(event) => onClick(event, lang)}>
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