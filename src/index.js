import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import LanguagesList from './components/LanguageComponent';
import NavbarUnimorph from './components/core/NavbarComponent';
import About from './components/about-us/About';
import AboutUsSection from './components/about-us/AboutUsComponent';
import ContributeDownload from './components/core/ContributeDownload';
import HeaderLogo from './components/core/HeaderComponent';
import SearchSection from './components/SearchComponent';
import LemmaDetailPage from './components/lemma/LemmaDetail';
import Footer from './components/core/Footer';
import AllWordsComponent from './components/AllWordsComponent';
import 'regenerator-runtime/runtime.js';
import AllLemmasComponent from './components/lemma/AllLemmasComponent';
import MyAccount from './components/account/MyAccount';
import { Provider } from 'react-redux';
import store from './store'
import ContactUs from './components/core/ContactUs';

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
            <Route exact path="/:lang/lemmas" component={AllLemmasComponent} />
            <Route exact path="/:lang/lemmas/:slug/" component={LemmaDetailPage} />
            <Route exact path="/:lang/words" component={AllWordsComponent} />
            <Route exact path="/languages" component={LanguagesList}/>
            <Route exact path="/account" component={MyAccount} />
            <Route exact path="/contact" component={ContactUs} />
        </div>
    </Router>
)

ReactDOM.render(
    <Provider store={store}>
        {routing}
    </Provider>,
    document.getElementById('root')
)
