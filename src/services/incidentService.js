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
            description: data.description,
            address: {
                province: data.address.province,
                district: data.address.district,
                neighborhood: data.address.neighborhood,
                street: data.address.street,
                latitude: data.address.latitude,
                longitude: data.address.longitude,
                description: data.address.description,
            },
            incidentDefinition: {
                definition: data.definition,
                subDefinition: data.subDefinition,
            },
        }
        const requests = getSelectedDepartmentsFromMask(data.selectedDepartments).map(department => {

            return axios.post(`${baseURL}/api/v1/${department}`, requestData, {
                headers: {
                    "Authorization": `${getToken()}`,
                    "accept": "*/*",
                    "Content-Type": "application/json",
                }
            })
        });

        try {
            await Promise.all(requests);
        } catch (error) {
            console.error("Birime kaydedilemedi: ", error.response ? error.response.data : error);
        }
    }

    async getList(data) {
        return axios.get(`${baseURL}/api/v1/${data}/get/list`, {
            headers: {
                "Authorization": `${getToken()}`,
                "accept": "*/*",
                "Content-Type": "application/json",
            }
        })
    }

    async getOneDetailsById(data, id) {
        return axios.get(`${baseURL}/api/v1/${data}/get/list/by_id`, {
            headers: {
                "Authorization": `${getToken()}`,
                "accept": "*/*",
                "Content-Type": "application/json",
            },
            params: {
                id: id
            }
        })
    }

    async updateForm(data) {

        console.log(JSON.stringify(data,null,2))



        // await axios.patch(`${baseURL}/api/v1/health`, {data}, {
        //     headers: {
        //         "Authorization": `${getToken()}`,
        //         "accept": "*/*",
        //         "Content-Type": "application/json",
        //     }
        // }).then(()=> console.log("Updating form")).catch((error)=> {console.error("Do not form updated: " + error)});


        // const requestData = {
        //     incidentId: data.id,
        //     isPriority: data.isPriority,
        //     calledNumber: data.calledNumber,
        //     description: data.description,
        //     address: {
        //         province: data.address.province,
        //         district: data.address.district,
        //         neighborhood: data.address.neighborhood,
        //         street: data.address.street,
        //         latitude: data.address.latitude,
        //         longitude: data.address.longitude,
        //         description: data.address.description,
        //     },
        //     incidentDefinition: {
        //         definition: data.definition,
        //         subDefinition: data.subDefinition,
        //     },
        //     crew:data.crew,
        // }


// BURADAYIM: IdeaIntellij HealthController da 46. satırdayız.
    }
}