import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LanguagePageComponent from './components/LanguageComponent';
import NavbarUnimorph from './components/NavbarComponent';
import About from './components/About';
import AboutUsSection from './components/AboutUsComponent';
import ContributeDownload from './components/ContributeDownload';
import HeaderLogo from './components/HeaderComponent';
import SearchSection from './components/SearchComponent';
import WordComponent from './components/WordPageComponent';
import Footer from './components/Footer'
import EditWordComponent from './components/EditWordComponent'
import WordTableComponent from './components/WordTableComponent'

import 'regenerator-runtime/runtime.js'
import AllLemmasComponent from './components/AllLemmasComponent';

function LandingComponent() {
    return (
        <div>
            <NavbarUnimorph />
            <HeaderLogo />
            <AboutUsSection />
            <SearchSection />
            <ContributeDownload />
            <Footer />
        </div>
    )
}



const routing = (
    <Router>
        <div>
            <Route exact path="/" component={LandingComponent} />
            <Route exact path="/about" component={About} />
            <Route exact path="/lemmas" component={AllLemmasComponent} />
            <Route exact path="/lemmas/:slug/" component={WordComponent} />
            <Route path="/editword/:slug" component={EditWordComponent} />
            <Route path="/wordTable" component={WordTableComponent} />
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
)
