import React from 'react'
import Banner from '../components/Banner';
import BestSellerBooks from './Admission';

import Notice from './Notice';
import PromoBanner from './HomeAbt';
import Gallery from './Gallery';
import Reviews from './Reviews';
import MyFooter from '../components/MyFooter';
import HomeAbt from './HomeAbt';
import Admisson from './Admission';

const Home = () => {
  return (
    <div>
     <Banner/>
     <Notice></Notice>
     <HomeAbt/>
     <Admisson/>
     <Gallery/>
     <Reviews/>
    </div>
  )
}

export default Home;
