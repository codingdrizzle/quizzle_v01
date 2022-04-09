export const isLoaded = () => {
  return {
    type: 'IS_LOADED'
  }
}

export const CategoryOnChange = (data) => {
  return {
    type: 'CATEGORY_ON_CHANGE',
    payload: data
  }
}
export const DifficultyOnChange = (data) => {
  return {
    type: 'DIFFICULTY_ON_CHANGE',
    payload: data
  }
}
export const NumberOfQuestionsOnChange = (data) => {
  return {
    type: 'NUMBER_OF_QUESTIONS_ON_CHANGE',
    payload: data
  }
}
export const TypeOnChange = (data) => {
  return {
    type: 'TYPE_ON_CHANGE',
    payload: data
  }
}

export const ShowRules = () => {
  return {
    type: 'SHOW_RULES'
  }
}

export const HideRules = () => {
  return {
    type: 'HIDE_RULES'
  }
}

export const ShowQuiz = () => {
  return {
    type: 'SHOW_QUIZ'
  }
}

export const FetchData = (data) => {
  return {
    type: 'FETCH_DATA',
    payload: data
  }
}

export const NextQuestion = () => {
  return {
    type: 'NEXT_QUESTION'
  }
}

export const Score = () => {
  return {
    type: 'IS_CORRECT'
  }
}

export const StartTimer = () => {
  return{
    type: 'START_TIMER'
  }
}

export const ResetTimer = () => {
  return {
    type: 'RESET_TIMER'
  }
}