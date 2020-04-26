import React, { useState, useEffect } from 'react';
import { FormControl, Button, DropdownButton, InputGroup, Dropdown } from 'react-bootstrap';
import languageService from '../services/languages'

const SearchSection = () => {
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        const getAll = async () => {
            const languages = await languageService.getAll()
            setLanguages(languages)
        }
        getAll()
    }, [])
    return (
        <div className="container">
            <div className="row searchform">
                <div className="col-md-2 col-xs-2 col-sm-2">
                </div>

                <div className="col-md-8 col-xs-8 col-sm-8">
                    <div className="row">
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <DropdownButton style={{maxHeight: "28px"}} variant="outline-secondary" id="dropdown-basic-button" title="Select Language">
                                    {languages.map((language, i) => {
                                        return <Dropdown.Item as="button" key={i}>{ language.name }</Dropdown.Item>
                                    })
                                    }
                                </DropdownButton>
                            </InputGroup.Append>
                            <FormControl
                                placeholder="Search word"
                                aria-label="Search word"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>

                </div>

                <div className="col-md-2 col-xs-2 col-sm-2">
                </div>
            </div>
        </div>
    )
}

export default SearchSection