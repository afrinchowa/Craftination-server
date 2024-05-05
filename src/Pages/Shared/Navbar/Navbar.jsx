import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo-removebg-preview.png"
const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/gallery">Gallery</NavLink>
      </li>
    </>
  );

  const navOptions2 = (
    <>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blogs</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <header className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen mx-auto ">
      <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mr-10 mt-3 z-[1] p-2 shadow bg-base-900 rounded-box w-44"
            >
              {navOptions}
              {navOptions2}
              
            </ul>
          </div>
        <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex">
            <div className="flex items-center px-4 -mb-1 gap-2">
              {navOptions}
            </div>
          </ul>
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
           <img className="w-20 h-20 " src={logo} alt="" />
          </a>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <div className="flex items-center px-4 -mb-1 gap-2">
              {navOptions2}
            </div>
          </ul>
         
        </div>
      </header>
    </div>
  );
};

export default Navbar;
