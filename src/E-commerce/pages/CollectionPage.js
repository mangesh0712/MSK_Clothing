import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollection } from "../redux/shop/shopSelector";
import CollectionItem from "../components/CollectionItem";

function CollectionPage() {
  let { collectionId } = useParams();
  const state = useSelector((state) => state);
  let collectionObj = selectCollection(collectionId)(state);
  return (
    <div className="m-3 p-1">
      <h1 className="font-serif text-center  font-black mb-5 text-lg">
        {collectionObj.title.toUpperCase()}
      </h1>
      <div className="flex items-center flex-wrap">
        {collectionObj.items
          // .filter((item, idx) => idx < 4)
          .filter((item, idx) => idx)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPage;
