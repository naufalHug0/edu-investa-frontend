import SkillsReduxController from "../utils/SkillsReduxController"

export default class Skills {
    constructor({
        id,
        name,
        logo,
        price,
        description,
        cooldown_time,
        disposable,
        active_time,
        title_image,
        skill_action,
        deactivate,
        quantity = null,
        is_cooldown = false
    }) {
        this.id = id
        this.name = name
        this.logo = logo
        this.price = price
        this.description = description
        this.cooldown_time = cooldown_time
        this.disposable = disposable
        this.active_time = active_time
        this.title_image = title_image
        this.skill_action = skill_action
        this.deactivate = deactivate
        this.quantity = quantity
        this.is_cooldown = is_cooldown
    }

    cooldown() {
        this.is_cooldown = true
        setTimeout(() => {
            this.is_cooldown = false
        }, this.cooldown_time * 1000)
    }

    activate() {
        if (!this.is_cooldown) {
            SkillsReduxController.setInstance(this)
            this.skill_action()
            setTimeout(() => {
                console.log(this.name + ' deactived')
                this.cooldown()
                this.deactivate()
            }, this.active_time * 1000)
        }
    }
}