import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";

const Fotter = () => {

  function ShowReel() {
    
      
  }
  
  return (
    <>
     <div className="fotter flex h-[5%] items-center justify-around text-2xl">
        <IoMdHome />
        <IoSearchSharp />
        <BiMoviePlay onClick={ShowReel} />
        <div className="w-6 h-6 rounded-full bg-cover bg-center bg-[url('./img/my.jpg')]"></div>
      </div>
    </>
  );
};

export default Fotter;
