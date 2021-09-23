import React from "react";

function Alert({ message, color, icon, onChangeShowAlert }) {
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
      {icon}
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
