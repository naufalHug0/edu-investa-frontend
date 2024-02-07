import {ApiServices} from "../../../services";

export default class InvestmentServices extends ApiServices {
    getUserInvestment() {
        this.fetchData(this.axiosInstance.get(`/investment`));
    }

    getAssetValueChanges() {
        this.fetchData(this.axiosInstance.get(`/investment/asset-changes`));
    }

    getRiskProfiles() {
        this.fetchData(this.axiosInstance.get(`/investment/risk-profiles`));
    }
}