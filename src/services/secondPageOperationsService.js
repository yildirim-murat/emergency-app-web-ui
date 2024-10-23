import axios from "axios";
import {getToken} from "../localStorage.js";
import {getSelectedDepartmentsFromMask} from "../utils/departmentUtils.js";

export default class SecondPageOperationsService {

    async getData(data) {
        const requests = getSelectedDepartmentsFromMask(data.selectedDepartments).map(department => {
            console.log("AAAAAA: " + department);
            return axios.get(`http://localhost:8080/api/v1/${department}/get/list/quick`, {
                headers: {
                    "Authorization": `${getToken()}`,
                    "accept": "*/*",
                    "Content-Type": "application/json",
                }
            })
        });
        try {
            const responses = await Promise.all(requests);
            console.log("Veriler başarılı şekilde getirildi.", responses);
        } catch (error) {
            console.log("Hata ile karşılaşıldı: ", error);
        }
    }

    async getAllData(data){
        return axios.get(`http://localhost:8080/api/v1/${data}/get/list/quick`, {
            headers: {
                "Authorization": `${getToken()}`,
                "accept": "*/*",
                "Content-Type": "application/json",
            }
        })
    }

    async getDataTeamAssigned(data){
        return axios.get(`http://localhost:8080/api/v1/${data}/get/list/assigned`, {
            headers: {
                "Authorization": `${getToken()}`,
                "accept": "*/*",
                "Content-Type": "application/json",
            }
        })
    }
}