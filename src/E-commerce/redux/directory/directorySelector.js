import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory.sections;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory
);
