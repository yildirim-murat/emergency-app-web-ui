import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import AddressService from "../services/AddressService.js";

function Address({province, triggerUpdate, addressData}) {
    const [addressCharCount, setAddressCharCount] = useState(1024);
    const [district, setDistrict] = useState([]);
    const [neighborhoods, setNeighborhoods] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedNeighborhoods, setSelectedNeighborhoods] = useState("");

    useEffect(() => {
        const textAreaAddress = document.getElementById('addressDescription');
        updateAddressCharCount();
        textAreaAddress.addEventListener('input', updateAddressCharCount);
        return () => {
            textAreaAddress.removeEventListener('input', updateAddressCharCount);
        };
    }, []);

    useEffect(() => {
        if (triggerUpdate) {
            updateAddressCharCount();
        }
    }, [triggerUpdate]);

    function updateAddressCharCount() {
        const textAreaAddress = document.getElementById('addressDescription');
        const currentLength = textAreaAddress.value.length;
        const remainingChars = textAreaAddress.maxLength - currentLength;
        setAddressCharCount(remainingChars);
    }

    // useEffect(()=> console.log("Receive Data: " + districts),[districts]);
    // const [charCount, setCharCount] = useState(1024);
    // const [neighborhoods, setNeighborhoods] = useState([]);
    // useEffect(() => {
    //     const textAreaCase = document.getElementById('caseDescription');
    //     const charCountLabel = document.getElementById('charCountLabelCase');
    //     const maxLengthCase = textAreaCase.getAttribute('maxlength');
    //
    //     function updateCharCount() {
    //         const currentLength = textAreaCase.value.length;
    //         const remainingChars = maxLengthCase - currentLength;
    //         setCharCount(remainingChars);
    //         charCountLabel.textContent = `${remainingChars}/${maxLengthCase}`;
    //     }
    //
    //     updateCharCount();
    //     textAreaCase.addEventListener('input', updateCharCount);
    //
    //     return () => {
    //         textAreaCase.removeEventListener('input', updateCharCount);
    //     };
    // }, []);
    // useEffect(() => {
    //     const fetchNeighborhood = async () => {
    //         try {
    //             return await NewEventService.getAddress.getNeighborhoods(districts);
    //         } catch (error) {
    //             console.error(error);
    //             throw error;
    //         }
    //     }
    //     fetchNeighborhood()
    //         .then(response => {
    //             if(response && response.status === 200) {
    //
    //                 setNeighborhoods(response.data)
    //             }
    //         })
    //         .catch(error => console.error("İlçe Bilgisi çekilirken hata oluştu: ", error));
    //
    //     console.log("districts: " + districts);
    //     console.log("neighborhoods: " + neighborhoods);
    // }, [districts]);
    //
    // const districtList = Array.isArray(districts) ? districts : [];
    // const neighborhoodList = Array.isArray(neighborhoods) ? neighborhoods : [];

    useEffect(() => {
        addressData((prevData) => ({...prevData, city: province}));
        const fetchData = async () => {
            try {
                const response = await AddressService.getAddress.getDistrict(province);

                if (response && response.data) setDistrict(response.data);
            } catch (error) {
                console.log("API request failed:", error);
            }
        };

        if (province) {
            fetchData();
        }
    }, [province]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AddressService.getAddress.getNeighborhoods(province,selectedDistrict);

                if (response && response.data) setNeighborhoods(response.data);
            } catch (error) {
                console.log("API request failed:", error);
            }
        };

        if (province && selectedDistrict) {
            fetchData();
        }
    }, [province, selectedDistrict]);

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
        addressData((prevData) => ({ ...prevData, district: e.target.value }));
    }

    const handleNeighborhoodChange=(e)=>{
        setSelectedNeighborhoods(e.target.value);
        addressData((prevData)=>({...prevData, neighborhood: e.target.value}));
    }

    const handleStreetChange=(e)=>{
        addressData((prevData)=>({...prevData, street: e.target.value}));
    }

    const handleLatitudeChange=(e)=>{
        addressData((prevData)=>({...prevData,latitude: e.target.value}));
    }

    const handleLongitudeChange = (e) => {
        addressData((prevData)=>({...prevData, longitude: e.target.value}));
    }

    const handleAddressDescChange =(e)=>{
        addressData((prevData)=>({...prevData, description: e.target.value}));
    }
    return (
        <div className="d-grid ps-3 pt-0 m-0 mb-3 w-100 h-100 bg-white overflow-hidden user-select-none">
            <div className="roww-100 ps-2 text-end" style={{fontSize: "12px"}}>Adres Tipi: <span
                style={{color: "red"}}>Manuel</span> <span style={{margin: "0 10px"}}>ELS</span> <span>Mobil Opr.</span>
            </div>
            <div className="row bg-danger-subtle rounded w-100 ps-2">Adres Bilgileri</div>
            <div className="row w-100 h-75 pt-1">
                <input
                    className="form-control"
                    list="poiList"
                    placeholder="Adres veya POI Arama"
                    disabled={true}
                />
                <datalist id="poiList"></datalist>
            </div>
            <div className="row w-100 h-75">
                <input
                    className="form-control"
                    list="datalistDistricts"
                    placeholder="İlçe Giriniz..."
                    onChange={handleDistrictChange}
                />
                <datalist id="datalistDistricts">
                    {district &&  district.length > 0 && district.map((item, index) => (
                        <option key={index} value={item}/>
                    ))}
                </datalist>
            </div>
            <div className="row w-100 h-75">
                <input
                    className="form-control"
                    list="datalistNeighborhood"
                    placeholder="Mahalle Giriniz..."
                    onChange={handleNeighborhoodChange}
                />
                <datalist id="datalistNeighborhood">
                    {neighborhoods && neighborhoods.length > 0 && neighborhoods.map((item, index) => (
                        <option key={index} value={item}/>
                    ))}
                </datalist>
            </div>
            <div className="row w-100 h-75">
                <input
                    className="form-control"
                    list="datalistStreeet"
                    placeholder="Cadde/Sokak Giriniz..."
                    onChange={handleStreetChange}
                />
                <datalist id="datalistStreeet">
                    {/*<option value="San Francisco"/>*/}
                    {/*<option value="New York"/>*/}
                    {/*<option value="Seattle"/>*/}
                    {/*<option value="Los Angeles"/>*/}
                    {/*<option value="Chicago"/>*/}
                </datalist>
            </div>
            <div className="row w-100 h-75">
                <div className="col-6 w-50 p-0 m-0"><input
                    className="form-control"
                    placeholder="Enlem"
                    onChange={handleLatitudeChange}
                /></div>

                <div className="col-6 w-50 p-0 m-0"><input
                    className="form-control"
                    placeholder="Boylam"
                    onChange={handleLongitudeChange}
                /></div>

            </div>
            <div className="row w-100 h-75 mb-2">
                <textarea
                    placeholder={"Adres Açıklaması"}
                    className="form-control"
                    rows="3"
                    id={"addressDescription"}
                    style={{resize: "none"}}
                    maxLength={1024}
                    onChange={handleAddressDescChange}
                />
                <span className={"w-100 text-end mb-2"} style={{fontSize: "10px"}}> {addressCharCount + "/1024"} </span>
            </div>
        </div>

    );
}

Address.propTypes = {
    province: PropTypes.string,
    triggerUpdate: PropTypes.bool,
    addressData: PropTypes.func
}

export default Address;