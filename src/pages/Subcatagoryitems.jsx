import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Craftcard from '../components/Craftcard';

const Subcatagoryitems = () => {
    const catagoryloader= useLoaderData();
    const [catagoryitems,setcatagoryitems]=useState(catagoryloader)
    return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {catagoryitems.map(item =><Craftcard key={item._id} craftitem={item}></Craftcard>)}
    </div>
    );
};

export default Subcatagoryitems;