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
      <div className="md:bg-[#F4F3F0] p-6 md:p-24 m-4 md:m-24 rounded-xl shadow-lg">
      <h2 className="text-center font-bold text-3xl md:text-4xl pb-6">
        Update your Art Craft
      </h2>
      <p className="text-center pb-10 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
        Update your unique craft to our marketplace. Please fill in the form below
        with item details.
      </p>
      <form onSubmit={handleupdate}>
        <div className="grid md:grid-cols-2 gap-6 pb-6">
          <fieldset className="w-full">
            <legend className="text-base">Item Name:</legend>
            <input
              type="text"
              name="itemname"
              className="input input-bordered w-full"
              placeholder="Item name"
              defaultValue={itemname}
            />
          </fieldset>

          <fieldset className="w-full">
            <legend className="text-base">Subcategory Name:</legend>
            <input
              type="text"
              name="subcategoryname"
              className="input input-bordered w-full"
              placeholder="Subcategory name"
              defaultValue={subcategoryname}
              required
            />
          </fieldset>

          <fieldset className="w-full">
            <legend className="text-base">Short Description:</legend>
            <input
              type="text"
              name="shortdescription"
              className="input input-bordered w-full"
              placeholder="Short description"
              defaultValue={shortdescription}
            />
          </fieldset>

          <fieldset className="w-full">
            <legend className="text-base">Price:</legend>
            <input
              type="text"
              name="price"
              className="input input-bordered w-full"
              placeholder="Price"
              defaultValue={price}
            />
          </fieldset>

          <fieldset className="w-full">
            <legend className="text-base">Rating:</legend>
            <input
              type="text"
              name="rating"
              className="input input-bordered w-full"
              placeholder="Rating"
              defaultValue={rating}
            />
          </fieldset>

          <fieldset className="w-full">
            <legend className="text-base">Customization:</legend>
            <input
              type="text"
              name="customization"
              className="input input-bordered w-full"
              placeholder="Yes / No"
              defaultValue={customization}
            />
          </fieldset>

          <fieldset className="w-full">
            <legend className="text-base">Processing Time:</legend>
            <input
              type="text"
              name="processingtime"
              className="input input-bordered w-full"
              placeholder="Processing time"
              defaultValue={processingtime}
            />
          </fieldset>

          <fieldset className="w-full">
            <legend className="text-base">Stock Status:</legend>
            <input
              type="text"
              name="stockstatus"
              className="input input-bordered w-full"
              placeholder="In stock / Made to order"
              defaultValue={stockstatus}
            />
          </fieldset>
          <fieldset className="md:col-span-2">
            <legend className="text-base">Photo URL:</legend>
            <input
              type="text"
              name="photourl"
              className="input input-bordered w-full"
              placeholder="Add photo URL"
              defaultValue={photourl}
              required
            />
          </fieldset>
        </div>

        <input
          type="submit"
          value="Add Item"
          className="btn btn-block bg-[#D2B48C] hover:bg-[#c49c6c] text-white text-base"
        />
      </form>     
        </div>
    );
};

export default Updatecraft;