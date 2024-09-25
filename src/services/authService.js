import axios from "axios";

export default class AuthService {
    login(tcknOrEmail, password) {
        return axios.post(`http://localhost:8080/api/v1/auth/login/management`, {
            identifier: tcknOrEmail,
            password: password
        });
    }
}

export class StaffService{
    createStaff( firstName, lastName, identityNumber,phoneNumber,username,departmentName) {
        return axios.post(`http://localhost:8080/api/v1/staff/create`, {
            firstName: firstName,
            lastName: lastName,
            identityNumber: identityNumber,
            phoneNumber: phoneNumber,
            username: username,
            departmentName: departmentName
        })
    }
}