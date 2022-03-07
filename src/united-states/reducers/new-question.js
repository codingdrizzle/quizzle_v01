const NewQuestion = (state = 0, action) => {
    switch (action.type) {
      default:
        return state;
      case "NEXT_QUESTION":
        return state + 1;
    }
}

export default NewQuestion