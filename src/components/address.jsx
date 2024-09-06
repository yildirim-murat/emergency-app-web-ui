import {useEffect, useState} from "react";
import PropTypes from "prop-types";

function Address({districts}) {
    const [charCount, setCharCount] = useState(1024);
    const [addressCharCount, setAddressCharCount] = useState(1024);
    useEffect(() => {
        const textAreaCase = document.getElementById('caseDescription');
        const charCountLabel = document.getElementById('charCountLabelCase');
        const maxLengthCase = textAreaCase.getAttribute('maxlength');

        function updateCharCount() {
            const currentLength = textAreaCase.value.length;
            const remainingChars = maxLengthCase - currentLength;
            setCharCount(remainingChars);
            charCountLabel.textContent = `${remainingChars}/${maxLengthCase}`;
        }

        updateCharCount();
        textAreaCase.addEventListener('input', updateCharCount);

        return () => {
            textAreaCase.removeEventListener('input', updateCharCount);
        };
    }, []);
    useEffect(() => {
        const textAreaAddress = document.getElementById('addressDescription');
        const charCountLabelAddress = document.getElementById('charCountLabelAddress');
        const maxLengthAddress = textAreaAddress.getAttribute('maxlength');

        function updateAddressCharCount() {
            const currentLength = textAreaAddress.value.length;
            const remainingChars = maxLengthAddress - currentLength;
            setAddressCharCount(remainingChars);
            charCountLabelAddress.textContent = `${remainingChars}/${maxLengthAddress}`;
        }
        updateAddressCharCount();
        textAreaAddress.addEventListener('input', updateAddressCharCount);

        return () => {
            textAreaAddress.removeEventListener('input', updateAddressCharCount);
        };
    }, []);

    const districtList = Array.isArray(districts) ? districts : [];

    return (
        <div className="d-grid p-0">
            <div className="row p-0">
                <div className="row bg-info-subtle ps-3">Adres ve POI Arama</div>
                <div className="row">
                    <input className="form-control mt-2 p-0" list="poiList" id="poiDataList"
                           placeholder="Type to search..."/>
                    <datalist id="poiList">

                    </datalist>
                </div>
            </div>
            <div className="row">
                <div className="row bg-info-subtle mt-3 ps-3">Adres Bilgileri</div>
                <div className="row">
                    <div className="col-12 d-flex flex-column gap-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <label htmlFor="inputIlce" className="mb-0">İlçe:</label>
                            <input
                                className="form-control"
                                style={{width: "280px"}}
                                list="datalistOptionsIlce"
                                id="inputIlce"
                                placeholder="İlçe Giriniz..."
                            />
                        </div>
                        <datalist id="datalistOptionsIlce">
                            {districtList.length > 0 && districtList.map((dist) => (
                                <option key={dist.id} value={dist.name}/>
                            ))}
                        </datalist>

                        <div className="d-flex justify-content-between align-items-center">
                            <label htmlFor="inputMahalle" className="mb-0">Mahalle:</label>
                            <input
                                className="form-control"
                                style={{width: "280px"}}
                                list="datalistOptionsMahalle"
                                id="inputMahalle"
                                placeholder="Type to search..."
                            />
                        </div>
                        <datalist id="datalistOptionsMahalle">
                            <option value="San Francisco"/>
                            <option value="New York"/>
                            <option value="Seattle"/>
                            <option value="Los Angeles"/>
                            <option value="Chicago"/>
                        </datalist>

                        <div className="d-flex justify-content-between align-items-center">
                            <label htmlFor="inputCSBM" className="mb-0">CSBM:</label>
                            <input
                                className="form-control"
                                style={{width: "280px"}}
                                list="datalistOptionsCSBM"
                                id="inputCSBM"
                                placeholder="Type to search..."
                            />
                        </div>
                        <datalist id="datalistOptionsCSBM">
                            <option value="San Francisco"/>
                            <option value="New York"/>
                            <option value="Seattle"/>
                            <option value="Los Angeles"/>
                            <option value="Chicago"/>
                        </datalist>

                        <div className="d-flex justify-content-between align-items-center">
                            <label htmlFor="inputKapi" className="mb-0">Kapı:</label>
                            <input
                                className="form-control"
                                style={{width: "280px"}}
                                list="datalistOptionsKapi"
                                id="inputKapi"
                                placeholder="Type to search..."
                            />
                        </div>
                        <datalist id="datalistOptionsKapi">
                            <option value="San Francisco"/>
                            <option value="New York"/>
                            <option value="Seattle"/>
                            <option value="Los Angeles"/>
                            <option value="Chicago"/>
                        </datalist>

                        <div className="d-flex justify-content-between align-items-center">
                            <label htmlFor="inputEnlem" className="mb-0">Enlem:</label>
                            <input
                                className="form-control"
                                style={{width: "280px"}}
                                id="inputEnlem"
                                placeholder="Type to search..."
                            />
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <label htmlFor="inputBoylam" className="mb-0">Boylam:</label>
                            <input
                                className="form-control"
                                style={{width: "280px"}}
                                id="inputBoylam"
                                placeholder="Type to search..."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="row bg-info-subtle mt-3 ps-3">Adres Açıklaması</div>
                <div className="row">
                    <div className="mb-3">
            <textarea
                className="form-control mt-1 p-2"
                id="addressDescription"
                rows="2"
                style={{ resize: "none" }}
                maxLength={1024}
            />
                        <label
                            htmlFor="addressDescription"
                            className="form-label fs-6"
                            id="charCountLabelAddress"
                        >
                            1024/1024
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="btn btn-danger" onClick={()=> document.getElementById("addressDescription").value = ""}>Konum Detaylarını Temizle</div>
                </div>
            </div>
            <div className="row">
                <div className="row bg-info-subtle mt-2 ps-3">Vaka Açıklaması</div>
                <div className="row">
                    <div className="mb-3">
            <textarea
                className="form-control p-2 mt-1"
                id="caseDescription"
                rows="3"
                style={{ resize: "none" }}
                maxLength={1024}
            />
                        <label
                            htmlFor="caseDescription"
                            className="form-label fs-6"
                            id="charCountLabelCase"
                        >
                            {charCount}/1024
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

Address.propTypes = {
    districts: PropTypes.array
}

export default Address;