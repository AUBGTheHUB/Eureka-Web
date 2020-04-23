import React from 'react';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

export default function SearchSection() {
    return (
        <div className="container">
            <div className="row searchform">
                <div className="col-md-2 col-xs-2 col-sm-2">
                </div>

                <div className="col-md-8 col-xs-8 col-sm-8">
                    <div className="row">
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                                <DropdownButton variant="outline-secondary" id="dropdown-basic-button" title="Select Language">
                                    <Dropdown.Item href="#/action-1">Bulgarian</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Albanian</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Azeri</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Turkmen</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">Kyrgyz</Dropdown.Item>
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
