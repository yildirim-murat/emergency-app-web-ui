import axios from "axios";

const addressService = {
    getProvince: async () => {
        try {
            return await axios.get("https://turkiyeapi.herokuapp.com/api/v1/provinces?fields=name");
        } catch (error) {
            console.error("API request failed:", error);
            throw error;
        }
    },
    getDistrict: async (province) => {
        try {
            return await axios.get(`https://turkiyeapi.herokuapp.com/api/v1/provinces?name=${province}`);
        } catch (error) {
            console.error("API request failed:", error);
            throw error;
        }
    }
};

export default addressService;
