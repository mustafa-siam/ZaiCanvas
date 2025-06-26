import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Updatecraft = () => {
  const artcraft=useLoaderData();
  const navigate=useNavigate()
  const {_id,itemname,subcategoryname,shortdescription,price,rating,customization,processingtime,stockstatus,photourl}=artcraft
  console.log(artcraft)
    const handleupdate=(e)=>{
          e.preventDefault();
          const form=e.target;
const itemname=form.itemname.value;
const subcategoryname=form.subcategoryname.value;
const shortdescription=form.shortdescription.value;
const price=form.price.value;
const rating=form.rating.value;
const customization=form.customization.value;
const processingtime=form.processingtime.value;
const stockstatus=form.stockstatus.value;
const photourl=form.photourl.value;
const craftitem={itemname,subcategoryname,shortdescription,price,rating,customization,processingtime,stockstatus,photourl}
console.log(craftitem)
fetch(`https://zaicanvas-server.vercel.app/craftitems/${_id}`,{
  method:'PUT',
  headers:{
    'content-type':'application/json',
  },
  body:JSON.stringify(craftitem)
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  if(data.modifiedCount>0){
Swal.fire({
                   title: "Your craft item Updated successfully",
                   icon: "success",
                   showConfirmButton:false,
                   timer:1500,
                   });
      setTimeout(() => navigate(-1), 2000);
  }
})
    }
    return (
        <div className='bg-[#F4F3F0] p-24 m-24'>
            <h2 className='text-center font-bold text-4xl pb-9'>Update your Art Craft</h2>
            <p className='text-center pb-12'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleupdate}>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">Item Name:</legend>
  <input type="text" name="itemname" className="input w-full" placeholder="item name" defaultValue={itemname} required/>
  
</fieldset>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">subcategory_Name:</legend>
  <input type="text" name="subcategoryname" className="input w-full" placeholder="subcategory name" defaultValue={subcategoryname} required/>
</fieldset>
                </div>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">short description:</legend>
  <input type="text" name="shortdescription" className="input w-full" placeholder="short description" defaultValue={shortdescription}/>
  
</fieldset>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">price:</legend>
  <input type="text" name="price" className="input w-full" placeholder="price" defaultValue={price} required/>
</fieldset>
                </div>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">Rating:</legend>
  <input type="text" name="rating" className="input w-full" placeholder="rating" defaultValue={rating}/>
  
</fieldset>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">customization:</legend>
  <input type="text" name="customization" className="input w-full" placeholder="Yes/No" defaultValue={customization} required/>
</fieldset>
                </div>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">processing_time:</legend>
  <input type="text" name="processingtime" className="input w-full" placeholder="processing_time" defaultValue={processingtime}/>
  
</fieldset>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">stockStatus:</legend>
  <input type="text" name="stockstatus" className="input w-full" placeholder=" In stock/Made to Order" defaultValue={stockstatus}/>
</fieldset>
                </div>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-full">
  <legend className="fieldset-legend text-base">Photo Url:</legend>
  <input type="text" name="photourl" className="input w-full" placeholder="Add photo url" defaultValue={photourl} required/>
</fieldset>
                </div>
                
                  <input type="submit" className='btn text-base bg-[#D2B48C] btn-block' value="Update ArtCrat" />
                
            </form>
        </div>
    );
};

export default Updatecraft;