import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { GiBlackHoleBolas } from "react-icons/gi";
import { CiCamera } from "react-icons/ci";
import Chat from './Chat';

const Send = ({ back }) => {
  const [openChat, setopenChat] = useState(true);
 
  function vapas() {
    back(true);
  }

  return (
    <>
      {openChat ? (
        <div className='w-full h-[95%] '>
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
          <div className='flex items-center justify-between  cursor-pointer p-3' onClick={() => setopenChat(false)}>
            <div className='w-12 h-12 bg-sky-800 overflow-hidden rounded-full'>
                <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1724861277998-64d987d50508?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDZ8fHxlbnwwfHx8fHw%3D" alt="" />
            </div>
            <h1 className='w-60'>
              instagram_user
            </h1>
            <CiCamera size={30} />
          </div>
       
        </div>
      ) : (
        <Chat closeChat={setopenChat}/>
      )}
    </>
  );
};

export default Send;
