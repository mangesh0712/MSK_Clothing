import { SearchIcon } from "@heroicons/react/solid";
import React from "react";
import SecondNav from "./SecondNav";

function HeaderTwo() {
  return (
    <div className="flex items-center pt-6">
      <SecondNav />
      <div className="flex  flex-1 items-center justify-end ">
        <div className="flex items-center p-1 ml-2  border-gray-600 border rounded-md ">
          <input
            className="px-2 items-center cursor-pointer w-2/3 md:w-72 text-gray-500 outline-none bg-black placeholder-gray-500"
            type="text"
            placeholder="Search Envato Tuts +"
          />
          <SearchIcon className="h-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default HeaderTwo;
