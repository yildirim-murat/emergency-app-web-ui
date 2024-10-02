import axios from "axios";

export default class AuthService {
    login(tcknOrEmail, password) {
        return axios.post(`http://localhost:8080/api/v1/auth/login/management`, {
            identifier: tcknOrEmail,
            password: password
        });
    }

    getData(tcknOrEmail, token) {
        return axios.get(`http://localhost:8080/api/v1/staff/get/one/fully_joined/by_username`, {
            headers: {
                "Authorization": `${token}`,
                "accept": "*/*"
            },
            params: {
                username: tcknOrEmail
            }
        });
    }

}

export class StaffService {
    createStaff(data) {
        return axios.post(`http://localhost:8080/api/v1/staff/create`, {
            firstName: data.firstName,
            lastName: data.lastName,
            identityNumber: data.identityNumber,
            phoneNumber: data.phoneNumber,
            username: data.username,
            province: data.province,
            departmentName: data.departmentName
        })
    }
}