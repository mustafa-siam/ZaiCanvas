import React, { useContext, useState } from 'react';
import { authcontext } from '../Routes/Authprovider';
import { Link} from 'react-router-dom';

const Userprofile = () => {
    const {user}=useContext(authcontext);
     const { displayName, email, photoURL } = user || {};
    return (
         <div className='flex h-screen justify-center items-center w-2/3 w-auto shadow-2xl bg-blue-50'>
<div className=" bg-base-100 w-2/3 card">
  <figure className="px-10 pt-10">
    <img
      src={photoURL}
      alt="profile pic"
      className="rounded-xl w-1/3 shadow-2xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">User Name:{displayName}</h2>
    <p>Email: {email}</p>
    <div className="card-actions">
        <Link to={'/editprofile'}><button className="btn btn-primary">Edit profile</button></Link>    
    </div>
  </div>
</div>
</div>
    );
};

export default Userprofile;