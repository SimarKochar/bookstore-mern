import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft, HiOutlineHeart, HiOutlineShoppingBag, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";

import avatarImg from "../assets/avatar.png"
import { useState } from "react";
import { useSelector } from "react-redux";


const navigation = [
    {name: "Dashboard", href:"/user-dashboard"},
    {name: "Orders", href:"/orders"},
    {name: "Cart Page", href:"/cart"},
    {name: "Check Out", href:"/checkout"},
]

const Navbar = () => {



    const  [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const cartItems = useSelector(state => state.cart.cartItems);
   
    const CurrentUser = false;


    const token = localStorage.getItem('token');
  
    return (
      <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          {/* left side */}
          <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
              <HiMiniBars3CenterLeft className="size-6" />
            </Link>

            {/* search input */}
            <div className="relative sm:w-72 w-40 space-x-2">
              <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />

              <input
                type="text"
                placeholder="Search here"
                className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* rigth side */}
          <div className="flex items-center gap-4 relative md:space-x-3">
            <div>
              {CurrentUser ? (
                <>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="relative"
                  >
                    <img
                      src={avatarImg}
                      alt=""
                      className={`size-7 rounded-full ${
                        CurrentUser ? "border-2 border-primary" : ""
                      }`}
                    />
                  </button>
                  {/* show dropdown  */}
                  {isDropdownOpen && (
                    <div
                      className="absolute top-10 right-0 bg-white shadow-md p-4 rounded
                        w-48 z-10"
                    >
                      <ul>
                        {navigation.map((item) => (
                          <li
                            key={item.name}
                            onClick={() => {
                              setIsDropdownOpen(false);
                            }}
                            className="py-2"
                          >
                            <Link
                              to={item.href}
                              className="block text-gray-700 hover:text-primary"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <HiOutlineUser className="size-6" />
                </Link>
              )}
            </div>
            <button className="hidden sm:block relative">
              <HiOutlineHeart className="size-6" />
            </button>

            <Link
              to="/cart"
              className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md relative"
            >
              <HiOutlineShoppingCart />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 text-white py-1 px-2 text-xs font-bold">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;