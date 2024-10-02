import axios from "axios";
import {getToken} from "../localStorage.js";
import {getSelectedDepartmentsFromMask} from "../utils/departmentUtils.js";

const baseURL = "http://localhost:8080";

export default class IncidentService {
    create() {
        return axios.post(`${baseURL}/api/v1/incidents`, {}, {
            headers: {
                "Authorization": `${getToken()}`,
                "accept": "*/*",
                "Content-Type": "application/json",
            }
        });
    }

    cancelledForm(data, incidentId) {
        let reason;
        if (data.typeName === "cancelledForm") {
            if (data.consultation) {
                reason = "consultation"
            } else if (data.mistake && data.otherReason === '') {
                reason = "mistake"
            } else if (data.mistake && data.otherReason !== '') {
                reason = data.otherReason
            } else {
                reason = "Beklenmedik Şekilde Uygulama Kapatıldı..."
            }
        }

        const requestData = {
            reason: reason,
            incidentId: incidentId
        };

        return axios.post(`${baseURL}/api/v1/cancelled`, requestData,
            {
                headers: {
                    "Authorization": `${getToken()}`,
                    "accept": "*/*",
                    "Content-Type": "application/json",
                }
            })
    }

    async savedForm(data) {
        const requestData = {
            incidentId: data.id,
            isPriority: data.isPriority,
            calledNumber: data.calledNumber,
            address:{
                province: data.address.city,
                district: data.address.district,
                neighborhood: data.address.neighborhood,
                street:data.address.street,
                latitude: data.address.latitude,
                longitude:data.address.longitude,
                description: data.address.description,
            },
            description:data.description,
            selectedHeaders:[],
            selectedSubItems:[]

        }

        const requests = getSelectedDepartmentsFromMask(data.selectedDepartments).map(department => {
            console.log("Department Name: " + department);
            return axios.post(`${baseURL}/api/v1/${department}`, requestData, {
                headers: {
                    "Authorization": `${getToken()}`,
                    "accept": "*/*",
                    "Content-Type": "application/json",
                }
            })
        });

        try {
            const responses = await Promise.all(requests);
            console.log("Başarıyla birim bilgileri kaydedildi.", responses);
        } catch (error) {
            console.log("Birime kaydedilemedi: ", error);
        }
    }

}