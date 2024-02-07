import SkillTitle from "../../../assets/skill-title"
import Skills from "../classes/Skills"
import SkillsReduxController from "./SkillsReduxController"

const createSkillsInstance = (userSkills) => {
    const title_images = {
        immunity: { image: SkillTitle.IMMUNITY, width: 150 }, 
        eraser: { image: SkillTitle.ERASER, width: 100 }, 
        half: { image: SkillTitle.HALF, width: 90 }, 
        jeopardy: { image: SkillTitle.JEOPARDY, width: 220 },
        flash: { image: SkillTitle.FLASH, width: 80 },
        boost: { image: SkillTitle.BOOST, width: 150 }
    }

    
    const skillProperties = {
        id: userSkills.id,
        name: userSkills.name,
        logo: userSkills.logo_path,
        price: userSkills.price,
        description: userSkills.description,
        cooldown_time: userSkills.cooldown_time,
        disposable: userSkills.disposable,
        active_time: userSkills.active_time,
        quantity: userSkills?.quantity || null
    }

    switch (userSkills.name.toLowerCase()) {
        case 'immunity':
            return new Skills({
                ...skillProperties,
                title_image: title_images.immunity,
                skill_action: () => {
                    console.log('you are immunated')
                    SkillsReduxController.use(SkillsReduxController.skills.immunity)
                },
                deactivate: () => {
                    SkillsReduxController.deactivate(SkillsReduxController.skills.immunity)
                }
            })
        case 'xp booster':
            return new Skills({
                ...skillProperties,
                title_image: title_images.boost,
                skill_action: () => {
                    console.log('2x boost')
                    SkillsReduxController.use(SkillsReduxController.skills.boost)
                },
                deactivate: () => {
                    SkillsReduxController.deactivate(SkillsReduxController.skills.boost)
                }
            })
        case 'jeopardy mastery':
            return new Skills({
                ...skillProperties,
                title_image: title_images.jeopardy,
                skill_action: () => {
                    console.log('jeopardy actived')
                    SkillsReduxController.use(SkillsReduxController.skills.jeopardy)
                },
                deactivate: () => {
                    SkillsReduxController.deactivate(SkillsReduxController.skills.jeopardy)
                }
            })
        case 'eraser':
            return new Skills({
                ...skillProperties,
                title_image: title_images.eraser,
                skill_action: () => {
                    console.log('eraser one option')
                    SkillsReduxController.use(SkillsReduxController.skills.eraser)
                },
                deactivate: () => {
                    SkillsReduxController.deactivate(SkillsReduxController.skills.eraser)
                }
            })
        case '50-50':
            return new Skills({
                ...skillProperties,
                title_image: title_images.half,
                skill_action: () => {
                    console.log('50% option eliminated')
                    SkillsReduxController.use(SkillsReduxController.skills.half)
                },
                deactivate: () => {
                    SkillsReduxController.deactivate(SkillsReduxController.skills.half)
                }
            })
        case 'flash':
            return new Skills({
                ...skillProperties,
                title_image: title_images.flash,
                skill_action: () => {
                    console.log('get 1.5x xp')
                    SkillsReduxController.use(SkillsReduxController.skills.flash)
                },
                deactivate: () => {
                    SkillsReduxController.deactivate(SkillsReduxController.skills.flash)
                }
            })
        default :
            break;
    }
}

export default createSkillsInstance