// this exported function is an action creator
//
export const selectLibrary = (libraryId) => {
  return {
    // this is a js object with a type property, which is an action.
    // this action is wrapped by a function which is the action creator.
    // when I call this function I will pass it the id I want to select.
    type: 'select_library',
    payload: libraryId
  };
};
