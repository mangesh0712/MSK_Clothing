import React from "react";

function Content() {
  return (
    <div className="flex items-center">
      <div className="flex flex-grow m-2">
      <textarea rows="22" type='text' class=" w-full  shadow-md mt-2 mb-6 px-4 py-2 outline-none" />
      </div>
      <div className="flex flex-grow m-2" >
      <textarea rows="22" type='text' class="w-full  shadow-md mt-2 mb-6 px-4 py-2 outline-none" />
      </div>
    </div>
  );
}

export default Content;
