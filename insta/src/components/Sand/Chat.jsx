import React, { useState } from "react";
import { LuMoveLeft } from "react-icons/lu";
import { IoMdCall } from "react-icons/io";
import { RiVideoOnFill } from "react-icons/ri";
import { IoMdSend } from "react-icons/io";
import run from "./ChatApi";

const Chat = ({ closeChat }) => {
  const [data, setData] = useState([]);
  const [myInput, setMyInput] = useState("");
  const [loader, setLoader] = useState(false);

  function backChat() {
    closeChat(true);
  }

  async function onSent() {
    if (myInput.trim() === "") return;
    setLoader(true);

    const response = await run(myInput);

    setData((prevData) => [
      ...prevData,
      { prompt: myInput, response: response },
    ]);

    setMyInput("");
    setLoader(false);
  }

  return (
    <div className="h-[95%] bg-blue-50">
      <div className="flex items-center shadow-sm bg-white shadow-black/40 justify-between">
        <div className="p-3 text-xl gap-4 items-center flex">
          <LuMoveLeft size={20} className="cursor-pointer" onClick={backChat} />
          <h1>  instagram_user</h1>
        </div>
        <div className="p-3 flex gap-2 items-center">
          <IoMdCall size={20} />
          <RiVideoOnFill size={20} />
        </div>
      </div>

      <div className="inner h-[82%]  overflow-y-auto  ">
        {data.map((item, index) => (
          <div key={index} className="w-full  px-3 flex-col  flex  gap-2 items-end">
            <div className="flex justify-end">
              <div className="w-fit  text-end rounded-md">
                <h1 className="capitalize rounded-md bg-[#D7E8CD]  mt-2 px-3">
                  You: {item.prompt}
                </h1>
              </div>
            </div>

            <div className="flex justify-start ">
              <div className="rounded-md  w-full">
                {loader? (
                  <h1 className="text-start">Typing...</h1>
                ) : (
                  <div className="w-fit pr-12 ">
                    <h1 className="bg-[#E3ECDD] rounded-md  capitalize  px-3">
                      User: {item.response}
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
   
     
      </div>
      <div className="w-full pb-3 px-3  mt-2  flex items-center gap-2">
          <input
            type="text"
            className="w-full border-2 border-black outline-none rounded-xl h-9 bg-[#d5dcd0]"
            onChange={(e) => setMyInput(e.target.value)}
            value={myInput}
          />
          <IoMdSend size={30} onClick={onSent} className="cursor-pointer" />
        </div>
    </div>
  );
};

export default Chat;
