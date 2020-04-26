import 'regenerator-runtime/runtime.js'
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


function LandingComponent() {
    return(
        <div>
            <NavbarUnimorph/>
            <HeaderLogo/>
            <AboutUsSection/>
            <SearchSection/>
            <ContributeDownload/>
            <Footer/>
        </div>
    )
}

function Footer(){
    return(
        <div>
            <h1>This is the footer</h1>
        </div>
    )
}

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={LandingComponent} />
        <Route path="/language" component={LanguagePageComponent} />
        <Route path="/word" component={WordComponent} />
      </div>
    </Router>
  )


ReactDOM.render(
    routing,
    document.getElementById('root')
)
