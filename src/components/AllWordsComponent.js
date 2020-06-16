import React from 'react';
import Navbarword from './NavbarLemmaComponent'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import * as qs from 'query-string';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Icon from '@material-ui/core/Icon';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import axios from 'axios';
import config from '../constants';
import SubmitWordDialog from './SubmitWordDialog';

const baseUrl = config.url.API_URL;
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const query = qs.parse(location.search);
// number of pages to allocate
let pages = 1;

class AllWordsComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            "words":[],
            "language":"English",
            "currentPage": query.page ? Number(query.page) : 1,
            "search": props.location.search
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleWordAdd = this.handleWordAdd.bind(this);
    }
    componentDidMount() {
        let search_pattern = this.props.location.search ? this.props.location.search : '';
        let wordUrl = `${baseUrl}${this.props.location.pathname}${search_pattern}`;
        axios.get(wordUrl).then(response => response.data)
        .then(response => {
            // number of pages for the words, each page has 72 words listed
            pages = parseInt(response.count/72) + 1;
            this.setState({
                "words": response.results.map(word => word.name), 
                "language": "English"
                })
        })
    }

    handleChange(event, value) {
        const wordUrl = `${baseUrl}/words/?page=${value}`;
        axios.get(wordUrl).then(response => response.data)
        .then(response => {
            this.setState({
                "words": response.results.map(word => word.name),
                "currentPage": value
              })
        })
    }

    handleWordAdd(word){
        console.log('nice')
    }

    render(){
        var quartile = this.state.words.length/4
        var words_0 = this.state.words.slice(0, quartile)
        var words_1 = this.state.words.slice(quartile, 2*quartile)
        var words_2 = this.state.words.slice(2*quartile, 3*quartile)
        var words_3 = this.state.words.slice(3*quartile, 4*quartile)

        return(
            <div className="">
                <Navbarword/>
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-lg-4">
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                        <p className="centered_text">{this.state.language}</p>
                        {query.search ? <h4 className="centered_text">Search: {query.search}</h4> : null}
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                    </div>
                </div>
                <div className="d-flex justify-content-sm-center">
                    <SubmitWordDialog language={this.state.language} handleSubmit={this.handleWordAdd}/> 
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-4 col-lg-4">
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4">
                    </div>
                </div>

                <div className="row margin_top">
                    <div className="col-md-2 col-sm-2 col-lg-2">
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2">
                        {words_0.map((value,index) => {return(
                            <div key={index}>
                                <p className="centered_text"><a href={`/words/${value}`}>{value}</a></p>
                            </div>
                        )})}
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2">
                        {words_1.map((value,index) => {return(
                                <div key={index}>
                                    <p className="centered_text"><a href={`/words/${value}`}>{value}</a></p>
                                </div>
                            )})}
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2">
                        {words_2.map((value,index) => {return(
                                    <div key={index}>
                                        <p className="centered_text"><a href={`/words/${value}`}>{value}</a></p>
                                    </div>
                                )})}
                    </div>
                    <div className="col-md-2 col-sm-2 col-lg-2">
                        {words_3.map((value,index) => {return(
                                        <div key={index}>
                                            <p className="centered_text"><a href={`/words/${value}`}>{value}</a></p>
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
                        to={`/words/${item.page === 1 ? '' : `?page=${item.page}`}`}
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

export default AllWordsComponent;