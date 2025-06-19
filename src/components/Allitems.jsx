import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Craftcard from './Craftcard';

const Allitems = () => {
    const craftitemsloader=useLoaderData();
    const [craftitems,setcraftitems]=useState(craftitemsloader)
    return (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
            {
                craftitems.map(craftitem=><Craftcard key={craftitem._id} craftitem={craftitem}></Craftcard>)
            }
          </div>
        </div>
    );
};

export default Allitems;