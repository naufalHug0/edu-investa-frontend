import { QuizAction } from "../../../redux/action";
import store from "../../../redux/store";

export default class QuizReduxController {
    static setEarnedXp (value) {
        store.dispatch(QuizAction.setEarnedXp(value))
    }

    static setCorrectAnswers = (value) => {
        store.dispatch(QuizAction.setCorrectAnswers(value))
    }

    static setWrongAnswers = (value) => {
        store.dispatch(QuizAction.setWrongAnswers(value))
    }

    static setQuizToken = (value, callback = () => {}) => {
        store.dispatch(QuizAction.setQuizToken(value))
        callback()
    }

    static setHasCompleted = (value) => {
        store.dispatch(QuizAction.setHasCompleted(value))
    }

    static resetQuizStates = () => {
        this.setQuizToken(null)
        this.setHasCompleted(false)
        this.setEarnedXp(0)
        this.setCorrectAnswers(0)
        this.setWrongAnswers(0)
    }
}