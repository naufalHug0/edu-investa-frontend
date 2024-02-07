import ApiServices from "./ApiServices";

export default class XpServices extends ApiServices {
    getAll() {
        this.fetchData(this.axiosInstance.get(`/xp`));
    }
    
    update(total_xp) {
        this.fetchData(this.axiosInstance.patch(`/xp`, { total_xp }))
    }
}