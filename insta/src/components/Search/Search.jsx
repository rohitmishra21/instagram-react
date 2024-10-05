import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const [searchReel, setsearchReel] = useState([]);
  const [value, setvalue] = useState("car");
  const [loader, setloader] = useState(false);

  const API_KEY = `RA53H7u2zrx3syiGC35C0ipC1hHUfN7XAHHZRENK9HPDF4j233UrOXqN`;

  async function fetchData() {
    setloader(true);
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

  function valueChange(e) {
    setvalue(e.target.value);
  }

  return (
    <div className="h-[95%]  px-2">
      <div className="h-[10%]  flex items-center rounded-md">
        <BsSearch
          onClick={fetchData}
          className="bg-[#E3ECDD]  cursor-pointer rounded-l-md h-9 w-5"
        />
        <input
          type="text"
          onChange={valueChange}
          placeholder="search reels"
          className="h-9 w-full rounded-r-md bg-[#E3ECDD] border-none outline-none px-3"
        />
      </div>
      <div className="inner overflow-y-auto h-[90%] justify-center flex flex-wrap gap-2 ">
        {searchReel.map((reel) => (
          <>
            <div key={reel.id}  className="h-36  w-[6.9rem] ">
              <video
                src={reel.video_files[1].link}
                muted
                loop
                className="object-cover w-full h-full"
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
    </div>
  );
};

export default Search;
