const ShowQuiz = (state = false, action) => {
  switch (action.type) {
    case "SHOW_QUIZ":
      return !state;
    default:
      return state;
  }
};

export default ShowQuiz