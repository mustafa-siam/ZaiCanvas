import React, { useEffect, useState } from 'react';
import Catagory from './Catagory';
import { Typewriter } from 'react-simple-typewriter'

const Catagories = () => {
    const [craftcatagories,setcraftcatagories]=useState([]);
    useEffect(()=>{
        fetch('zaicanvas-server.vercel.app/craftcatagory')
        .then(res=>res.json())
        .then(data=>setcraftcatagories(data));
    },[])
    return (
        <div className='px-2'>
            <h1 className='text-4xl font-bold pb-8'>Our Most Popular {' '}
  <span className=''>
    <Typewriter
      words={['Catagory', 'Crafts', 'Collection']}
      loop={true}
      cursor
      cursorStyle='|'
      typeSpeed={100}
      deleteSpeed={70}
      delaySpeed={1500}
    />
  </span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
                {
                    craftcatagories.map(catagory=><Catagory key={catagory._id} catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;