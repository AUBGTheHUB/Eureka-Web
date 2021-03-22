import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'regenerator-runtime/runtime.js';
import LoginComponent from './components/account/Login';
import MyAccount from './components/account/MyAccount';
import RegisterComponent from './components/account/Register';
import AboutUsSection from './components/core/AboutUsComponent';
import ContactUs from './components/core/ContactUs';
import ContributeDownload from './components/core/ContributeDownload';
import Footer from './components/core/Footer';
import HeaderLogo from './components/core/HeaderComponent';
import NavbarUnimorph from './components/core/NavbarComponent';
import PageNotFound from './components/core/PageNotFound';
import LanguagesList from './components/LanguageComponent';
import AllLemmasComponent from './components/lemma/AllLemmasComponent';
import LemmaDetailPage from './components/lemma/LemmaDetail';
import Proposals from './components/proposals/Proposals';
import SearchSection from './components/SearchComponent';
import Store, { Context } from './store';
import { login } from './store/actions/user';
import './styles.css';

function LandingComponent() {
    return (
        <div>
            <HeaderLogo />
            <AboutUsSection />
            <SearchSection />
            <ContributeDownload />
        </div>
    );
}

const Routing = () => {
    const [state, dispatch] = useContext(Context);
    console.log(state);
    useEffect(() => {
        const user = window.localStorage.getItem("user");
        if(user) {
            dispatch(login(JSON.parse(user)));
        }
    }, []);

    return (
        <>
            <NavbarUnimorph user={state.user} dispatch={dispatch}/>
            <Router>
                <div style={{ height: "100%", paddingBottom: 50 }}>
                    <Switch>
                        <Route exact path="/" component={LandingComponent} />
                        <Route exact path="/about" component={AboutUsSection} />
                        <Route exact path="/:lang/lemmas" component={AllLemmasComponent} />
                        <Route exact path="/:lang/lemmas/:slug/" component={LemmaDetailPage} />
                        <Route exact path="/languages" component={LanguagesList}/>
                        <Route exact path="/me"  component={MyAccount} />
                        <Route exact path="/contact" component={ContactUs} />
                        <Route exact path="/login" component={LoginComponent}/>
                        <Route exact path="/register" component={RegisterComponent}/>
                        <Route exact path="/proposals" component={Proposals} />
                        <Route render={() => <PageNotFound />} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
            </>
)};

ReactDOM.render(
    <Store>
        <Routing />
    </Store>,
    document.getElementById('root')
)
