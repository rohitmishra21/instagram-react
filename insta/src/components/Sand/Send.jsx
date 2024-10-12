import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { GiBlackHoleBolas } from "react-icons/gi";
import { CiCamera } from "react-icons/ci";
import Chat from './Chat';

const Send = ({ back }) => {
  const [openChat, setopenChat] = useState(true);
  const [profilePic, setProfilePic] = useState([])
  function vapas() {
    back(true);
  }


  useEffect(() => {
    const API_KEY = `RA53H7u2zrx3syiGC35C0ipC1hHUfN7XAHHZRENK9HPDF4j233UrOXqN`;

    async function fetchPostImages() {
      const response = await fetch(
        "https://api.pexels.com/v1/search?query=girls&per_page=15&page=1/curated?page=2&per_page=30",
        {
          method: "GET",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      const responseData = await response.json();
      const imgData = responseData.photos;
      setProfilePic(imgData);
    }

    fetchPostImages();
  }, []);

  return (
    <>
      {openChat ? (
        
        <div className='inner w-full h-[95%] overflow-y-auto'>
          <div className="top flex text-xl justify-between items-center p-3">
            <div className='flex gap-2 items-center'>
              <FaArrowLeftLong className='cursor-pointer' onClick={vapas} />
              <h1>rohitmishra11_27</h1>
            </div>
            <GiBlackHoleBolas className='animate-spin duration-1000 text-2xl' />
          </div>
          <div className='p-3 relative w-full '>
            <input
              type="text"
              placeholder='Ask meta AI or search'
              className='w-full rounded-md  h-9'
            />
          </div>
          <div className='flex justify-between p-3 gap-1'>
            <button className='px-8 rounded-md text-xs bg-[#E3ECDD] py-1.5 font-semibold capitalize'>
              Message
            </button>
            <button className='px-8 rounded-md text-xs bg-[#E3ECDD] py-1.5 font-semibold capitalize'>
              Channels
            </button>
            <button  className='px-8 rounded-md text-xs bg-[#E3ECDD] py-1.5 font-semibold capitalize'>
              Requests
            </button>
          </div>
          {profilePic.map((pic)=>(
             <div key={pic.id} className='flex items-center justify-between  cursor-pointer p-3' onClick={() => setopenChat(false)}>
             <div className='w-12 h-12 bg-sky-800 overflow-hidden rounded-full'>
                 <img className='object-cover w-full h-full' src={pic.src.large2x} alt="" />
             </div>
             <h1 className='w-60'>
                {pic.photographer}
             </h1>
             <CiCamera size={30} />
           </div>
          ))}
          
       
        </div>
      ) : (
        <Chat closeChat={setopenChat}/>
      )}
    </>
  );
};

export default Send;
