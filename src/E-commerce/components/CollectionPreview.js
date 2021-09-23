import React from "react";
import CollectionItem from "./CollectionItem";

function CollectionPreview({ items, title }) {
  return (
    <div className="m-3 p-3">
      <h1 className="font-serif text-center font-black mb-5 text-lg">{title.toUpperCase()}</h1>
      <div className="flex items-center scrollbar scrollbar-thin scroll scrollbar-thumb-black scrollbar-track-white ">
        {items
          // .filter((item, idx) => idx < 4)
          .filter((item, idx) => idx )
          .map(item => (
            <CollectionItem key={item.id} item={item}/>
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
