import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";
import AddressService from "../services/AddressService.js";

function Address({triggerUpdate, data, onAddressChange}) {
    const [addressCharCount, setAddressCharCount] = useState(1024);

    const [district, setDistrict] = useState([]);
    const [neighborhoods, setNeighborhoods] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedNeighborhoods, setSelectedNeighborhoods] = useState("");
    const [selectedStreet, setSelectedStreet] = useState("");
    const [selectedLatitude, setSelectedLatitude] = useState("");
    const [selectedLongitude, setSelectedLongitude] = useState("");
    const [selectedAddressDesc, setSelectedAddressDesc] = useState("");
    const userInputRef = useRef(false);

    useEffect(() => {
        if (data) {
            if (data.province && data.province !== selectedProvince) {
                setSelectedProvince(data.province);
            }
            if (data.district && data.district !== selectedDistrict) {
                setSelectedDistrict(data.district);
            }
            if (data.neighborhood && data.neighborhood !== selectedNeighborhoods) {
                setSelectedNeighborhoods(data.neighborhood);
            }
            if (data.street && data.street !== selectedStreet) {
                setSelectedStreet(data.street);
            }
            if (data.latitude && data.latitude !== selectedLatitude) {
                setSelectedLatitude(data.latitude);
            }
            if (data.longitude && data.longitude !== selectedLongitude) {
                setSelectedLongitude(data.longitude);
            }
            if (userInputRef.current) {
                userInputRef.current = false;
            } else if (data.description && data.description !== selectedAddressDesc) {
                setSelectedAddressDesc(data.description);
            }
        } else {
            const userProvinceDefaultValue = JSON.parse(localStorage.getItem("user"));
            const province = userProvinceDefaultValue?.data?.data?.province || "ANKARA";

            if (province && province !== selectedProvince) {
                getAddress(province).then((response) => setDistrict(response));
                setSelectedProvince(province);
            }
        }
    }, [data, selectedProvince, selectedDistrict, selectedNeighborhoods, selectedStreet, selectedAddressDesc, selectedLatitude, selectedLongitude]);


    useEffect(() => {
        getStreet(selectedProvince, selectedDistrict).then((response) => setNeighborhoods(response))
    }, [selectedDistrict, selectedProvince])

    useEffect(() => {
        updateAddress()
    }, [triggerUpdate, selectedProvince, selectedDistrict, selectedNeighborhoods, selectedStreet, selectedLatitude, selectedLongitude, selectedAddressDesc]);

    function updateAddressCharCount() {
        const textAreaAddress = document.getElementById('addressDescription');
        const currentLength = textAreaAddress.value.length;
        const remainingChars = textAreaAddress.maxLength - currentLength;
        setAddressCharCount(remainingChars);
    }

    async function getAddress(province) {
        return await AddressService.getAddress.getDistrict(province);
    }

    async function getStreet(province, district) {
        return await AddressService.getAddress.getNeighborhoods(province, district);
    }

    const handleDistrictChange = (e) => {
        setSelectedDistrict(e.target.value);
    };
    const handleNeighborhoodChange = (e) => {
        setSelectedNeighborhoods(e.target.value);
    };
    const handleStreetChange = (e) => {
        setSelectedStreet(e.target.value);
    };
    const handleLatitudeChange = (e) => {
        setSelectedLatitude(e.target.value);
    };
    const handleLongitudeChange = (e) => {
        setSelectedLongitude(e.target.value);
    };
    const handleAddressDescChange = (e) => {
        userInputRef.current = true
        setSelectedAddressDesc(e.target.value);
        updateAddressCharCount();
        updateAddress();
    };
    const updateAddress = () => {
        const updatedAddress = {
            province: selectedProvince,
            district: selectedDistrict,
            neighborhood: selectedNeighborhoods,
            street: selectedStreet,
            latitude: selectedLatitude,
            longitude: selectedLongitude,
            description: selectedAddressDesc
        };
        onAddressChange(updatedAddress);
    };

    return (
        <div className="d-grid ps-3 pt-0 m-0 mb-3 w-100 h-100 bg-white overflow-hidden user-select-none">
            <div className="row w-100 ps-2 text-end" style={{fontSize: "12px"}}>
                <div className="col">
                    Adres Tipi:
                    <span style={{color: "red"}}> Manuel</span>
                    <span style={{margin: "0 10px"}}> ELS</span>
                    <span> Mobil Opr.</span>
                </div>
            </div>
            <div className="row bg-danger-subtle rounded w-100 ps-2">Adres Bilgileri</div>
            <div className="row w-100 h-75 pt-1">
                <input
                    className="form-control"
                    list="poiList"
                    placeholder="Adres veya POI Arama"
                    disabled={true}
                    value={""}
                />
                <datalist id="poiList"></datalist>
            </div>
            <div className="row w-100 h-75">
                <input
                    className="form-control"
                    list="datalistDistricts"
                    placeholder="İlçe Giriniz..."
                    value={selectedDistrict || ''}
                    onChange={handleDistrictChange}
                />
                <datalist id="datalistDistricts">
                    {district && district.data && district.data.map((item, index) => (
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
                    value={selectedNeighborhoods || ''}
                />
                <datalist id="datalistNeighborhood">
                    {neighborhoods && neighborhoods.data && neighborhoods.data.map((item, index) => (
                        <option key={index} value={item}/>
                    ))}
                </datalist>
            </div>
            <div className="row w-100 h-75">
                <input
                    className="form-control"
                    list="datalistStreet"
                    placeholder="Cadde/Sokak Giriniz..."
                    onChange={handleStreetChange}
                    value={selectedStreet || ""}
                />
                <datalist id="datalistStreet"></datalist>
            </div>
            <div className="row w-100 h-75">
                <div className="col-6 w-50 p-0 m-0">
                    <input
                        className="form-control"
                        placeholder="Enlem"
                        onChange={handleLatitudeChange}
                        value={selectedLatitude || ""}
                    />
                </div>
                <div className="col-6 w-50 p-0 m-0">
                    <input
                        className="form-control"
                        placeholder="Boylam"
                        onChange={handleLongitudeChange}
                        value={selectedLongitude || ""}
                    />
                </div>
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
                    value={selectedAddressDesc || ""}
                />
                <span className={"w-100 text-end mb-2"} style={{fontSize: "10px"}}>{addressCharCount + "/1024"}</span>
            </div>
        </div>
    );
}

Address.propTypes = {
    triggerUpdate: PropTypes.number,
    data: PropTypes.object,
    onAddressChange: PropTypes.func
};

export default Address;