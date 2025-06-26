
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authcontext } from '../Routes/Authprovider';
import Swal from 'sweetalert2'
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Slide } from "react-awesome-reveal";
const Navbar = () => {
  const {user,signout}=useContext(authcontext)
  const navlinks=<>
  <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/allitems"}>All items</NavLink></li>
    <li><NavLink to={"/additems"}>Add items</NavLink></li>
    {user && <li><NavLink to={`/mycraft/${user.email}`}>My items</NavLink></li>}
  </>
  const handlelogout=()=>{
 signout();
  Swal.fire({
                title: "LogOut Successfully",
                icon: "success",
                showConfirmButton:false,
                timer:1000,
                });
  }
    return (
       <div className="navbar bg-base-100 shadow-sm mb-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 pr-2 shadow">
        {
          navlinks
        }
      </ul>
    </div>
    <Slide>
        <Link to="/" className="btn btn-ghost text-xl inline gap-1">
  <span className="text-[#ee2d67]">Zai</span><span>Canvas</span>
</Link>

      </Slide>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end flex items-center md:gap-4 gap-2">
    {user ? (
      <>
        <Link to="/userprofile">
          <img
            className="w-12 h-12 rounded-[45%] border-2 border-b-gray-950"
            src={user.photoURL}
            alt="User"
            data-tooltip-id="my-tooltip-1"
          />
        </Link>
        <ReactTooltip
        id="my-tooltip-1"
        place="bottom"
        content={user.displayName}
      />
        <button className="btn" onClick={handlelogout}>Log Out</button>
      </>
    ) : (
      <>
        <img className="w-10 h-10" src="https://i.postimg.cc/4Nz5d0G8/user.png" alt="Default User" />
        <Link to="/login">
          <button className="btn">Log In</button>
        </Link>
      </>
    )}
   <label className="toggle text-base-content">
  <input type="checkbox" value="black" className="theme-controller" />

  <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

  <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

</label>
</div>
</div>
    );
};

export default Navbar;