import { SkillAction } from "../../../redux/action";
import store from "../../../redux/store";

export default class SkillsReduxController {
    static skills = {
        immunity: "immunity",
        eraser: "eraser",
        half: "half",
        jeopardy: "jeopardy",
        boost: "boost",
        flash: "flash"
    }

    static setActive (skill, value) {
        store.dispatch(SkillAction[skill].setActive(value))
    }

    static setHasBeenUsed (skill, value) {
        store.dispatch(SkillAction[skill].setHasBeenUsed(value))
    }

    static setInstance (skill, value) {
        store.dispatch(SkillAction[skill].setInstance(value))
    }

    static setAllowActivateSkill (value) {
        store.dispatch(SkillAction.setAllowActivateSkill(value))
    }

    static use (skill) {
        this.setActive(skill, true)
        this.setHasBeenUsed(skill, true)
        this.setAllowActivateSkill(false)
    }

    static deactivate (skill) {
        this.setActive(skill, false)
        this.setInstance(skill, null)
        this.setAllowActivateSkill(true)
    }

    static resetSkillsStates = () => {
        this.setAllowActivateSkill(true)

        Object.values(this.skills).forEach(skill => {
            this.setActive(skill, false)
            this.setHasBeenUsed(skill, false)
            this.setInstance(skill, null)
        })
    }
}