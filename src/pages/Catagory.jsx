
import { BiDollar } from "react-icons/bi";
import { IoStar } from "react-icons/io5";
const Catagory = ({catagory}) => {
     const {itemname,subcategoryname,shortdescription,price,rating,stockstatus,photourl}=catagory;
    return (
                    <div className="card bg-base-100 shadow-lg h-full hover:shadow-2xl">
          <figure className='h-[300px]'>
            <img
              src={photourl}
              alt="craft item" 
              className='w-full h-full object-cover object-fill'
              />  
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold">{itemname}</h2>
            <p className='text-lg font-semibold'>{subcategoryname}</p>
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
            <div className="card-actions justify-center ">
              <button className="btn btn-primary w-full text-xl">View Details</button>
            </div>
          </div>
        </div>
                
    );
};

export default Catagory;