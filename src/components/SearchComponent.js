import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { FormControl, Button, DropdownButton, Dropdown, InputGroup } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {initializeLanguages} from '../store/actions/language';



function getLanguagesList(langs){
    const languagesList = [];
    for (const [index, value] of langs){
        languagesList.push(
            <Dropdown.Item 
                key={index} 
            >
                {value}
            </Dropdown.Item>)
    }
    return languagesList;
}

const SearchSection = (props) => {
    const dispatch = useDispatch();
    const [selectedLang, setLanguage] = useState("");
    const [pattern, setPattern] = useState("");
    const [search, setSearch] = useState(false);

    useEffect(() => {
        dispatch(initializeLanguages());
    }, []);
    const languages = useSelector(state => state.languages.map(lang => lang.name));
    
    const languagesList = getLanguagesList(languages.entries());

    const handlePatternChange = (event) => {
        event.preventDefault();
        setPattern(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setSearch(true);
    }

    console.log(selectedLang);

    if(!languages){
        return null;
    }
    if (search){
        return (
            <Redirect push to={`/words/?search=${pattern}`} />
        );
    }
    else{
        return (
            <div className="colored_search_bar">
                <div className="row searchform">
                    <div className="col-md-3 col-xs-3 col-sm-3">
                    </div>
                    
                    <div className="col-md-6 col-xs-6 col-sm-5">
                        <div className="row">
                            <InputGroup className="mb-3">
                                <InputGroup.Append 
                                    defaultValue={selectedLang ? selectedLang : languages[1]}
                                >
                                    <DropdownButton 
                                        variant="outline-secondary" 
                                        id="dropdown-basic-button" 
                                        title={selectedLang ? selectedLang : "Select language"}
                                        onSelect={function(eventKey, event){
                                            console.log(eventKey, event);
                                        }}
                                    >
                                        {languagesList}
                                    </DropdownButton>
                                </InputGroup.Append>
                                <FormControl
                                    placeholder="Search lemma"
                                    aria-label="Search lemma"
                                    aria-describedby="basic-addon2"
                                    onChange={handlePatternChange}
                                />
                                <InputGroup.Append>
                                    <Button onClick={handleSearchSubmit} variant="outline-secondary btn_search">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>

                    </div>

                    <div className="col-md-3 col-xs-3 col-sm-3">
                    </div>
                </div>
            </div>
        );
    }
    
}

export default withRouter(SearchSection);

