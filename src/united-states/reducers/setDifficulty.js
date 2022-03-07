const SetDifficulty = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
    case "DIFFICULTY_ON_CHANGE":
      return action.payload;
  }
};

export default SetDifficulty;