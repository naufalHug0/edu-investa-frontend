import {ApiServices} from "../../../services";

export default class ShortsServices extends ApiServices {
    getAll() {
        this.fetchData(this.axiosInstance.get(`/shorts`));
    }

    getById(id) {
        this.fetchData(this.axiosInstance.get(`/shorts/${id}`));
    }
}