const SetQuizType = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
    case "TYPE_ON_CHANGE":
      return action.payload;
  }
};

export default SetQuizType;
