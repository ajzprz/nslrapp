import React from 'react';
import Banner from "../components/banner/Banner";
import Contents from '../components/contents/contents';
import Cards from "../components/cards/cards";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Home(){

return(

<div className="home">
      <div className="Banner">
        <Banner/>
      </div>

      <div className="Contents">
      <Contents/>
      </div>
      <div className="cards-sec">
        <Cards/>
      </div>
    </div>
)    
}

export default Home;