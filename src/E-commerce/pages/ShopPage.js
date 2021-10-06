import React, { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCollectionsAsync } from "../redux/shop/shopActions";
import CollectionOverview from "../components/CollectionOverview";
import CollectionPage from "./CollectionPage";
import WithSpinner from "../common/WithSpinner";

//// pages with hoc with spinner
const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage() {
  let match = useRouteMatch();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.shop.isFetching);

  useEffect(() => {
    /// get collections from database
    dispatch(fetchCollectionsAsync());
    return () => {};
  }, []);
  return (
    <div className="m-3 p-3">
      <h1 className="font-bold font-serif bg-white shadow-md rounded-sm w-max px-4 py-2 m-2 text-2xl">
        COLLECTIONS
      </h1>
      <Route exact path={`${match.path}`}>
        {/* <CollectionOverview /> */}
        <CollectionOverviewWithSpinner isLoading={loading} />
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        {/* <CollectionPage /> */}
        <CollectionPageWithSpinner isLoading={loading} />
      </Route>
    </div>
  );
}

export default ShopPage;
