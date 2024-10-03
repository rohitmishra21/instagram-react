import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";


const Post = () => {
  const [data, setData] = useState([]);
  const [user, setuser] = useState([]);
  const [like, setlike] = useState(true)
  const [addlike, setaddlike] = useState(0)

  useEffect(() => {
    const API_KEY = `RA53H7u2zrx3syiGC35C0ipC1hHUfN7XAHHZRENK9HPDF4j233UrOXqN`;

    async function fetchPostImages() {
      const response = await fetch(
        "https://api.pexels.com/v1/search?query=nature&per_page=15&page=1/curated?page=2&per_page=30",
        {
          method: "GET",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const responseData = await response.json();
      const imgData = responseData.photos;
      setData(imgData);
    }

    fetchPostImages();
  }, []);

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
      setuser(userImgData);
    }

    fetchUserImages();
  }, []);

  function showLike(e) {
     
      setlike(false)
     
      setaddlike((p) => p+ 1)
      setTimeout(() => {
        setlike(true)
      }, 2000);
  }

  return (
    <>
      <div className="postSection relative h-[95%]  w-full ">
        {data.map((d, index) => (
          <div className="w-full py-5" key={d.id}>
            <div className="absolute flex  flex-col justify-between w-full p-2">
              <div className="flex  justify-between">
                <div className="flex  items-center gap-2">
                  <div className="w-10 h-10 bg-black rounded-full">
                    {user.length > 0 && user[index] && (
                      <img
                        src={user[index].src.medium}
                        className="object-cover h-full w-full rounded-full"
                        alt="User"
                      />
                    )}
                  </div>
                  <h1 className="text-white">{d.photographer}</h1>
                </div>
                <BsThreeDotsVertical className="text-white text-2xl" />
              </div>
            </div>

            <i
              id="postLike"
              className=" opacity-0 transition-all ease-linear duration-300  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-red-600  ri-heart-fill"
            ></i>
            <div className="">
              <div className="w-full bg-[url]  h-[80%]" onDoubleClick={showLike}
            
              >
              <IoMdHeart size={70}   className="text-red-700 transition-all duration-600 ease-linear absolute top-1/2 left-1/2 -translate-y-1/2  -translate-x-1/2"
               style={{
                opacity:like ?"0" : "100%"
               }}
              />
                <img
                  src={d.src.original}
                  className=" object-cover w-full h-full"
                  id={index}
                  alt=""
                />
              </div>

              <div className="icon  flex justify-between items-center px-1">
                <div className="flex gap-1  py-2 text-2xl items-center">
                  <FaRegHeart />

                  <h1 className="likeNum">{addlike}</h1>
                  <FaRegComment className="ml-4" />
                  <h1>9</h1>
                  <RiSendPlaneFill className="ml-3" />
                  <h1>8</h1>
                </div>

                <div>
                  <FaRegBookmark className=" text-[22px]" />
                </div>
              </div>

              <h1 className="px-2">
                <span className="font-bold ">{d.photographer} : </span>{" "}
                <span>{d.alt}</span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Post;
