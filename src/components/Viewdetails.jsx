import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authcontext } from '../Routes/Authprovider';

const Viewdetails = () => {
     const artcraft=useLoaderData();
     const {user}=useContext(authcontext)
  const {_id,itemname,subcategoryname,shortdescription,price,rating,customization,processingtime,stockstatus,photourl}=artcraft
    return (
        <div>
            <div >
                   <img className="w-full md:h-[500px] h-96" src={photourl} alt="" />
            </div>
              <div className="w-full p-4 flex flex-col justify-end gap-y-5">
                        <h2 className="text-[#ee2d67] uppercase text-4xl sm:text-5xl font-normal">{itemname}</h2>
                        <p className="text-xl">{subcategoryname}</p>
                         <p className="text-lg">{shortdescription}.Turn yourself or a loved one into a fun superhero character with this custom cartoon-style digital artwork.</p>
                    </div>
               <div className="grid grid-cols-2 gap-8 p-3">
                    <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Customization:</p>
                    <p>{customization}</p>
                </div>
                <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Stock Status</p>
                    <p>{stockstatus}</p>
                </div>
                <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Processing Time</p>
                    <p>{processingtime}</p>
                </div>
                <div>
                <p className="text-[#ee2d67] text-xl font-bold">Rating</p>
                <p>{rating}</p>
                </div>

               
                    <div>
                        <p className="text-[#ee2d67] text-xl font-bold">Price:</p>
                        <p>{price}</p>
                    </div>
                     <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Artist:</p>
                    <p>Mustafa siam</p>
                </div>
                     <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Artist contact:</p>
                    <p>{user.email}</p>
                </div>
                </div>

        </div>
    );
};

export default Viewdetails;