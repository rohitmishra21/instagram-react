import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosArrowRoundBack } from "react-icons/io";
import Reel from "../Reel/Reel";

const Search = () => {
  const [searchReel, setsearchReel] = useState([]);
  const [value, setvalue] = useState("famous");
  const [loader, setloader] = useState(false);
  const [myreel, setmyreel] = useState("");
  const [showHiddenDiv, setshowHiddenDiv] = useState(true);

  const API_KEY = `RA53H7u2zrx3syiGC35C0ipC1hHUfN7XAHHZRENK9HPDF4j233UrOXqN`;

  async function fetchData() {
    setloader(false);
    const userResponse = await fetch(
      `https://api.pexels.com/videos/search?query=${value}&per_page=1&per_page=30`,
      {
        method: "GET",
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    const userResponseData = await userResponse.json();
    const vidioResponce = await userResponseData.videos;

    setsearchReel(vidioResponce);

    setloader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function valueChange(e) {
    setvalue(e.target.value);
  }

  function mark() {
    setshowHiddenDiv(true);
  }

  function showreel(dets) {
    setshowHiddenDiv(false);
    setmyreel(searchReel[dets.target.id].video_files[3].link);

    // setTimeout(() => {
    //   setshowHiddenDiv(true)
    // }, 5000);
  }


  
  return (
    <div className="h-[95%] ">
      {showHiddenDiv ? (
        <div className="h-[10%]  flex items-center rounded-md">
          <BsSearch
            onClick={fetchData}
            className="bg-[#eef2ebb1] opacity-80  cursor-pointer rounded-l-md h-9 w-5"
          />
          <input
            type="text"
            onChange={valueChange}
            placeholder="search reels"
            className="h-9 w-full rounded-r-md bg-[#eef2ebb1] border-none outline-none px-3"
          />
        </div>
      ) : null}

      {showHiddenDiv ? (
        <div className="inner overflow-y-auto h-[90%] justify-center flex flex-wrap gap-2 ">
          {searchReel.map((reel, index) => (
            <>
              <div
                key={reel.id}
                onClick={showreel}
                className="h-36 w-[6.9rem] "
              >
                <video
                  src={reel.video_files[1].link}
                  muted
                  loop
                  className="object-cover cursor-pointer w-full h-full"
                  id={index}
                ></video>
              </div>
            </>
          ))}
          <div>
            {loader ? (
              <>
                <div className="w-40 h-40 rounded-full border-gray-950 border-2"></div>
              </>
            ) : null}
          </div>
        </div>
      ) : (
        <>
          <div className="h-full">
            <div className="top bg-white flex items-center text-2xl gap-2 px-3">
              <IoIosArrowRoundBack
                size={30}
                className="cursor-pointer"
                onClick={mark}
              />
              <h1>Reels</h1>
            </div>
            <div className="reelBox  scroll-smooth snap-y snap-mandatory h-[95%] overflow-y-auto  ">
              <div className="h-full relative  snap-start">
                <video
                  className="w-full object-cover object-top h-full"
                  autoPlay
                  muted
                  loop
                  src={myreel}
                ></video>
                <h1>reel name</h1>
                <div className="overlay w-full h-full text-white flex items-end justify-end top-0  absolute">
                  <div className="w-80 h-16 ">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10  rounded-full overflow-hidden">
                        <video
                          className="w-full object-cover object-top h-full"
                          muted
                          loop
                          src={myreel}
                        ></video>
                      </div>
                      <h1>name</h1>
                      <button className="border-2 border-white/60 px-3 rounded-md text-white font-semibold text-xs py-1">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="h-80 w-14 text-2xl flex items-center flex-col justify-center gap-7 ">
                    <div className="flex flex-col items-center gap-1">
                      <FiHeart />
                      <h1 className="text-sm"></h1>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <BiMessageRounded />
                      <h1 className="text-sm">3</h1>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <RiSendPlaneFill />
                      <h1 className="text-sm">3</h1>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <HiOutlineDotsVertical />
                    </div>
                    <div className="w-6 rounded-md border-4 border-white h-6 "></div>
                  </div>
                </div>
              </div>

              {searchReel.map((reel) => (
                <>
                  <div className="h-full relative  snap-start">
                    <video
                      className="w-full object-cover object-top h-full"
                      autoPlay
                      muted
                      loop
                      src={reel.video_files[1].link}
                    ></video>
                    <h1>reel name</h1>
                    <div className="overlay w-full h-full text-white flex items-end justify-end top-0  absolute">
                      <div className="w-80 h-16 ">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10  rounded-full overflow-hidden">
                            <video
                              className="w-full object-cover object-top h-full"
                              muted
                              loop
                              src={reel.video_files[1].link}
                            ></video>
                          </div>
                          <h1>name</h1>
                          <button className="border-2 border-white/60 px-3 rounded-md text-white font-semibold text-xs py-1">
                            Follow
                          </button>
                        </div>
                      </div>
                      <div className="h-80 w-14 text-2xl flex items-center flex-col justify-center gap-7 ">
                        <div className="flex flex-col items-center gap-1">
                          <FiHeart />
                          <h1 className="text-sm"></h1>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <BiMessageRounded />
                          <h1 className="text-sm">3</h1>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <RiSendPlaneFill />
                          <h1 className="text-sm">3</h1>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <HiOutlineDotsVertical />
                        </div>
                        <div className="w-6 rounded-md border-4 border-white h-6 "></div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div>
              {loader ? (
                <>
                  <div className="w-40 h-40 rounded-full border-gray-950 border-2"></div>
                </>
              ) : null}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
