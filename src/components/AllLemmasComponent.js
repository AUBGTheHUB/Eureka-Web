import React from 'react';
import NavbarLemma from './NavbarLemmaComponent'
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom';
import * as qs from 'query-string';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import axios from 'axios'
import config from '../constants'
import SubmitLemmaDialog from './SubmitLemmaDialog';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const query = qs.parse(location.search);

class AllLemmasComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            "lemmas":[],
            "language":"English",
            "currentPage": query.page ? query.page : 1,
            "lemmaUrl": `${baseUrl}/lemmas/`
            }
        this.handlePageChange = this.handlePageChange.bind(this);
    }
    componentDidMount() {
      axios.get(this.state.lemmaUrl).then(response => response.data)
      .then(response => {
          this.setState({
              "lemmas": response.results.map(lemma => lemma.name), 
              "language": "English",
              "lemmaUrl": `${baseUrl}/lemmas/?page=${query.page}`
            })
      })
    }
    handlePageChange(event, value) {
        this.setState({
            "currentPage": value,
            "lemmaUrl": `${baseUrl}/lemmas/?page=${value}`
        })
    }

    render(){
        console.log(this.state.lemmas.length/4)
        var quartile = this.state.lemmas.length/4
        var lemmas_0 = this.state.lemmas.slice(0, quartile)
        var lemmas_1 = this.state.lemmas.slice(quartile, 2*quartile)
        var lemmas_2 = this.state.lemmas.slice(2*quartile, 3*quartile)
        var lemmas_3 = this.state.lemmas.slice(3*quartile, 4*quartile)

        return(
            <div className="">
                <NavbarLemma/>
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-lg-4">
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                        <h3 className="centered_text">{this.state.language}</h3>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                    </div>
                </div>

                <div className="d-flex justify-content-sm-center">
                    <SubmitLemmaDialog language={this.state.language} handleSubmit={this.handleWordAdd}/> 
                </div>

                <div className="row margin_top">
                    <div className="col-md-2 col-sm-2 col-lg-2">
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2">
                        {lemmas_0.map((value,index) => {return(
                            <div key={index}>
                                <p className="centered_text"><a href={`/lemmas/${value}`}>{value}</a></p>
                            </div>
                        )})}
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2">
                        {lemmas_1.map((value,index) => {return(
                                <div key={index}>
                                    <p className="centered_text"><a href={`/lemmas/${value}`}>{value}</a></p>
                                </div>
                            )})}
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2">
                        {lemmas_2.map((value,index) => {return(
                                    <div key={index}>
                                        <p className="centered_text"><a href={`/lemmas/${value}`}>{value}</a></p>
                                    </div>
                                )})}
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2">
                        {lemmas_3.map((value,index) => {return(
                                        <div key={index}>
                                            <p className="centered_text"><a href={`/lemmas/${value}`}>{value}</a></p>
                                        </div>
                                    )})}
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2">
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                <Pagination count={10} page={this.currentPage} onChange={this.handlePageChange}/>
                </div>
            </div> 
            );
    }
}

export default AllLemmasComponent;