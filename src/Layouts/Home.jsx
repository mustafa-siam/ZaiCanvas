import React from 'react';
import Bannerslide from '../pages/Bannerslide';
import Catagories from '../pages/Catagories';

const Home = () => {
    return (
        <div className='space-y-12'>
            <Bannerslide></Bannerslide>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;