import React from 'react';
import Banner from "../banner/Banner";
import Contents from "../contents/contents";
import Cards from "../cards/cards";
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