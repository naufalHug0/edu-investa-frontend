const QuizAction = {
    setCorrectAnswers : value => {
        return { type: 'SET_CORRECT_ANSWERS', value }
    },

    setWrongAnswers: value => {
        return { type: 'SET_WRONG_ANSWERS', value }
    },
    
    setEarnedXp: value => {
        return { type: 'SET_EARNED_XP', value }
    },

    setQuizToken: value => {
        return { type: 'SET_QUIZ_TOKEN', value }
    },

    setHasCompleted: value => {
        return { type: 'SET_HAS_COMPLETED', value }
    }
}

export default QuizAction