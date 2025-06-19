import React from 'react';
import Bannerslide from '../pages/Bannerslide';
import Catagories from '../pages/Catagories';
import Herosection from '../pages/Herosection';
import Footer from '../pages/Footer';
import Services from '../pages/Services';

const Home = () => {
    return (
        <div className='space-y-12'>
            <Bannerslide></Bannerslide>
            <Catagories></Catagories>
            <Herosection></Herosection>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;