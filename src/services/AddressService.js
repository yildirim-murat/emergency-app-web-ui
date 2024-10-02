import axios from "axios";

export default class AddressService {
    static getAddress = {
        getProvince: async () => {
            try {
                return await axios.get("http://localhost:8002/province")
            } catch (error) {
                console.error("API request failed:", error);
                throw error;
            }
        },
        getDistrict: async (province) => {
            try {
                return await axios.get("http://localhost:8002/district/" + province);
            } catch (error) {
                console.error("API request failed:", error);
                throw error;
            }
        },
        getNeighborhoods: async (province,district) => {
            try {
                if (province && district) {
                    return await axios.get("http://localhost:8002/neighborhood/" + province.toUpperCase() +"/"+ district.toUpperCase());
                }
            } catch (error) {
                console.error("API request failed:", error);
                throw error;
            }
        }
    }

    static getIncidents={
        getData: async () => {
            try{
                return await axios.get("http://localhost:8002/incident")
            }catch (error) {
                console.error("API request failed:", error);
                throw error;
            }
        }
    }

    generateRandomPhoneNumber() {
        const prefix = '0312';
        const number = Math.floor(Math.random() * 1000000).toString().padStart(7, '0');
        return `${prefix}${number}`;
    }

    formatTime(timestamp) {
        const date = new Date(timestamp);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    formatDate(timestamp) {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, '0');
        const monthNames = [
            "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
            "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        return `${day} ${month} ${year}`;
    }

    createData() {
        const createTime = new Date().getTime();
        const formattedTime = this.formatTime(createTime);
        const formattedDate = this.formatDate(createTime);

        return {
            createId: Date.now(),
            createTime: formattedTime,
            createDate: formattedDate,
            calledNumber: this.generateRandomPhoneNumber()
        };
    }

    caseDefinition() {
        return {
            "1": "(MED 1) Medikal Öncelikli",
            "2": "(MED 2) Medikal",
            "3": "Sağlık Personeline Şiddet",
            "4": "Afet Talepleri",
            "5": "Aile İçi Şiddet",
            "6": "Alarm",
            "7": "Alkol/Sigara İhlalleri",
            "8": "Ambulans Talebi",
            "9": "Arama Kaydı Olan Şahıs",
            "10": "Arama Kurtarma",
            "11": "Baca Tıkanması",
            "12": "Baca Yangını",
            "13": "Balon Yangını",
            "14": "Balon Kazası",
            "15": "Bayrak-Afiş Asma Talebi",
            "16": "Boğulma",
            "17": "Buluntu (Çocuk, Araç, Kişi)",
            "18": "Buzkırma"
        }
    }

    generateDataObject(quantity) {
        return Array.from({length: quantity}, () => this.createData());
    }

    generateDataForStaff(quantity) {
        const createTime = new Date().getTime();
        const formattedTime = this.formatTime(createTime);
        const totalSeconds = Math.floor(Math.random() * 3599) + 1;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const formattedRandomTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        return Array.from({length: quantity}, () => ({
            "staffName": "Staff-" + Math.floor(Math.random() * 1000).toString(),
            "departmentName": "department-" + Math.floor(Math.random() * 10).toString(),
            "status": Math.floor(Math.random() * 3).toString(),
            "duration": formattedRandomTime,
            "recentActivity": formattedTime
        }))
    }

    generateData() {
        const createTime = new Date().getTime();
        const formattedTime = this.formatTime(createTime);
        const formattedDate = this.formatDate(createTime);

        return {
            createId: Date.now(),
            createTime: formattedTime,
            createDate: formattedDate,
            callHistory: [{
                "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                "number": this.generateRandomPhoneNumber(),
                "callTime": createTime,
                "lat-lot": "34.525 42.5478",
                "call-location": "34.524 42.5478",
                "call-attribution": true
            },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                }
                ,
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                }
                ,
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                }
                ,
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                }
                ,
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                }
                ,
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                }
                ,
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                },
                {
                    "callId": Math.floor(Math.random() * 1000000).toString().padStart(7, '0'),
                    "number": this.generateRandomPhoneNumber(),
                    "callTime": createTime,
                    "lat-lot": "34.525 42.5478",
                    "call-location": "34.524 42.5478",
                    "call-attribution": true
                }

            ]
        };
    }

    sendData(data) {
        return console.log(JSON.stringify({data}));
    }
}