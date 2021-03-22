import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import * as qs from 'query-string';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LemmaService from '../../services/lemma';
import SubmitLemmaDialog from '../submit-dialogs/SubmitLemmaDialog';

const query = qs.parse(location.search);
// number of pages to allocate
let pages = 1;

const AllLemmasComponent = (props) => {
    const [lemmas, setLemmas] = useState([]);
    const [language, setLanguage] = useState({walsCode: "all", name: "All"});
    const [currentPage, setCurrentPage] = useState(query.page ? Number(query.page): 1);
    const search = props.location.search;

    useEffect(() => {
        const getLemmas = async () => {
            let searchPattern = search || "";
            const data = await LemmaService.getAll(searchPattern, props.match.params.lang);
            pages = parseInt(data.count/72) + 1;
            setLemmas(data.results.map(lemma => lemma.name));
            const selectedLanguage = window.localStorage.getItem("language");
            setLanguage(selectedLanguage ? JSON.parse(selectedLanguage) : language);
        };
        getLemmas();
    }, []);

    const handleChange = async (event, value) => {
        const pattern = `?page=${value}`;
        const data = await LemmaService.getAll(pattern, props.match.params.lang);
        setLemmas(data.results.map(lemma => lemma.name));
        setCurrentPage(value);
    }

    if(lemmas.length === 0){
        return(
            <div>
                <h3 className="centered_text">No lemmas were found based on your search: {query.search}/</h3>
            </div>
        );
    }
    else{
        const quartile = lemmas.length/4;
        const lemmas0 = lemmas.slice(0, quartile);
        const lemmas1 = lemmas.slice(quartile, 2*quartile);
        const lemmas2 = lemmas.slice(2*quartile, 3*quartile);
        const lemmas3 = lemmas.slice(3*quartile, 4*quartile);
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-lg-4">
                        </div>
                        <div className="col-md-4 col-sm-4 col-lg-4">
                            <h3 className="centered_text">Language: {language.name}</h3>
                            {query.search ? <h4 className="centered_text">Search: {query.search}</h4> : null}
                        </div>
                        <div className="col-md-4 col-sm-4 col-lg-4">
                        </div>
                    </div>

                    <div className="d-flex justify-content-sm-center">
                        <SubmitLemmaDialog language={language.name} handleSubmit={() => {}}/> 
                    </div>

                    <div className="row margin_top">
                        <div className="col-md-2 col-sm-2 col-lg-2">
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2">
                            {lemmas0.map((value, index) => {return(
                                <div key={index}>
                                    <p className="centered_text"><a href={`/${language.walsCode}/lemmas/${value}`}>{value}</a></p>
                                </div>
                            )})}
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2">
                            {lemmas1.map((value,index) => {return(
                                    <div key={index}>
                                        <p className="centered_text"><a href={`/${language.walsCode}/lemmas/${value}`}>{value}</a></p>
                                    </div>
                                )})}
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2">
                            {lemmas2.map((value,index) => {return(
                                        <div key={index}>
                                            <p className="centered_text"><a href={`/${language.walsCode}/lemmas/${value}`}>{value}</a></p>
                                        </div>
                                    )})}
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2">
                            {lemmas3.map((value,index) => {return(
                                            <div key={index}>
                                                <p className="centered_text"><a href={`/${language.walsCode}/lemmas/${value}`}>{value}</a></p>
                                            </div>
                                        )})}
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2">
                        </div>
                    </div>
                    </div>
                    <div className="d-flex justify-content-center">
                    <Pagination count={pages} page={currentPage}
                        renderItem={(item) => (
                            <PaginationItem 
                            component={Link}
                            to={`${item.page === 1 ? '?page=1' : `?page=${item.page}`}`}
                            {...item}
                            />
                        )}
                        onChange={handleChange}
                    />
                    </div>
            </> 
        )
    }
}

export default AllLemmasComponent;