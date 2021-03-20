import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import * as qs from 'query-string';
import React from 'react';
import { Link } from 'react-router-dom';
import LemmaService from '../../services/lemma';
import SubmitLemmaDialog from '../submit-dialogs/SubmitLemmaDialog';


const query = qs.parse(location.search);
// number of pages to allocate
let pages = 1;

class AllLemmasComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            "lemmas":[],
            "language": this.props.match.params.lang,
            "currentPage": query.page ? Number(query.page) : 1,
            "search": props.location.search,
            "languageName": ""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    async componentDidMount() {
        let search_pattern = this.state.search ? this.state.search : '';
        const data = await LemmaService.getAll(search_pattern, this.props.match.params.lang);
        pages = parseInt(data.count/72) + 1;
        const lang = JSON.parse(window.localStorage.getItem("language"));
        this.setState({
            "lemmas": data.results.map(lemma => lemma.name), 
            "language": this.props.match.params.lang,
            "languageName": lang.name
        })
    }
    async handleChange(event, value) {
        const pattern = `?page=${value}`;
        const data = await LemmaService.getAll(pattern, this.props.match.params.lang);
        this.setState({
            "lemmas": data.results.map(lemma => lemma.name),
            "currentPage": value
        })
    }

    render(){
        if(this.state.lemmas.length === 0){
            return(
                <div>
                    <h3 className="centered_text">No lemmas were found based on your search: {query.search}/</h3>
                </div>
            );
        }
        var quartile = this.state.lemmas.length/4
        var lemmas_0 = this.state.lemmas.slice(0, quartile)
        var lemmas_1 = this.state.lemmas.slice(quartile, 2*quartile)
        var lemmas_2 = this.state.lemmas.slice(2*quartile, 3*quartile)
        var lemmas_3 = this.state.lemmas.slice(3*quartile, 4*quartile)
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-lg-4">
                        </div>
                        <div className="col-md-4 col-sm-4 col-lg-4">
                            <h3 className="centered_text">Language: {this.state.languageName}</h3>
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
                                    <p className="centered_text"><a href={`/${this.state.language}/lemmas/${value}`}>{value}</a></p>
                                </div>
                            )})}
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2">
                            {lemmas_1.map((value,index) => {return(
                                    <div key={index}>
                                        <p className="centered_text"><a href={`/${this.state.language}/lemmas/${value}`}>{value}</a></p>
                                    </div>
                                )})}
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2">
                            {lemmas_2.map((value,index) => {return(
                                        <div key={index}>
                                            <p className="centered_text"><a href={`/${this.state.language}/lemmas/${value}`}>{value}</a></p>
                                        </div>
                                    )})}
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2">
                            {lemmas_3.map((value,index) => {return(
                                            <div key={index}>
                                                <p className="centered_text"><a href={`/${this.state.language}/lemmas/${value}`}>{value}</a></p>
                                            </div>
                                        )})}
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2">
                        </div>
                    </div>
                    </div>
                    <div className="d-flex justify-content-center">
                    <Pagination count={pages} page={this.state.currentPage}
                        renderItem={(item) => (
                            <PaginationItem 
                            component={Link}
                            to={`${item.page === 1 ? '?page=1' : `?page=${item.page}`}`}
                            {...item}
                            />
                        )}
                        onChange={this.handleChange}
                    />
                    </div>
            </> 
            );
    }
}

export default AllLemmasComponent;