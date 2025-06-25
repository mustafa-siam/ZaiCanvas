import React, { useContext } from 'react';
import { authcontext } from './Authprovider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
   const {user,loader}=useContext(authcontext);
   if(loader){
     return <span className="loading loading-spinner loading-xl"></span>
   }
   if(user){
    return children;
   }
   return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Privateroute;