import axios from "axios";
import {getToken} from "../localStorage.js";
import {getSelectedDepartmentsFromMask} from "../utils/departmentUtils.js";

export default class SecondPageOperationsService {

    async getData(data) {
        // const requestData = {
        //     incidentId: data.id,
        //     isPriority: data.isPriority,
        //     calledNumber: data.calledNumber,
        //     address:{
        //         province: data.address.city,
        //         district: data.address.district,
        //         neighborhood: data.address.neighborhood,
        //         street:data.address.street,
        //         latitude: data.address.latitude,
        //         longitude:data.address.longitude,
        //         description: data.address.description,
        //     },
        //     description:data.description,
        //     selectedHeaders:[],
        //     selectedSubItems:[]
        //
        // }
        // const requests = getSelectedDepartmentsFromMask(data.selectedDepartments).map(department => {
        //     console.log("Department Name: " + department);
            return axios.get(`http://localhost:8080/api/v1/${data}/get/list/quick`, {
                headers: {
                    "Authorization": `${getToken()}`,
                    "accept": "*/*",
                    "Content-Type": "application/json",
                }
            })
        // });
        // try {
        //     const responses = await Promise.all(requests);
        //     console.log("Veriler başarılı şekilde getirildi.", responses);
        // } catch (error) {
        //     console.log("Hata ile karşılaşıldı: ", error);
        // }
    }
}