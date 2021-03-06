import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import languageService from '../services/language';
import LemmaService from '../services/lemma';
import { Context } from '../store';
import { initializeLanguages } from '../store/actions';

const SearchSection = (props) => {
    const [selectedLanguage, setSelectedLanguage] = useState({
        walsCode: "all",
        name: "All"
    });
    const [pattern, setPattern] = useState("");
    const [search, setSearch] = useState(false);
    const [lemmas, setLemmas] = useState([]);

    const [state, dispatch] = useContext(Context);

    useEffect(() => {
        const getLangs = async () => {
            const {data} = await languageService.getAll();
            dispatch(initializeLanguages(data));
        }
        getLangs();
    }, [dispatch]);

    useEffect(() => {
        handlePatternChange();
    }, [pattern])

    const languages = state.languages.map(lang => [lang.name, lang.walsCode]);

    const languagesList = getLanguagesList(languages);

    const handlePatternChange = async () => {
        const allLemmas = await LemmaService.autoComplete(selectedLanguage.walsCode, pattern);   
        setLemmas(allLemmas.results.map(lemma => lemma.name));
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        window.localStorage.setItem("language", JSON.stringify(selectedLanguage))
        setSearch(true);
    }

    function getLanguagesList(langs){
        const languagesList = [];
        for (const [value, walsCode] of langs){
            languagesList.push(
                <Dropdown.Item 
                    key={walsCode}
                    onClick={() => {
                        setSelectedLanguage({name: value, walsCode}); 
                        window.localStorage.setItem("language", JSON.stringify({name: value, walsCode}))
                    }}
                >
                    {value}
                </Dropdown.Item>)
        }
        return languagesList;
    }

    if(!languages){
        return null;
    }
    if (search){
        return (
            <Redirect push to={`${selectedLanguage.walsCode}/lemmas/?search=${pattern}`} />
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
                                        title={selectedLanguage.name}
                                    >
                                        {languagesList}
                                    </DropdownButton>
                                </InputGroup.Append>
                                <FormControl
                                    placeholder="Search lemma"
                                    aria-label="Search lemma"
                                    aria-describedby="basic-addon2"
                                    onChange={(e) => setPattern(e.target.value)}
                                    list="autocomplete"
                                />
                                <InputGroup.Append>
                                    <Button type="submit" variant="outline-secondary btn_search">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>
                        {/* Dropdown for lemma search */}
                        <datalist id="autocomplete">
                            {lemmas.map((lemma, i) => <option key={i} value={lemma}></option>)}
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

