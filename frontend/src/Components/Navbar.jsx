import React, { useEffect, useState, useRef} from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <nav className=" fixed right-0 left-0 top-0 z-50 text-white bg-gray-700 md:bg-gray-900" ref={menuRef}>
        <div className="flex flex-col md:flex-row md:flex md:justify-between  p-4 md:mx-8">
        
            <div className="flex justify-between items-center gap-8 md:mt-0 mt-2 ">
            <div>
            <Link to="/" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              MERN
            </Link>
            </div>


            <div >
          <button
              onClick={() => setOpen(!open)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded={open}
            >
              {open ? <IoMdClose className="text-2xl text-white" />:<AiOutlineMenuFold className="text-2xl text-white" />}
            </button>
          </div>

            </div>

          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-500 ease-in ${open ? "block" : "hidden"}`}
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Create a Post
                </Link>
              </li>
              <li>
                <Link
                  to="/data"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  All Data
                </Link>
              </li>
            </ul>
          </div>
         
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
