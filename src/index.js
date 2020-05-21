import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LanguagePageComponent from './components/LanguageComponent';
import NavbarUnimorph from './components/NavbarComponent';
import AboutUsSection from './components/AboutUsComponent';
import ContributeDownload from './components/ContributeDownload';
import HeaderLogo from './components/HeaderComponent';
import SearchSection from './components/SearchComponent';
import WordComponent from './components/WordPageComponent';
import Footer from './components/Footer'
import EditWordComponent from './components/EditWordComponent'
import WordTableComponent from './components/WordTableComponent'

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
            <Route path="/language" component={LanguagePageComponent} />
            <Route path="/word" component={WordComponent} />
            <Route path="/editword" component={EditWordComponent} />
            <Route path="/wordTable" component={WordTableComponent} />
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
)
