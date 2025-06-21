import React, { useContext } from 'react';
import { authcontext } from '../Routes/Authprovider';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
const Editprofile = () => {
   const {user}=useContext(authcontext)
    const navigate=useNavigate();
    const handleupdateProfile=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photourl=form.photourl.value;
        updateProfile(user,{
            displayName:name,
            photoURL:photourl,
        })
         Swal.fire({
                        title: "Profile updated successfully",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    e.target.reset();
        setTimeout(() =>navigate('/userprofile'), 2000);
    }
    return (
        <div>
            <div className="flex justify-center h-screen items-center ">
                  <form onSubmit={handleupdateProfile} className="md:w-3/4 lg:w-1/2 w-3/4 mx-auto  shadow-2xl p-6">
      <fieldset className="fieldset">
      <label className="fieldset-label">Your Name</label>
      <input type="text" name="name" className="input w-full" placeholder="username" defaultValue={user.displayName}/>
      <label className="fieldset-label">Your Photo</label>
      <input type="text" name="photourl" className="input w-full" placeholder="Photo Url" defaultValue={user.photoURL}/>
          <button className="btn btn-neutral mt-4">save changes</button>
        </fieldset>
      </form>
        </div>
        </div>
    );
};

export default Editprofile;