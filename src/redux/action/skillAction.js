const SkillAction = {
    setAllowActivateSkill: value => {
        return { type: 'SET_ALLOW_ACTIVATE_SKILL', value }
    },
    immunity: { 
        setActive: value => {
            return { type: 'SET_IMMUNITY_ACTIVE', value }
        },
        setHasBeenUsed: value => {
            return { type: 'SET_IMMUNITY_HAS_BEEN_USED', value }
        },
        setInstance: value => {
            return { type: 'SET_IMMUNITY_INSTANCE', value }
        }
    },
    eraser: { 
        setActive: value => {
            return { type: 'SET_ERASER_ACTIVE', value }
        },
        setHasBeenUsed: value => {
            return { type: 'SET_ERASER_HAS_BEEN_USED', value }
        },
        setInstance: value => {
            return { type: 'SET_ERASER_INSTANCE', value }
        }
    },
    half: { 
        setActive: value => {
            return { type: 'SET_HALF_ACTIVE', value }
        },
        setHasBeenUsed: value => {
            return { type: 'SET_HALF_HAS_BEEN_USED', value }
        },
        setInstance: value => {
            return { type: 'SET_HALF_INSTANCE', value }
        }
    },
    jeopardy: { 
        setActive: value => {
            return { type: 'SET_JEOPARDY_ACTIVE', value }
        },
        setHasBeenUsed: value => {
            return { type: 'SET_JEOPARDY_HAS_BEEN_USED', value }
        },
        setInstance: value => {
            return { type: 'SET_JEOPARDY_INSTANCE', value }
        }
    },
    boost: { 
        setActive: value => {
            return { type: 'SET_BOOST_ACTIVE', value }
        },
        setHasBeenUsed: value => {
            return { type: 'SET_BOOST_HAS_BEEN_USED', value }
        },
        setInstance: value => {
            return { type: 'SET_BOOST_INSTANCE', value }
        }
    },
    flash: { 
        setActive: value => {
            return { type: 'SET_FLASH_ACTIVE', value }
        },
        setHasBeenUsed: value => {
            return { type: 'SET_FLASH_HAS_BEEN_USED', value }
        },
        setInstance: value => {
            return { type: 'SET_FLASH_INSTANCE', value }
        }
    }
}

export default SkillAction