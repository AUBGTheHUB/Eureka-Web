import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import AllDownloads from './components/DownloadDataComponent';
import NavbarUnimorph from './components/NavbarComponent';
import AboutUsSection from './components/AboutUsComponent';
import ContributeDownload from './components/ContributeDownload';
import HeaderLogo from './components/HeaderComponent';
import SearchSection from './components/SearchComponent';
import WordComponent from './components/WordPageComponent';
import Footer from './components/Footer';
import EditWordComponent from './components/EditWordComponent'
import AllWordsComponent from './components/AllWordsComponent';
import LemmaTable from './components/LemmaTable';
import DimensionComponenet from './components/DimensionsComponent';
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
            <Route exact path="/lemmas" component={AllLemmasComponent} />
            <Route exact path="/lemmas/:slug/" component={WordComponent} />
            <Route exact path="/words" component={AllWordsComponent} />
            <Route exact path="/words/:slug" component={WordComponent} />
            <Route exact path="/downloads" component={AllDownloads}/>
            <Route exact path="/test" component={DimensionComponenet}/>
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
)
