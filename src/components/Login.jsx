import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authcontext } from '../Routes/Authprovider';
import Swal from 'sweetalert2'
const Login = () => {
  const {signin,loginwithgoogle,loginwithgithub}=useContext(authcontext)
  const navigate=useNavigate();
    const handlelogin=(e)=>{
          e.preventDefault();
           const form=e.target;
            const email=form.email.value;
        const password=form.password.value;
        signin(email,password)
        .then(result=>{
          console.log(result.user);
          form.reset();
             Swal.fire({
                         title: "Login Successfully",
                         icon: "success",
                         showConfirmButton:false,
                         timer:1000
                         })
              setTimeout(() =>navigate('/'), 2000);
        })
        .catch(error=>{
          console.error(error)
           Swal.fire({
                         title: "Incorrect Username",
                         icon: "error",
                         showConfirmButton:false,
                         timer:1500
                         })
        })
    }
    const handlegoogle=()=>{
         loginwithgoogle()
         .then(result=>{
           Swal.fire({
                         title: "Login Successfully",
                         icon: "success",
                         showConfirmButton:false,
                         timer:1000
                         })
              setTimeout(() =>navigate('/'), 2000);
              console.log(result.user)
         })
         .catch(error=>{
          console.error(error)
         })
    }
    const handlegithub=()=>{
 loginwithgithub()
         .then(result=>{
           Swal.fire({
                         title: "Login Successfully",
                         icon: "success",
                         showConfirmButton:false,
                         timer:1000
                         })
              setTimeout(() =>navigate('/'), 2000);
              console.log(result.user)
         })
         .catch(error=>{
          console.error(error)
         })
    }
    return (
        <div>
             <div  className="h-screen flex items-center flex-col justify-center">
          <h1 className="text-3xl font-bold my-10 text-center ">please Login</h1>
            <div className="md:w-3/4 lg:w-1/2 w-3/4 mx-auto shadow-2xl p-6">
      <form onSubmit={handlelogin}>
      <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name="password" className="input w-full" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <div className="my-4 flex md:flex-row flex-col justify-between gap-4">
        <button onClick={handlegoogle} className="btn  btn-outline btn-success">Login with google</button>
        <button onClick={handlegithub} className="btn  btn-outline btn-success">Login with github</button>
        </div>
        <p className="text-center my-4">Don't have an Account? <Link className="text-blue-600" to={'/register'}>Register</Link></p>
    </div>
        </div>
        </div>
    );
};

export default Login;