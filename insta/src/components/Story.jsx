import React, { useState } from "react";
import Home from "./home";
import { IoMdHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiAddBoxFill } from "react-icons/ri";
import Reel from "./Reel/Reel";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";

const Story = () => {
  const [activeState, setactiveState] = useState("home");
  return (
    <>
      <div className="main w-full h-screen py-4 flex justify-center items-center ">
        <div className="phone w-[50vh] relative shadow-sm shadow-black h-full ">
          {activeState == "home" && <Home />}
          {activeState == "Search" && <Search />}
          {activeState == "reel" && <Reel />}
          {activeState == "Profile" && <Profile />}

          <div className="fotter flex h-[5%] items-center justify-around text-2xl">
            <IoMdHome
              className="cursor-pointer"
              onClick={() => setactiveState("home")}
            />
            <IoSearchSharp
              className="cursor-pointer"
              onClick={() => setactiveState("Search")}
            />
            <RiAddBoxFill
              className="cursor-pointer"
              onClick={() => setactiveState("reel")}
            />
            <div
              className="w-6 h-6 rounded-full bg-cover z-10 cursor-pointer bg-center bg-[url('./img/my.jpg')]"
              onClick={() => setactiveState("Profile")}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
