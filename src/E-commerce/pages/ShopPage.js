import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionOverview from "../components/CollectionOverview";
import CollectionPage from "./CollectionPage";

function ShopPage() {
  let match = useRouteMatch();
  return (
    <div className="m-3 p-3">
      <h1 className="font-bold font-serif bg-white shadow-md rounded-sm w-max px-4 py-2 m-2 text-2xl">
        COLLECTIONS
      </h1>
      <Route exact path={`${match.path}`}>
        <CollectionOverview />
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <CollectionPage />
      </Route>
    </div>
  );
}

export default ShopPage;
