import React from "react";
import { Link } from "react-router-dom";
function MenuItem({ title, src, size }) {
  return (
    <div
      className={`flex flex-grow transform m-3  hover:scale-105 ${
        size === "large" ? "h-96" : "h-64"
      }  w-96  border-black rounded-sm`}
    >
      <div
        className="flex bg-center h-full w-full bg-cover  items-center justify-center"
        style={{ backgroundImage: `url(${src})` }}
      >
        <Link to={`/shop/${title}`}>
          <div className=" p-6 rounded-sm transform hover:scale-105 bg-gray-50 cursor-pointer shadow-md">
            <h1 className="text-center font- font-serif text-gray-600 rounded-sm ">
              {title.toUpperCase()}
            </h1>
            <span className="text-gray-900 rounded-sm ">SHOP NOW</span>
          </div>

          {/* TRANSPERANT INSIDE DIV STYLE */}

          {/* <div className="border-gray-900 border p-8 rounded-sm bg-white cursor-pointer bg-opacity-30">
            <h1 className="text-center font- font-serif group-hover:text-gray-600 text-gray-300 group-hover:bg-opacity-5 rounded-sm ">
              {title.toUpperCase()}
            </h1>
            <span className="group-hover:text-gray-900 group-hover:bg-opacity-5 rounded-sm text-white ">
              SHOP NOW
            </span>
          </div> */}
        </Link>
      </div>
    </div>
  );
}

export default MenuItem;
