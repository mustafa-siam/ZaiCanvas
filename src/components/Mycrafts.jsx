import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Mycraft from './Mycraft';

const Mycrafts = () => {
    const craftloader=useLoaderData();
    const [myartcrafts,setmyartcrafts]=useState(craftloader);
    return (
        <div>
            hello {myartcrafts.length}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
            {
                myartcrafts.map(artcraft=><Mycraft key={artcraft._id} artcraft={artcraft} myartcrafts={myartcrafts} setmyartcrafts={setmyartcrafts}></Mycraft>)
            }
        </div>
        </div>
    );
};

export default Mycrafts;