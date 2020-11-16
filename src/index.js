import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
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
import ContactUs from './components/core/ContactUs';
import LoginComponent from './components/account/Login';
import RegisterComponent from './components/account/Register';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store'
import PageNotFound from './components/core/PageNotFound';

function LandingComponent() {
    return (
        <div>
            <NavbarUnimorph/>
            <HeaderLogo />
            <AboutUsSection />
            <SearchSection />
            <ContributeDownload />
        </div>
    );
}



const Routing = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const user = window.localStorage.getItem("user");
        window.localStorage.setItem("language", JSON.stringify({walsCode: "bul", name: "Bulgarian"}));
        setUser(JSON.parse(user));
    }, []);

    return(
    <ConnectedRouter history={history}>        
        <Router>
            <div style={{ height: "100%", paddingBottom: 50 }}>
                <Switch>
                    <Route exact path="/" component={LandingComponent} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/:lang/lemmas" component={AllLemmasComponent} />
                    <Route exact path="/:lang/lemmas/:slug/" component={LemmaDetailPage} />
                    <Route exact path="/:lang/words" component={AllWordsComponent} />
                    <Route exact path="/languages" component={LanguagesList}/>
                    <Route exact path="/me"  render={(props) => <MyAccount user={user} {...props}/>} />
                    <Route exact path="/contact" component={ContactUs} />
                    <Route exact path="/login" component={LoginComponent}/>
                    <Route exact path="/register" component={RegisterComponent}/>
                    <Route render={() => <PageNotFound />} />
                </Switch>
                <Footer />
            </div>
        </Router>
    </ConnectedRouter>
)};

ReactDOM.render(
    <Provider store={store}>
        <Routing />
    </Provider>,
    document.getElementById('root')
)
