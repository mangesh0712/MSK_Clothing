import { SHOP_ACTION } from "./shopActionTypes";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase";

export const fetchCollectionStart = () => {
  return {
    type: SHOP_ACTION.FETCH_COLLECTION_START,
  };
};
export const fetchCollectionSuccess = (collectionsMap) => {
  return {
    type: SHOP_ACTION.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap,
  };
};
export const fetchCollectionFailure = (errorMessage) => {
  return {
    type: SHOP_ACTION.FETCH_COLLECTION_FAILURE,
    payload: errorMessage,
  };
};

export const fetchCollectionsAsync = () => async (dispatch) => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionStart());
  try {
    const collections = await collectionRef.get();
    if (collections) {
      const collectionsMap = convertCollectionsSnapshotToMap(collections);
      dispatch(fetchCollectionSuccess(collectionsMap));
    }
  } catch (error) {
    dispatch(fetchCollectionFailure(error.errorMessage));
  }
};
