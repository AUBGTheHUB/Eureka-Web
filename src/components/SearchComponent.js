import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { FormControl, Button, DropdownButton, Dropdown, InputGroup } from 'react-bootstrap';
import { Redirect } from 'react-router';
import lemmaService from '../services/lemma';

import { useSelector, useDispatch } from 'react-redux';
import {initializeLanguages} from '../store/actions/language';


// this is hard-coded for now, before implementing new endpoint
const populatedLanguages = [
    ["Bulgarian", "bul"],
    ["Albanian", "sqi"],
    ["Turkmen", "tuk"],
    ["English", "eng"]
];

const SearchSection = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState({
        walsCode: "eng",
        name: "English"
    });
    const [pattern, setPattern] = useState("");
    const [search, setSearch] = useState(false);
    const [lemmas, setLemmas] = useState([])
    
    const languagesList = getLanguagesList(populatedLanguages);


    const handlePatternChange =  async (event) => {
        event.preventDefault();
        setPattern(event.target.value);
        // Get the suggested lemmas
        const allLemmas = await lemmaService.autoComplete(pattern, selectedLanguage.walsCode);   
        setLemmas(allLemmas.results.map(lemma => lemma.name))
        // console.log(lemmas);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setSearch(true);
    }

    function getLanguagesList(langs){
        const languagesList = [];
        for (const [value, walsCode] of langs){
            languagesList.push(
                <Dropdown.Item 
                    key={walsCode}
                    onClick={() => setSelectedLanguage({name: value, walsCode})}
                >
                    {value}
                </Dropdown.Item>)
        }
        return languagesList;
    }

    if(!populatedLanguages){
        return null;
    }
    if (search){
        return (
            <Redirect push to={`${selectedLanguage.walsCode ? selectedLanguage.walsCode : "bul"}/lemmas/?search=${pattern}`} />
        );
    }
    else{
        return (
            <div className="colored_search_bar container-fluid">
                <div className="row">
                    <div className="col-md-3 col-xs-3 col-sm-3">
                    </div>
                    
                    <div className="col-md-6 col-xs-6 col-sm-5">
                        <div className="row">
                            <InputGroup className="mb-3" as="form" onSubmit={handleSearchSubmit}>
                                <InputGroup.Append 
                                >
                                    <DropdownButton 
                                        variant="outline-secondary" 
                                        id="dropdown-basic-button" 
                                        title={selectedLanguage.name ? selectedLanguage.name : "Select language"}
                                    >
                                        {languagesList}
                                    </DropdownButton>
                                </InputGroup.Append>
                                <FormControl
                                    placeholder="Search lemma"
                                    aria-label="Search lemma"
                                    aria-describedby="basic-addon2"
                                    onChange={handlePatternChange}
                                    list = "autocomplete"
                                />
                                <InputGroup.Append>
                                    <Button type="submit" variant="outline-secondary btn_search">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        {/* Dropdown for lemma search */}
                        <datalist id="autocomplete">
                            {lemmas.map(lemma => <option key={lemma} value={lemma}></option>)}
                        </datalist>

                    </div>

                    <div className="col-md-3 col-xs-3 col-sm-3">
                    </div>
                </div>
            </div>
        );
    }
    
}

export default withRouter(SearchSection);

