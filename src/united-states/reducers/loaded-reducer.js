export default function isLoadedReducer(state = false, action) {
  switch (action.type) {
    case "IS_LOADED":
      return !state;
    default:
      return state;
  }
}
