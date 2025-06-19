import React, { useEffect, useState } from 'react';
import Catagory from './Catagory';

const Catagories = () => {
    const [craftcatagories,setcraftcatagories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/craftcatagory')
        .then(res=>res.json())
        .then(data=>setcraftcatagories(data));
    },[])
    return (
        <div>
            <h1 className='text-4xl font-bold pb-8'>Our Most Popular Catagory</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
                {
                    craftcatagories.map(catagory=><Catagory key={catagory._id} catagory={catagory}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;