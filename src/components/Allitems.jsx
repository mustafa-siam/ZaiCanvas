import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Craftcard from './Craftcard';

const Allitems = () => {
    const craftitemsloader=useLoaderData();
    const [craftitems,setcraftitems]=useState(craftitemsloader);
    const handlefilter=(select)=>{
       if(select==='all'){
        setcraftitems(craftitemsloader)
       }
       else{
        const filterd=craftitems.filter(item=>item.customization?.toLowerCase()===select.toLowerCase())
        setcraftitems(filterd)
       }
    }
    return (
        <div>
          <div className="dropdown my-5 flex justify-end">
  <div tabIndex={0} role="button" className="btn m-1">Filter for craft customization</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handlefilter('all')}>All</a></li>
    <li><a onClick={()=>handlefilter('yes')}>Yes</a></li>
    <li><a onClick={()=>handlefilter('no')}>No</a></li>
  </ul>
</div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
            {
                craftitems.map(craftitem=><Craftcard key={craftitem._id} craftitem={craftitem}></Craftcard>)
            }
          </div>
        </div>
    );
};

export default Allitems;