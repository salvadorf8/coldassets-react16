import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/header/header.component';
import LandingPage from './landing-page/landing-page.component';
import Services from './services-support/services.component';
import AboutUs from './about-us/about-us.component';
import Footer from './footer/footer.component';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact component={LandingPage} />
                    <Route path='/services' exact component={Services} />
                    <Route path='/aboutus' exact component={AboutUs} />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}

export default App;
