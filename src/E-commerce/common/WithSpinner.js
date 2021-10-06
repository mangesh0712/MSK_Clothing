import React from "react";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="flex items-center justify-center h-96 bg-white">
        <div className="border-t-4 w-28 h-28 border-b-4 border-gray-900 rounded-full animate-spin"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
