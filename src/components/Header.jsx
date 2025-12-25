import React from "react";
import hamburgerIcon from "../assets/hamburger_icon.png";
import searchIcon from "../assets/search_icon.png";
import userIcon from "../assets/user_icon.png";
import { toggleMenu } from "../store/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }
  return (
    <header className="bg-white grid grid-cols-[1fr_3fr_1fr] items-center shadow-md p-4 sticky top-0 z-10 ">
      <div className="flex gap-3 items-center">
        <img
          src={hamburgerIcon}
          alt="menu"
          className="w-8 h-8 cursor-pointer"
          onClick={handleToggleMenu}
        />
        <h1 className="text-3xl font-bold text-red-500 cursor-pointer">
          MiniTube
        </h1>
      </div>

      <form
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex w-full max-w-[600px]">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 py-3 pl-5 border border-gray-500 rounded-l-full outline-none focus:ring-1 focus:ring-red-700"
          />
          <button className="border border-gray-500 rounded-r-full px-4 bg-gray-200">
            <img src={searchIcon} alt="search" className="w-6 h-6" />
          </button>
        </div>
      </form>

      <div className="flex justify-end mr-5">
        <img src={userIcon} alt="user" className="w-12 h-12 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
