import React from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NavigationBar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import './App.css';
import Background from "./pages/background";
import Aboutus from "./pages/aboutus";
import Fromimg from "./pages/fromimg";
import Fromvid from "./pages/fromvid";
import Contactus from "./pages/contactus";
import Realtime from "./pages/realtime";


function App() {

  return (
    <>
    <Router>
    <nav className="Nav-bar">
     <NavigationBar/>
      </nav>

    <Switch>
      <Route path='/'exact component = {Home} />
      <Route path='/home'exact component = {Home} />
      <Route path='/realtime'exact component = {Realtime} />
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

export default App;
