import { useContext } from "react";
import { authcontext } from "../Routes/Authprovider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Additems = () => {
    const {user}=useContext(authcontext)
    const navigate=useNavigate();
    const handleadditem=(e)=>{
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
        const email=form.email.value;
        const username=form.username.value;
        const photourl=form.photourl.value;
        const craftitem={itemname,subcategoryname,shortdescription,price,rating,customization,processingtime,stockstatus,email,username,photourl}
console.log(craftitem)
fetch('http://localhost:5000/craftitems',{
  method:"POST",
  headers:{
    "content-type":"application/json",
  },
  body:JSON.stringify(craftitem)
})
.then(res=>res.json())
.then(data=>{
  if(data.insertedId){
     Swal.fire({
                   title: "Your craft item added successfully",
                   icon: "success",
                   showConfirmButton:false,
                   timer:1500,
                   });
                   e.target.reset();
                   setTimeout(() => navigate("/allitems"), 2000);

  }
})

    }
    return (
          <div className='bg-[#F4F3F0] p-24 m-24'>
            <h2 className='text-center font-bold text-4xl pb-9'>Add new Art item</h2>
            <p className='text-center pb-12'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleadditem}>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">Item Name:</legend>
  <input type="text" name="itemname" className="input w-full" placeholder="item name" />
  
</fieldset>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">subcategory_Name:</legend>
  <input type="text" name="subcategoryname" className="input w-full" placeholder="subcategory name" />
</fieldset>
                </div>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">short description:</legend>
  <input type="text" name="shortdescription" className="input w-full" placeholder="short description" />
  
</fieldset>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">price:</legend>
  <input type="text" name="price" className="input w-full" placeholder="price" />
</fieldset>
                </div>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">Rating:</legend>
  <input type="text" name="rating" className="input w-full" placeholder="rating" />
  
</fieldset>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">customization:</legend>
  <input type="text" name="customization" className="input w-full" placeholder="Yes/No" />
</fieldset>
                </div>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">processing_time:</legend>
  <input type="text" name="processingtime" className="input w-full" placeholder="processing_time" />
  
</fieldset>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">stockStatus:</legend>
  <input type="text" name="stockstatus" className="input w-full" placeholder=" In stock/Made to Order" />
</fieldset>
                </div>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base"> User Email:</legend>
  <input type="text" name="email" className="input w-full" defaultValue={user.email} required/>
  
</fieldset>
<fieldset className="fieldset w-1/2">
  <legend className="fieldset-legend text-base">User Name:</legend>
  <input type="text" name="username" className="input w-full" placeholder="User Name"/>
</fieldset>
                </div>
                <div className='md:flex gap-9 pb-8'>
<fieldset className="fieldset w-full">
  <legend className="fieldset-legend text-base">Photo Url:</legend>
  <input type="text" name="photourl" className="input w-full" placeholder="Add photo url" />
</fieldset>
                </div>
                
                  <input type="submit" className='btn text-base bg-[#D2B48C] btn-block' value="Add Coffee" />
                
            </form>
        </div>
    );
};

export default Additems;