import {ApiServices} from "../../../services";

export default class SkillServices extends ApiServices {
    getAll() {
        this.fetchData(this.axiosInstance.get(`skills`));
    }

    getUserSkills() {
        this.fetchData(this.axiosInstance.get(`skills/me`));
    }

    buySkill(id) {
        this.fetchData(this.axiosInstance.post(`skills/buy/${id}`));
    }
}