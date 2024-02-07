const initialState = {
    correct_answers: 0,
    wrong_answers: 0,
    earned_xp: 0,
    quiz_token: null,
    has_completed: false
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CORRECT_ANSWERS':
            return {
                ...state,
                correct_answers: action.value,
            }
        case 'SET_WRONG_ANSWERS':
            return {
                ...state,
                wrong_answers: action.value,
            }
        case 'SET_EARNED_XP':
            return {
                ...state,
                earned_xp: action.value,
            }
        case 'SET_QUIZ_TOKEN':
            return {
                ...state,
                quiz_token: action.value,
            }
        case 'SET_HAS_COMPLETED':
            return {
                ...state,
                has_completed: action.value,
            }
        default:
            return state;
    }
}

export default quizReducer;