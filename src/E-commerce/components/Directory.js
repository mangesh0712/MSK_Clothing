import React from "react";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../redux/directory/directorySelector";

function Directory() {
  const state = useSelector((state) => state);
  return (
    <div className="flex flex-wrap w-full items-center justify-between">
      {selectDirectorySections(state)?.map(
        ({ title, imageUrl, size, id }) => (
          <MenuItem key={id} id={id} src={imageUrl} size={size} title={title} />
        )
      )}
    </div>
  );
}

export default Directory;
