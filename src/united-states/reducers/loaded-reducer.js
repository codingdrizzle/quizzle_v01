export default function isLoadedReducer(state = true, action) {
  switch (action.type) {
    case "IS_LOADED":
      return !state;
    default:
      return state;
  }
}
