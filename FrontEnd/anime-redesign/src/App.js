import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Info from "./components/info.component";
import About from "./components/about.component";
import Contact from "./components/contact.component";
import Animes from "./components/animes.component";


import {useTranslation} from "react-i18next";

function App() {

  const {t, i18n} = useTranslation('common');


  return (<Router>
    <div className="App">
   
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>{t('welcome.enterprise')}</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>{t('welcome.login')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>{t('welcome.signup')}</Link>   
             
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"}>{t('welcome.contact')}</Link>                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>{t('welcome.about')}</Link>   
             
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/gallery"}>Animes</Link>   
             
              </li>
              <li className="nav-item">
                  <Link className="nav-link"  onClick={() => i18n.changeLanguage('es')}>Español</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" onClick={() => i18n.changeLanguage('en')}>English</Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/info-user" component={Info} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/gallery" component={Animes} />
          </Switch>
        </div>
      </div> 
    </div>
    </Router>
  );
}

export default App;
