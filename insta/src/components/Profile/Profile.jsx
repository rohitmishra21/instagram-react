import { useEffect, useState } from "react";
import React from "react";
import { RiLock2Line } from "react-icons/ri";
import { FaThreads } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { VscDiffAdded } from "react-icons/vsc";
import { RiMenuFill } from "react-icons/ri";
import { IoPersonAddOutline } from "react-icons/io5";
import { BiSolidUserPin } from "react-icons/bi";
import { MdOutlineViewCompact } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";

// import { FiHeart } from "react-icons/fi";
// import { RiSendPlaneFill } from "react-icons/ri";

import { LuHeart } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";
import Fotter from "../Fotter";

const Profile = () => {
  const [storyPost, setstoryPost] = useState([]);
  const [show, setSetshow] = useState(false);
  const [storyTarget, setStoryTarget] = useState([]);
  const [loader, setLoader] = useState(0);
  const [profile, setProfile] = useState([]);
  const [openPost, setOpenPost] = useState([]);
  const [visibleProfilePost, setvisibleProfilePost] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null)
  const [someText, setsomeText] = useState(true)

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

  useEffect(() => {
    const API_KEY = `RA53H7u2zrx3syiGC35C0ipC1hHUfN7XAHHZRENK9HPDF4j233UrOXqN`;

    async function fetchPostImages() {
      const response = await fetch(
        "https://api.pexels.com/v1/search?query=boy&per_page=15&page=1/curated?page=2&per_page=30",
        {
          method: "GET",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const responseData = await response.json();
      const imgData = responseData.photos;
      setProfile(imgData);
    }

    fetchPostImages();
  }, []);

  function targetProfile(dets) {
    setOpenPost(profile[dets.target.id].src.large);
    console.log(openPost);
    setvisibleProfilePost(true);
  }

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
    <div className="profile h-[95%]  overflow-y-auto ">
      <div className="top  flex justify-between items-center text-2xl p-2">
        <div className="flex items-center">
          <RiLock2Line className="text-xl" />
          <h1 className="text-xl">rohitmishra11_27</h1>
        </div>
        <div className="flex gap-4">
          <FaThreads />
          <VscDiffAdded />
          <RiMenuFill />
        </div>
      </div>
      <div>
        <div className="flex h-24 items-center justify-between p-2 pt-9 text-center">
          <div className=" w-20 h-20 p-1 rounded-full relative">
            <img
              src="./img/my.jpg"
              className="w-full h-full object-cover  rounded-full"
              alt=""
            />
            <div className="w-5 h-5 border-[2.5px] flex justify-center items-center bg-blue-600 text-white  absolute right-0 bottom-2 rounded-full">
              <IoMdAdd />
            </div>
            <h1 className="text-xs font-semibold py-2">Rohit Mishra</h1>
          </div>
          <div>
            <h1 className="font-bold">16</h1>
            <h1>posts</h1>
          </div>
          <div>
            <h1 className="font-bold">787</h1>
            <h1>followers</h1>
          </div>
          <div>
            <h1 className="font-bold">395</h1>
            <h1>following</h1>
          </div>
        </div>
        <div className="h-16 items-center justify-between px-2 mt-10 flex gap-1">
          <button className="px-10 py-1 rounded-md  text-sm bg-gray-200 ">
            Edit profile
          </button>
          <button className="px-10 py-1 rounded-md  text-sm bg-gray-200 ">
            Share profile
          </button>
          <div className="rounded-md  text-sm bg-slate-200 p-1">
            <IoPersonAddOutline size={17} className="" />
          </div>
        </div>
      </div>

      <div
        className="stores   w-full px-2 h-36 whitespace-nowrap py-2 overflow-x-auto overflow-y-hidden"
        onClick={showStory}
      >
        {storyPost.map((info, index) => (
          <>
            <div className="inline-block cursor-pointer`" key={info.index}>
              <div className="story w-24 h-24  rounded-full ">
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
          </div>
        </div>
      </div>

      <div className="flex justify-between px-10 py-2 text-2xl">
        <MdOutlineViewCompact   className={activeIcon ? "opacity-50" : "opacity-100"}
        
        />
        <BiMoviePlay onClick={someText}
         
        />
        <BiSolidUserPin />
      </div>

      <div className="posts h-[32vh]">
        <div className=" w-full justify-center gap-2 h-full flex flex-wrap">
          {visibleProfilePost ? (
            <>
              <div className="myStory  w-full h-full  top-0 left-0  absolute">
                <div className="bg-white h-[95%] w-full 6">
                  <div className="flex items-end gap-3 capitalize font-sans text-2xl">
                    <IoIosArrowRoundBack
                      size={30}
                      className=" cursor-pointer"
                      onClick={() => setvisibleProfilePost(false)}
                    />
                    <h1>posts</h1>
                  </div>
                  <div className="inner  py-5 overflow-y-auto h-[95%]">
                    <div className="flex justify-between items-center gap-3">
                      <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded-full">
                          <img
                            src="./img/my.jpg"
                            className="w-full  h-full object-cover  rounded-full"
                            alt=""
                          />
                        </div>
                        <h1>rohitmishra11_27</h1>
                      </div>

                      <BsThreeDotsVertical className="text-2xl" />
                    </div>
                    <div className="flex justify-center mt-4 h-[80%]">
                      <img
                        className="h-full object-contain py-1  "
                        src={openPost}
                        alt=""
                      />
                    </div>

                    <div className="flex gap-1  py-2 text-2xl justify-between px-1 items-center">
                      <div className="flex gap-0.5 items-center">
                        <FaRegHeart />
                        <h1 className="likeNum">9</h1>
                        <FaRegComment className="ml-4" />
                        <h1>9</h1>
                        <RiSendPlaneFill className="ml-3" />
                        <h1>8</h1>
                      </div>

                      <div>
                        <FaRegBookmark className=" text-[22px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {profile.map((pic, index) => (
                <>
                  <div
                    key={pic.id}
                    className="h-32 w-28 bg-yellow-500"
                    onClick={targetProfile}
                  >
                    <img
                      src={pic.src.large}
                      className="w-full h-full object-cover"
                      alt=""
                      id={index}
                    />
                  </div>
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
