import React from 'react';
import NavbarLemma from './NavbarComponent'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
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
// number of pages to allocate
let pages = 1;

class AllLemmasComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            "lemmas":[],
            "language":"English",
            "currentPage": query.page ? Number(query.page) : 1
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
      let lemmaUrl = ``;
      if (query.search){
          lemmaUrl = `${baseUrl}/lemmas/?search=${query.search}`;
      }
      else{
          lemmaUrl = query.page ? `${baseUrl}/lemmas/?page=${query.page}` : `${baseUrl}/lemmas/`;
      }
      axios.get(lemmaUrl).then(response => response.data)
      .then(response => {
          // number of pages for the lemmas, each page has 72 lemmas listed
          pages = parseInt(response.count/72) + 1;
          this.setState({
              "lemmas": response.results.map(lemma => lemma.name), 
              "language": "English"
            })
      })
    }
    handleChange(event, value) {
        const lemmaUrl = `${baseUrl}/lemmas/?page=${value}`;
        axios.get(lemmaUrl).then(response => response.data)
        .then(response => {
            this.setState({
                "lemmas": response.results.map(lemma => lemma.name),
                "currentPage": value
              })
        })
    }

    render(){
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
                        {query.search ? <h4 className="centered_text">Search: {query.search}</h4> : null}
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
                <Pagination count={pages} page={this.state.currentPage}
                    renderItem={(item) => (
                        <PaginationItem 
                        component={Link}
                        to={`/lemmas${item.page === 1 ? '' : `?page=${item.page}`}`}
                        {...item}
                        />
                    )}
                    onChange={this.handleChange}
                />
                </div>
            </div> 
            );
    }
}

export default AllLemmasComponent;