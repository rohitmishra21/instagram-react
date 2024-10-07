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
    <div className="h-[95%]">
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

      <div className="h-[92%] overflow-auto  px-3 flex-col overflow-y-auto flex justify-end gap-3 items-end">
        {data.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-end">
              <div className="w-fit  text-end rounded-md">
                <h1 className="capitalize rounded-md bg-[#D7E8CD] px-3">
                  You: {item.prompt}
                </h1>
              </div>
            </div>

            <div className="flex justify-start mt-5 ">
              <div className="rounded-md w-fit">
                {loader && index === data.length - 1 ? (
                  <h1>Typing...</h1>
                ) : (
                  <div className="w-fit pr-12 ">
                    <h1 className="bg-[#E3ECDD] rounded-md capitalize  px-3">
                      User: {item.response}
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="w-full pb-3  flex items-center gap-2">
          <input
            type="text"
            className="w-full border-none outline-none h-9 bg-[#E3ECDD]"
            onChange={(e) => setMyInput(e.target.value)}
            value={myInput}
          />
          <IoMdSend size={30} onClick={onSent} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
