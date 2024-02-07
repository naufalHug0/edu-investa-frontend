const initialState = {
    allow_activate_skill: true,
    immunity: { active: false, hasBeenUsed: false, current: null },
    eraser: { active: false, hasBeenUsed: false, current: null },
    half: { active: false, hasBeenUsed: false, current: null },
    jeopardy: { active: false, hasBeenUsed: false, current: null },
    boost: { active: false, hasBeenUsed: false, current: null },
    flash: { active: false, hasBeenUsed: false, current: null }
}

const skillReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IMMUNITY_ACTIVE':
            return {
                ...state,
                immunity: {...state.immunity, active: action.value},
            }
        case 'SET_IMMUNITY_HAS_BEEN_USED':
            return {
                ...state,
                immunity: {...state.immunity, hasBeenUsed: action.value},
            }
        case 'SET_IMMUNITY_INSTANCE':
            return {
                ...state,
                immunity: {...state.immunity, current: action.value},
            }
        case 'SET_ERASER_ACTIVE':
            return {
                ...state,
                eraser: {...state.eraser, active: action.value},
            }
        case 'SET_ERASER_HAS_BEEN_USED':
            return {
                ...state,
                eraser: {...state.eraser, hasBeenUsed: action.value},
            }
        case 'SET_ERASER_INSTANCE':
            return {
                ...state,
                eraser: {...state.eraser, current: action.value},
            }
        case 'SET_HALF_ACTIVE':
            return {
                ...state,
                half: {...state.half, active: action.value},
            }
        case 'SET_HALF_HAS_BEEN_USED':
            return {
                ...state,
                half: {...state.half, hasBeenUsed: action.value},
            }
        case 'SET_HALF_INSTANCE':
            return {
                ...state,
                half: {...state.half, current: action.value},
            }
        case 'SET_JEOPARDY_ACTIVE':
            return {
                ...state,
                jeopardy: {...state.jeopardy, active: action.value},
            }
        case 'SET_JEOPARDY_HAS_BEEN_USED':
            return {
                ...state,
                jeopardy: {...state.jeopardy, hasBeenUsed: action.value},
            }
        case 'SET_JEOPARDY_INSTANCE':
            return {
                ...state,
                jeopardy: {...state.jeopardy, current: action.value},
            }
        case 'SET_BOOST_ACTIVE':
            return {
                ...state,
                boost: {...state.boost, active: action.value},
            }
        case 'SET_BOOST_HAS_BEEN_USED':
            return {
                ...state,
                boost: {...state.boost, hasBeenUsed: action.value},
            }
        case 'SET_BOOST_INSTANCE':
            return {
                ...state,
                boost: {...state.boost, current: action.value},
            }
        case 'SET_FLASH_ACTIVE':
            return {
                ...state,
                flash: {...state.flash, active: action.value},
            }
        case 'SET_FLASH_HAS_BEEN_USED':
            return {
                ...state,
                flash: {...state.flash, hasBeenUsed: action.value},
            }
        case 'SET_FLASH_INSTANCE':
            return {
                ...state,
                flash: {...state.flash, current: action.value},
            }
        case 'SET_ALLOW_ACTIVATE_SKILL':
            return {
                ...state,
                allow_activate_skill: action.value
            }
        default:
            return state;
    }
}

export default skillReducer;