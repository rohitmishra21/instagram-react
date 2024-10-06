import React, { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { LuHeart } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";

import Post from "./Post";

import { IoIosSend } from "react-icons/io";
const Home = () => {
  const [storyPost, setstoryPost] = useState([]);
  const [show, setSetshow] = useState(false);
  const [storyTarget, setStoryTarget] = useState([]);
  const [loader, setLoader] = useState(0);

  useEffect(() => {
    const API_KEY = `RA53H7u2zrx3syiGC35C0ipC1hHUfN7XAHHZRENK9HPDF4j233UrOXqN`;

    async function fetchUserImages() {
      const userResponse = await fetch(
        "https://api.pexels.com/v1/curated?page=1&per_page=30",
        {
          method: "GET",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const userResponseData = await userResponse.json();
      const userImgData = userResponseData.photos;
      setstoryPost(userImgData);
    }

    fetchUserImages();
  }, []);

  const showStory = (dets) => {
    let target = storyPost[dets.target.id].src.large2x;
    setStoryTarget(target);
    setSetshow(true);

    const interval = setInterval(() => {
      setLoader((prevLoader) => {
        if (prevLoader < 100) {
          return prevLoader + 10;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 300);

    setTimeout(() => {
      setSetshow(false);
      setLoader(0);
      clearInterval(interval);
    }, 3000);
  };

  
  return (
    <>
      <div className="container overflow-auto   h-[95%] ">
        <div className="top  flex justify-between px-2 py-2 items-center">
          <img src="./img/logo.png" className="w-32" alt="" />
          <div className="flex text-2xl gap-2">
            <FiHeart />
            <RiSendPlaneFill />
          </div>
        </div>
        <div
          className="stores   w-full px-2 h-36 whitespace-nowrap py-2 overflow-x-auto overflow-y-hidden"
          onClick={showStory}
        >
          <div className="story inline-block  ">
            <div className=" w-24 h-24 p-1 rounded-full relative">
              <img
                src="./img/my.jpg"
                className="w-full h-full object-cover  rounded-full"
                alt=""
              />
              <div className="w-7 h-7 border-[3.5px] flex justify-center items-center bg-blue-600 text-white  absolute right-0 bottom-2 rounded-full">
                <IoMdAdd />
              </div>
            </div>
            <h1 className="text-xs text-center  font-semibold">Your story</h1>
          </div>
          {storyPost.map((info, index) => (
         
            
            <>
            
              <div className="inline-block " key={info.src.large}>
              
                <div className="story w-24 h-24 p-1  bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full ">
                  <img
                    src={info.src.large}
                    id={index}
                    className="border-4  object-cover  h-full w-full rounded-full"
                    alt=""
                  />
                </div>
                <h1 className="text-xs text-center  font-semibold">
                  {info.photographer}
                </h1>
              </div>
            </>
          ))}
        </div>
        <div
          className="myStoryContsner"
          style={{
            display: show ? "block" : "none",
          }}
        >
          <div className="myStory  w-full h-full  top-0 left-0  absolute">
            <div className="absolute flex flex-col justify-between w-full p-2">
              <div
                className="loader ease-linear duration-300 transition-all  h-0.5 my-2 bg-black/20"
                style={{
                  width: `${loader}%`,
                }}
              ></div>
              <div className="flex mt-2 justify-between">
                <div className="flex  items-center gap-2">
                  <div className="w-10 h-10 bg-black rounded-full">
                    <img
                      src={storyTarget}
                      className="  object-cover  h-full w-full rounded-full"
                      alt=""
                    />
                  </div>
                  <h1 className="text-white">name line 131 home.jsx</h1>
                </div>
                <i className="text-white ri-more-2-fill"></i>
              </div>
            </div>
            <img
              className="w-full h-[90%]  object-cover"
              src={storyTarget}
              alt=""
            />
            <div className="flex items-center h-[10%] px-3 text-2xl justify-between">
              <BiMessageRounded />
              <input
                type="text"
                placeholder="Message"
                className="p-1 text-sm w-[70%] border border-black/40 rounded-full"
              />
              <LuHeart />
              <IoIosSend />
            </div>
          </div>
        </div>
        {show ? null : <Post />}
      </div>
    </>
  );
};

export default Home;
