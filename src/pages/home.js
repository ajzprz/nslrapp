import React from 'react';
import Banner from "../components/banner/Banner";
import Contents from '../components/contents/contents';
import Cards from "../components/cards/cards";

function Home(){
  return(
    <div>
      <Banner/>
      <Contents/>
      <Cards/>
    </div>
  );
}

export default Home;