import axios from "axios";
import {getToken} from "../localStorage.js";

export default class SecondPageOperationsService {
    async getData(data) {
        return axios.get(`http://localhost:8080/api/v1/${data}`, {
            headers: {
                "Authorization": `${getToken()}`,
                "accept": "*/*",
                "Content-Type": "application/json",
            }
        })
    }

    async getAllData(data) {
        return axios.get(`http://localhost:8080/api/v1/${data}/get/list/quick`, {
            headers: {
                "Authorization": `${getToken()}`,
                "accept": "*/*",
                "Content-Type": "application/json",
            }
        })
    }

    async getDataTeamAssigned(data) {
        return axios.get(`http://localhost:8080/api/v1/${data}/get/list/assigned`, {
            headers: {
                "Authorization": `${getToken()}`,
                "accept": "*/*",
                "Content-Type": "application/json",
            }
        })
    }
}