import { combineReducers } from "redux";
import isLoadedReducer from "./loaded-reducer";
import Category from './setCategory'
import Difficulty from './setDifficulty'
import NumberOfQuestions from './setNumberOfQuestions'
import QuizType from './setQuizType'
import ShowRules from "./show-rules";
import ShowQuiz from './showQuiz'
import FetchData from './fetch-data'
import NewQuestion from './new-question'

export const allReducers = combineReducers({
    loaded: isLoadedReducer,
    Category,
    Difficulty,
    NumberOfQuestions,
    QuizType,
    ShowRules,
    ShowQuiz,
    FetchData,
    NewQuestion
})