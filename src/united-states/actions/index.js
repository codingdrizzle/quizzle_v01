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
