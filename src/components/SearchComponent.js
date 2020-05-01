import React from 'react';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';


class SearchSection extends React.Component {
    constructor(props) {
        super(props)
        
        this.languages = ["Bulgarian", "English", "Albanian", "Azeri", "Turkmen", "Kyrgyz"];
        this.languagesList = []

        for (const [index, value] of this.languages.entries()) {
            this.languagesList.push(<Dropdown.Item onClick={this.changeSelect}>{value}</Dropdown.Item>)
          }
        
        this.myRef = React.createRef();
    }
    
    changeSelect(e) {
        localStorage.setItem('chosenLanguage', e.target.innerText)
        document.getElementById('dropdown-basic-button').innerText = e.target.innerText
        e.preventDefault();
      }
      
    
    render(){
        return(
            <div className="colored_search_bar">
                <div className="row searchform">
                    <div className="col-md-3 col-xs-3 col-sm-3">
                    </div>
                    
                    <div className="col-md-6 col-xs-6 col-sm-5">
                        <div className="row">
                            <InputGroup className="mb-3">
                                <InputGroup.Append>
                                    <DropdownButton variant="outline-secondary" id="dropdown-basic-button" title="Select Language">
                                        {this.languagesList}
                                    </DropdownButton>
                                </InputGroup.Append>
                                <FormControl
                                    placeholder="Search word"
                                    aria-label="Search word"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary btn_search">Search</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </div>

                    </div>

                    <div className="col-md-3 col-xs-3 col-sm-3">
                    </div>
                </div>
            </div>
        )
    }

}

export default SearchSection;

