import {ApiServices} from "../../../services";

export default class CourseServices extends ApiServices {
    getAll() {
        this.fetchData(this.axiosInstance.get('course'))
    }

    getById(id) {
        this.fetchData(this.axiosInstance.get(`course/${id}`))
    }

}