import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
const {handleSignOut ,user,setUser}=useContext(AuthContext)

const signOut=()=>{
  handleSignOut()
  .then(()=>{
    setUser(null)
    Swal.fire({
            title: "Sign Out successful!",
            icon: "warning",
            draggable: true
          });
  })
  .catch(err=>{
      console.log(err);
      Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      })
}


const navItem = (
    <>
    <NavLink to='/' className='text-base font-semibold text-blue-600 mr-6'>Home</NavLink>
    <NavLink to='/addTask' className='text-base font-semibold text-blue-600 mr-6'>Add Task</NavLink>
    <NavLink to='/manageTask' className='text-base font-semibold text-blue-600 mr-6'>Manage Task</NavLink>
    <NavLink to='/dashboard' className='text-base font-semibold text-blue-600 mr-6'>Dashboard</NavLink>
    </>
)

    return (
        <div>
            <div className="navbar bg-blue-100 md:px-14 fixed z-10 bg-opacity-70">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItem}
      </ul>
    </div>
    <div className="text-3xl font-bold text-blue-800 flex items-center gap-2">
        <img className="h-14 rounded-full object-cover" src="https://image.shutterstock.com/image-vector/stopwatch-vector-icon-isolated-on-260nw-546713671.jpg" alt="" />
        Task</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
   {user ?  <Link to='/login'>
    <button onClick={signOut} className="btn bg-[#4b9dee] text-base font-semibold text-white hover:text-blue-600">Sign-Out</button>
    </Link>: <Link to='/login'>
    <button className="btn bg-[#4b9dee] text-base font-semibold text-white hover:text-blue-600">Sign In</button>
    </Link>}
  </div>
</div>
        </div>
    );
};

export default Navbar;