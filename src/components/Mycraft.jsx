import React from 'react';
import Swal from 'sweetalert2';
import { BiDollar } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Mycraft = ({artcraft,myartcrafts,setmyartcrafts}) => {
    const {_id,itemname,subcategoryname,shortdescription,price,rating,stockstatus,photourl}=artcraft;
    const handledelete=(id)=>{
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`https://zaicanvas-server.vercel.app/craftitems/${id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount>0){
Swal.fire({
      title: "Deleted!",
      text: "your craft has been deleted.",
      icon: "success",
      showConfirmButton:false,
      timer:2000,
    });
    const remainingcraft=myartcrafts.filter(craft=>craft._id!==id);
    setmyartcrafts(remainingcraft);
        }
    })
  }
})
    }
       return (
           <div>
               <div className="card bg-base-100 shadow-lg h-full">
     <figure className='h-[300px]'>
       <img
         src={photourl}
         alt="craft item" 
         className='w-full h-full object-cover object-fill'
         />  
     </figure>
     <div className="card-body">
       <h2 className="card-title text-3xl font-bold">{itemname}</h2>
       <p className='text-xl font-semibold'>{subcategoryname}</p>
       <p className='text-lg'>{shortdescription}</p>
       <div className='flex justify-between text-2xl font-bold'>
           <div className='flex items-center'>
               <BiDollar className='text-3xl'></BiDollar>
               <p>{price}</p>
           </div>
           <div className='flex items-center'>
               <IoStar className='text-[#FFD700]'></IoStar>
               <p>{rating}</p>
           </div>
       </div>
       
           <p className='text-end text-xl font-bold'>{stockstatus}</p>
       <div className="card-actions flex justify-between items-center">
         <button className="btn btn-primary text-xl"><Link to={`/updatecraft/${_id}`}>Update</Link></button>
         <button onClick={()=>handledelete(artcraft._id)} className="btn btn-primary text-xl">Delete</button>
       </div>
     </div>
   </div>
           </div>
       );
};

export default Mycraft;