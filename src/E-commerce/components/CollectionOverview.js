import React from "react";
import CollectionPreview from "./CollectionPreview";
import { useSelector } from "react-redux";
import { selectCollectionForPrerview } from "../redux/shop/shopSelector";

function CollectionOverview() {
  const state = useSelector((state) => state);
  return (
    <>
      {selectCollectionForPrerview(state).map(
        ({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        )
      )}
    </>
  );
}

export default CollectionOverview;
