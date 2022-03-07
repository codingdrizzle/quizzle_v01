const SetNumberOfQuestions = (state = 10, action) => {
  switch (action.type) {
    default:
      return state;
    case "NUMBER_OF_QUESTIONS_ON_CHANGE":
      return action.payload;
  }
};

export default SetNumberOfQuestions;