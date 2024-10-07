import React, { useEffect, useState } from "react";
import { MdOutlineCameraAlt } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Reel = () => {
  const [reels, setreels] = useState([]);
  const [reelPost, setReelPost] = useState([]);
  useEffect(() => {
    const API_KEY = `RA53H7u2zrx3syiGC35C0ipC1hHUfN7XAHHZRENK9HPDF4j233UrOXqN`;

    async function fetchUserImages() {
      const userResponse = await fetch(
        "https://api.pexels.com/videos/search?query=human&per_page=1&per_page=30",
        {
          method: "GET",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const userResponseData = await userResponse.json();
      const vidioResponce = await userResponseData.videos;

      setreels(vidioResponce);
    }

    fetchUserImages();
  }, []);

  function likeReel() {
    console.log("hii");
  }

  useEffect(() => {
    const API_KEY = `RA53H7u2zrx3syiGC35C0ipC1hHUfN7XAHHZRENK9HPDF4j233UrOXqN`;

    async function fetchUserImages() {
      const userResponse = await fetch(
        "https://api.pexels.com/v1/search?query=nature&per_page=15&page=1/curated?page=2&per_page=30",
        {
          method: "GET",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const userResponseData = await userResponse.json();
      const userImgData = userResponseData.photos;
      setReelPost(userImgData);
    }

    fetchUserImages();
  }, []);



  return (
    <>
      <div className="h-[95%] ">
        <div className="top bg-white flex items-center text-2xl justify-between px-3">
          <h1>Reels</h1>
          <MdOutlineCameraAlt />
        </div>
        <div className="reelBox h-[95%] overflow-y-auto scroll-smooth snap-y snap-mandatory">
          {reels.map((reel, index) => (
            <>
              <div
                className="h-full relative  snap-start"
                key={reel.id}
                onClick={likeReel}
              >
                <video
                  className="w-full object-center object-cover h-full"
                  autoPlay
                  muted
                  loop
                  src={reel.video_files[1].link}
                ></video>
                <h1>{reel.name}</h1>
                <div className="overlay w-full h-full text-white flex items-end justify-end top-0  absolute">
                  <div className="w-80 h-16 ">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pink-700 rounded-full overflow-hidden">
                        <img
                          src={reelPost[index].src.large2x}
                          className="w-full object-cover h-full"
                          alt=""
                        />
                      </div>
                      <h1>{reelPost[index].photographer}</h1>
                      <button className="border-2 border-white/60 px-3 rounded-md text-white font-semibold text-xs py-1">
                        Follow
                      </button>
                    </div>
                  </div>
                  <div className="h-80 w-14 text-2xl flex items-center flex-col justify-center gap-7 ">
                    <div className="flex flex-col items-center gap-1">
                      <FiHeart />
                      <h1 className="text-sm">{reel.duration}</h1>
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
      </div>
    </>
  );
};

export default Reel;
