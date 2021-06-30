import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavigationBar from "./navbar/Navbar";
import Footer from "./footer/footer";
import Home from "./pages/home";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from "./pages/realtime";
import Background from "./pages/background";
import Aboutus from "./pages/aboutus";
import Fromimg from "./pages/fromimg";
import Fromvid from "./pages/fromvid";
import Contactus from "./pages/contactus";


function runapp() {

  return (
    <>
    <Router>
    <nav className="Nav-bar">
     <NavigationBar/>
      </nav>

    <Switch>
      <Route path='/'exact component = {Home} />
      <Route path='/home'exact component = {Home} />
      <Route path='/realtime'exact component = {App} />
      <Route path='/background'exact component = {Background} />
      <Route path='/aboutus'exact component = {Aboutus} />
      <Route path='/contactus'exact component = {Contactus} />
      <Route path='/fromimg'exact component = {Fromimg} />
      <Route path='/fromvid'exact component = {Fromvid} />
      
    </Switch>


    </Router>
    <div className="footer">
        <Footer/>
      </div>
    </>

  );
}

export default runapp;