import React from 'react';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';


class DimensionsComponent extends React.Component {
    constructor(props) {
        super(props)
        this.changeSelect = this.changeSelect.bind(this);

        // this.dimensions = ["tense", "person", "dimension 1", "dimension 2", "dimension 3", "dimension 4"]

        // this.features_1 = [[["feature 1", true], "feature 2"], ["feature 1", "feature 2"], ["feature 1", "feature 2"],
        //                  ["feature 1", "feature 2"], ["feature 1", "feature 2"], ["feature 1", "feature 2"]]
        
        // this.dimensions = {"tense":[["feature 1", true], ["feature 2", false]], "person":[["feature 1", false], ["feature 2", true]], "dimension 1":[["feature 1", true], ["feature 2", false]],
        //                     "dimension 2":[["feature 1", true], ["feature 2", false]], "dimension 3":[["feature 1", true], ["feature 2", false]], 
        //                     "dimension 4":[["feature 1", true], ["feature 2", false]]}
        
        this.state = {
            "dimensions":{"tense":[["feature 1", true], ["feature 2", false]], "person":[["feature 1", false], ["feature 2", true]], "dimension 1":[["feature 1", true], ["feature 2", false]],
                            "dimension 2":[["feature 1", true], ["feature 2", false]], "dimension 3":[["feature 1", true], ["feature 2", false]], 
                            "dimension 4":[["feature 1", true], ["feature 2", false]]}
            }
        
        this.dimensions_display = [];

        for (var key in this.state.dimensions) {
            this.features = []
            for (var feature in this.state.dimensions[key]){
                this.features.push(
                    <Dropdown.Item onClick={this.changeSelect} className={this.state.dimensions[key][feature][0]} id={key}>{this.state.dimensions[key][feature][0]}</Dropdown.Item>
                )
            }

            // get the active feature 
            this.current_feature = this.state.dimensions[key].filter(feature => feature[1] == true)[0][0]

            this.dimensions_display.push(
            <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-4">
                </div>

                <div className="col-md-4 col-lg-4 col-sm-4">

                    <div className="row feature_row" id={key}>
                        <div className="col-md-6 col-lg-6 col-sm-6">
                            <div className="pos_text">{key}</div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-sm-6">
                            <DropdownButton variant="outline-secondary" className={this.current_feature} id="dropdown-basic-button" title={this.state.dimensions[key].filter(feature => feature[1] == true)[0][0]}>
                                    {this.features}
                            </DropdownButton>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-4">
                    {this.state.counter}
                </div>
                
            </div>)
        }
    }

    changeSelect(e) {
        var target = e.currentTarget;

        console.log(target.classList[0])

        var current_dimensions = this.state.dimensions;
        
        for(var key in current_dimensions[target.id]){
            current_dimensions[target.id][key][1] = false

            if (current_dimensions[target.id][key][0] == target.innerText){
                current_dimensions[target.id][key][1] = true
            }
        }

        this.setState({"dimensions":current_dimensions})

        e.preventDefault();
      }

    render(){
        var keys = Object.keys(this.state.dimensions);
        var active_items = [];
        var all_items = [];

        keys.forEach(element => {
            var key_items = []
            this.state.dimensions[element].forEach(item => {
                key_items.push(item[0])
            });
            all_items.push(key_items);
            active_items.push(this.state.dimensions[element].filter(feature => feature[1] == true)[0][0])
        });

        return(
            <div>
                <div className="row">

                </div>
            </div>);
    }
}

export default DimensionsComponent;
