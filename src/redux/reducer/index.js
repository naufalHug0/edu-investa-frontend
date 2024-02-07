import { combineReducers } from "redux";
import quizReducer from './quizReducer'
import modalReducer from "./modalReducer";
import skillReducer from "./skillReducer";

const rootReducer = combineReducers({
    quiz: quizReducer,
    modal: modalReducer,
    skill: skillReducer
})

export default rootReducer