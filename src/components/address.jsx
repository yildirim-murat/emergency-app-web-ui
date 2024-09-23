import PropTypes from "prop-types";
import {useEffect, useState} from "react";

function Address({districts,triggerUpdate}) {
    const [addressCharCount, setAddressCharCount] = useState(1024);

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

    // const [charCount, setCharCount] = useState(1024);
    // const [neighborhoods, setNeighborhoods] = useState([]);
    // useEffect(() => {
    //     const textAreaCase = document.getElementById('caseDescription');
    //     const charCountLabel = document.getElementById('charCountLabelCase');
    //     // const maxLengthCase = textAreaCase.getAttribute('maxlength');
    //
    //     // function updateCharCount() {
    //     //     const currentLength = textAreaCase.value.length;
    //     //     const remainingChars = maxLengthCase - currentLength;
    //     //     setCharCount(remainingChars);
    //     //     charCountLabel.textContent = `${remainingChars}/${maxLengthCase}`;
    //     // }
    //
    //     // updateCharCount();
    //     // textAreaCase.addEventListener('input', updateCharCount);
    //
    //     return () => {
    //         // textAreaCase.removeEventListener('input', updateCharCount);
    //     };
    // }, []);
    //
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

    return (
        <div className="d-grid ps-3 pt-0 m-0 mb-3 w-100 h-100 bg-white overflow-hidden user-select-none">
            <div className="roww-100 ps-2 text-end" style={{fontSize:"12px"}}>Adres Tipi: <span style={{color:"red"}}>Manuel</span> <span style={{margin:"0 10px"}}>ELS</span> <span>Mobil Opr.</span></div>
            <div className="row bg-danger-subtle rounded w-100 ps-2">Adres Bilgileri</div>
            <div className="row w-100 h-75 pt-1">
                <input
                    className="form-control"
                    list="poiList"
                    placeholder="Adres veya POI Arama"
                />
                <datalist id="poiList"></datalist>
            </div>
            <div className="row w-100 h-75">
                <input
                    className="form-control"
                    list="datalistDistricts"
                    placeholder="İlçe Giriniz..."
                />
                <datalist id="datalistDistricts">
                    {/*{districtList.length > 0 && districtList.map((item, index) => (*/}
                    {/*    <option key={index} value={item}/>*/}
                    {/*))}*/}
                </datalist>
            </div>
            <div className="row w-100 h-75">
                <input
                    className="form-control"
                    list="datalistNeighborhood"
                    placeholder="Mahalle Giriniz..."
                />
            </div>
            <div className="row w-100 h-75">
                <input
                    className="form-control"
                    list="datalistStreeet"
                    placeholder="Cadde/Sokak Giriniz..."
                />
                <datalist id="datalistStreeet">
                    <option value="San Francisco"/>
                    <option value="New York"/>
                    <option value="Seattle"/>
                    <option value="Los Angeles"/>
                    <option value="Chicago"/>
                </datalist>
            </div>
            <div className="row w-100 h-75">
                <div className="col-6 w-50 p-0 m-0"><input
                    className="form-control"
                    placeholder="Enlem"
                /></div>

                <div className="col-6 w-50 p-0 m-0"><input
                    className="form-control"
                    placeholder="Boylam"
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
                />
                <span className={"w-100 text-end mb-2"} style={{fontSize: "10px"}}> {addressCharCount + "/1024"} </span>
            </div>
        </div>

    );
}

Address.propTypes = {
    districts: PropTypes.array
}

export default Address;