import React from "react";
import Bell from "module";
import { BellIcon, CheckIcon } from "@heroicons/react/solid";

function Alert({ message, color, onChangeShowAlert }) {
  const closeAlert = () => {
    onChangeShowAlert((obj) => {
      return {
        ...obj,
        showAlert: false,
      };
    });
  };

  return (
    <div className={`flex items-center p-3 my-3 bg-${color}-500 rounded-sm`}>
      {color === "red" ? (
        <BellIcon className="h-8 text-gray-50 cursor-pointer hover:text-gray-300" />
      ) : (
        <CheckIcon className="h-8 text-gray-50 cursor-pointer hover:text-gray-300" />
      )}
      <p className="ml-3 flex-grow text-gray-50">{message}</p>
      <span
        className="text-white ml-2 self-start text-2xl cursor-pointer hover:text-gray-300"
        onClick={closeAlert}
      >
        ×
      </span>
    </div>
  );
}

export default Alert;
