import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../constants'
const baseUrl = config.url.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

class LemmaSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "related_words": [],
            "lemma": props.lemma,
            "related_words_list": []
            
        }
        this.myRef = null;
    }

    componentDidMount(){
        axios.get(`${baseUrl}/lemmas/${this.state.lemma}/`).then(response => response.data)
        .then(lemma => {
            let related_words = lemma.related_words.map(word => word.name)
            let related_words_list = []
            let related_words_grouped = []

            var j = 0;
            related_words_grouped.push([]);

            for (var i = 1; i <= related_words.length; i++) {
        
                // always updating the final array
                related_words_grouped[j].push(related_words[i-1]);
        
                if (i % 4 == 0) {
                    related_words_grouped.push([]);
                j++;
                }
            }
            
            if (related_words_grouped[0].length === 0) {
                // if the data you received was epmty
                related_words_grouped.pop()
            }


            for (const [index, value] of related_words_grouped.entries()) {
                let intenal_list = []

                value.forEach((element, index) => intenal_list.push(<div key={index} className="col-sm-2 col-md-2 col-lg-2">
                                                                    <div className="centered_text"><Link to={`/editword/${element}`}>{element}</Link></div>
                                                                </div>))
                related_words_list.push(<div key={index} className="row">
                                                <div className="col-md-2 col-sm-2 col-lg-2"></div>
                                                    {intenal_list}
                                                <div className="col-md-2 col-sm-2 col-lg-2"></div>
                                            </div>)
            }
            let myRef = React.createRef();
            this.setState({"related_words": related_words,"related_words_list": related_words_list})
        })
    };

    render(){
        return(
            <div className="lemma">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3">

                    </div>

                    <div className="col-md-6 col-sm-6 col-lg-6 centered_text lemmatext">
                        <h2>lemma: {this.state.lemma}</h2>
                    </div>

                    <div className="col-md-3 col-sm-3 col-lg-3">

                    </div>
                </div>
                {this.state.related_words_list}
            </div>
            
        )
    }

}

export default LemmaSection;