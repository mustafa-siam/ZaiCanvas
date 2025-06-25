import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authcontext } from "../Routes/Authprovider";
import Swal from 'sweetalert2';
import axios from "axios";
const Register = () => {
    const [passerror, setpasserror] = useState('');
    const { creatuser,updateuserprofile} = useContext(authcontext);

    const navigate = useNavigate();

    const handleregister =async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        const registeruser = { name, photourl, email, password };
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!regex.test(password)) {
            setpasserror("Password must have an uppercase, lowercase, and at least 6 characters.");
            setTimeout(() => {
                setpasserror("")
            }, 5000);
            return;
        }

        setpasserror('')
        console.log(registeruser)
       try {
      await creatuser(email, password);
      await updateuserprofile(name, photourl);
      const response = await axios.post(
        "zaicanvas-server.vercel.app/craftuser",
        registeruser
      );

      if (response.data.insertedId) {
        Swal.fire({
          title: "Registration Successful",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Registration Failed",
        text: error.message,
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
};
    return (
        <div>
            <div className="h-screen flex items-center flex-col justify-center">
                <h1 className="text-3xl font-bold my-10 text-center">please Register</h1>
                <form onSubmit={handleregister} className="md:w-3/4 lg:w-1/2 w-3/4 mx-auto shadow-2xl p-6">
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Your Name</label>
                        <input type="text" name="name" className="input w-full" placeholder="username" />
                        
                        <label className="fieldset-label">Your Photo</label>
                        <input type="url" name="photourl" className="input w-full" placeholder="Photo Url" />
                        
                        <label className="fieldset-label">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Email" />
                        
                        <label className="fieldset-label">Password</label>
                        <div>
                            <input type='password' name="password" className="input w-full" placeholder="Password" />
                            {passerror && <p className="text-red-500 my-1">{passerror}</p>}
                        </div>
                        
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    
                    <p className="text-center my-4">Already have an Account? <Link className="text-blue-600" to={'/login'}>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;