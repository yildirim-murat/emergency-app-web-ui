import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import CallLogs from "./callLogs.jsx";
import AccordionRow from "./accordionRow.jsx";
import Address from "./address.jsx";
import Priority from "./priority.jsx";
import Department from "./department.jsx";
import IncidentService from "../services/incidentService.js";
import AddressService from "../services/AddressService.js";

function EventDetails({data, removeTab}) {
    const [message, setMessage] = useState({title: "", content: ""});
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [incidents, setIncidents] = useState();
    const [incidentsList, setIncidentsList] = useState([]);
    const [keyList, setKeyList] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [triggerUpdate, setTriggerUpdate] = useState(false);
    const [selectedHeaders, setSelectedHeaders] = useState([]);
    const [selectedSubItems, setSelectedSubItems] = useState({});
    const [selectedDepartments, setSelectedDepartments] = useState(0);
    const [selectedProvince, setSelectedProvince] = useState(JSON.parse(localStorage.getItem("user")).data.data.province);
    const [charCount, setCharCount] = useState(1024);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [caseDescription, setCaseDescription] = useState("");
    const [addressData, setAddressData] = useState({})
    const [priorityData, setPriorityData] = useState({"newData": {"isPriority": false}})
    const [reason, setReason] = useState({
        typeName: "cancelledForm",
        consultation: false,
        mistake: false,
        otherReason: ""
    });

    const service = new IncidentService();


    useEffect(() => {
        window.addEventListener('keydown', handleF9Press);
        return () => {
            window.removeEventListener('keydown', handleF9Press);
        };
    }, []);

    useEffect(() => {
        if (showModal && modalRef.current) {
            const modalInstance = new window.bootstrap.Modal(modalRef.current);
            modalInstance.show();

            modalInstance.handleHide = () => {
                setShowModal(false);
            };

            const handleKeyDown = (event) => {
                if (event.code === 'Space') {
                    event.preventDefault();
                    closeButtonRef.current.click();
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                modalInstance.hide();
                window.removeEventListener('keydown', handleKeyDown);
                setShowModal(false);
            };
        }
    }, [showModal]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await AddressService.getIncidents.getData();
                setIncidents(response);
            } catch (error) {
                console.log("API request failed:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const provinceList = await AddressService.getAddress.getProvince();
                sessionStorage.setItem("province", JSON.stringify(provinceList.data))
            } catch (error) {
                console.log("API request failed:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (incidentsList.length > 0) {
            const uniqueKeys = new Set();

            incidentsList.forEach(item => {
                    Object.keys(item).forEach(key => {
                        uniqueKeys.add(key)
                    })
                }
            )
            setKeyList(Array.from(uniqueKeys));
        }

    }, [incidentsList]);

    const handleDepartmentSelectionChange = (selected) => {
        setSelectedDepartments(selected.inNumber);
    };

    const handleChangeRadio = (event) => {
        const id = event.target.id;

        if (id === 'mistake') {
            setReason({typeName: "cancelledForm", consultation: false, mistake: true, otherReason: ''});
        } else if (id === 'consultation') {
            setReason({typeName: "cancelledForm", consultation: true, mistake: false, otherReason: ''});
        }
    }

    const sendForm = () => {
        setReason({typeName:"saved",mistake: false,consultation: false, otherReason: ''});
        setShowModal(false)
        const callNumber = document.getElementById("calledNumber").value;
        if (selectedHeaders.length > 0 && selectedDepartments > 0 && callNumber.length > 0) {
            const sendData = {
                id: data.id,
                isPriority: priorityData.newData.isPriority,
                calledNumber: phoneNumber,
                address: addressData,
                description: caseDescription,
                selectedHeaders: selectedHeaders,
                selectedSubItems: selectedSubItems,
                selectedDepartments: selectedDepartments,
            }
            try {
                service.savedForm(sendData).then(() => console.log(" "));
                removeTab();
            }catch(error) {
                setMessage({title: "Hata", content: `Veriler Kaydedilirken Hata Oluştu. Hata: ${error}`});
                setShowModal(true)
            }

        } else {
            let errorMessage;
            if (selectedHeaders.length < 1 && selectedDepartments === 0 && callNumber.length === 0) {
                errorMessage = `Lütfen Kurum ve Vaka Tanımı Seçiniz, Arayan Numarayı Giriniz...`;
            } else if (selectedDepartments === 0) {
                errorMessage = "Lütfen Kurum Seçiniz";
            } else if (selectedHeaders.length < 1) {
                errorMessage = "Lütfen Vaka Seçiniz";
            } else if (callNumber.length === 0) {
                errorMessage = "Arayan Numara Boş Geçilemez"
            }

            setMessage({title: "Hata", content: errorMessage});
            setShowModal(true);
        }
    };
    const attributeCall = () => {
        setShowModal(true);
        setMessage({title: "Başarılı", content: "İlişkilendirme Yapıldı"})
    }
    const endCall = () => {
        setMessage({
            title: "Vaka İptal Nedeni",
            content: (
                <div className={"row"} style={{fontSize: "12px"}}>
                    <div className="col-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="cancelledReason"
                                value={"Danışma/Bilgi"}
                                id="consultation"
                                onChange={handleChangeRadio}/>
                            <label className="form-check-label" htmlFor="consultation">
                                Danışma/Bilgi
                            </label>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="cancelledReason"
                                value={"Yanlış Kullanım"}
                                id="mistake"
                                onChange={handleChangeRadio}/>
                            <label className="form-check-label" htmlFor="mistake">
                                Yanlış Kullanım
                            </label>
                        </div>
                    </div>
                    <div className="col-6">
                        <label className="form-check-label" htmlFor="otherReason">
                            Diğer Nedenler
                        </label>
                        <select
                            className="form-select form-select-sm"
                            style={{fontSize: "12px"}}
                            aria-label="İptal Nedeni Seçiniz"
                            onChange={(e) => {
                                setReason({
                                    typeName: "cancelledForm",
                                    consultation: false,
                                    mistake: true,
                                    otherReason: e.target.value
                                })
                                document.getElementById("mistake").checked = true;
                                document.getElementById("consultation").checked = false;
                            }
                            }
                        >
                            <option value="">Seçiniz</option>
                            <option value="Bir Vaka İçin Tekrar Arama">Bir Vaka İçin Tekrar Arama</option>
                            <option value="Görev İptali">Görev İptali</option>
                            <option value="Eksik İhbar">Eksik İhbar</option>
                        </select>
                    </div>
                </div>
            )
        });
        setShowModal(true);
    };
    const handleF9Press = (event) => {
        if (event.key === 'F9') {
            const endCallButton = document.getElementById('endCall');
            if (endCallButton) {
                endCallButton.click();
            }
        }
    };
    const handleCloseModal = async() => {
        if (reason.typeName === "cancelledForm") {
            if (!reason.consultation && !reason.mistake) {
                alert("Lütfen Seçim Yapınız!")
                setShowModal(false);
                return;
            }

            try {
                await  service.cancelledForm(reason, data.id);
                removeTab();
            } catch (err) {
                console.log("Error saving form: " + err);
                alert("Form Kaydedilirken bir hata oluştu. Lütfen tekrar deneyin.")
            }
        }
        setShowModal(false);
        setMessage({title: "", content: ""});
    }

    useEffect(() => {
        if (incidents) {
            Object.values(incidents).forEach(value => {
                if (Array.isArray(value)) {
                    setIncidentsList(value)
                }
            });
        }
    }, [incidents]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toUpperCase());
    }

    const filteredList = keyList.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleHeaderSelect = (header, isSelected) => {
        setSelectedHeaders(prev =>
            isSelected ? [...prev, header] : prev.filter(h => h !== header)
        );

        if (!isSelected) {
            setSelectedSubItems(prev => {
                const updated = {...prev};
                delete updated[header];
                return updated;
            });
        }
    };

    const handleSubItemSelect = (header, subItem, isSelected) => {
        setSelectedSubItems(prev => {
            const updated = {...prev};

            if (isSelected) {
                if (!updated[header]) {
                    updated[header] = [subItem];
                } else if (!updated[header].includes(subItem)) {
                    updated[header].push(subItem);
                }
            } else {
                updated[header] = updated[header].filter(item => item !== subItem);
                if (updated[header].length === 0) delete updated[header];
            }

            return updated;
        });

        if (isSelected && !selectedHeaders.includes(header)) {
            handleHeaderSelect(header, true);
        }
    };

    const formatDateTime = (dateTime) => {
        let dateObject = new Date(dateTime);

        let formattedDate = dateObject.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });

        let hours = dateObject.getHours().toString().padStart(2, '0');
        let minutes = dateObject.getMinutes().toString().padStart(2, '0');
        let seconds = dateObject.getSeconds().toString().padStart(2, '0');

        // let formattedDate = `${day}-${month}-${year}`;
        let formattedTime = `${hours}:${minutes}:${seconds}`;

        return {
            date: formattedDate,
            time: formattedTime
        };
    }

    const province = JSON.parse(sessionStorage.getItem("province"));

    const handleProvinceChange = (event) => {
        setSelectedProvince(event.target.value);
    }

    useEffect(() => {
        const textAreaAddress = document.getElementById('caseDescription');
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
        const textAreaAddress = document.getElementById('caseDescription');
        const currentLength = textAreaAddress.value.length;
        const remainingChars = textAreaAddress.maxLength - currentLength;
        setCharCount(remainingChars);
    }

    const receiveDataPriority = (newData) => {
        setPriorityData((prevData) => ({...prevData, newData}));
    }

    const handleAddressValue = (newData) => {
        setAddressData(newData);
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const handleCaseDescChange = (e) => {
        setCaseDescription(e.target.value);
    }

    return (
        <div className="row overflow-hidden m-0" style={{height: "79vh", width: "83vw"}}>
            <div className="row">
                <div className="col d-flex justify-content-evenly">
                    <button className="btn btn-outline-success" onClick={sendForm}>Yayınla
                    </button>
                    <button className="btn btn-outline-success" onClick={attributeCall} disabled={true}>Çağrıyı
                        İlişkilendir (F8)
                    </button>
                    <button className="btn btn-outline-danger" id={"endCall"} onClick={endCall}>İptal Et(F9)
                    </button>
                </div>
            </div>
            <div className="row p-2 ps-4">
                <div className="col-9 m-0">
                    <div className="row text-center user-select-none" style={{height: "100px"}}>
                        <div className="col-3">
                            <div className="row bg-info justify-content-center rounded">Vaka No</div>
                            <div
                                className="row justify-content-center bg-info-subtle h-50 fs-5 align-items-center rounded">{data.id}
                            </div>
                        </div>
                        <div className="col-3 mx-1">
                            <div className="row bg-info justify-content-center rounded">Saat</div>
                            <div
                                className="row justify-content-center bg-info-subtle h-50 fs-5 align-items-center rounded">{formatDateTime(data.createdAt).time}
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row bg-info justify-content-center rounded">Tarih</div>
                            <div
                                className="row justify-content-center bg-info-subtle h-50 fs-5 align-items-center rounded">{formatDateTime(data.createdAt).date}</div>
                        </div>
                        <Priority sendData={receiveDataPriority}/>
                    </div>
                    <div className="row">
                        <CallLogs isSmall={false}/>
                    </div>
                    <div className="row ps-3"
                         style={{height: "75px", border: "1px solid #CFF4FC", borderRadius: "5px"}}>
                        <div className="row bg-info-subtle">
                            <div className="col-4">Çağrının Konum Bilgileri</div>
                            <div className="col-6"></div>
                            <div className="col-2">
                                <div className="btn btn-success" style={{fontSize: "9px"}}>Bilgileri Aktar</div>
                            </div>
                        </div>
                        <div className="row h-75"></div>
                    </div>
                    <div className="row" style={{height: "105vh"}}>
                        <div className="col bg-info-subtle m-0 p-0" style={{height: "330px", position: "relative"}}>
                            <div className="row m-0 p-0 text-center" style={{height: "30px"}}><b>Vaka Tanımı</b></div>
                            <div className="row m-0 overflow-y-auto p-0 m-0 h-100">
                                <input
                                    className="form-control sticky-top bg-white"
                                    placeholder="Arama..."
                                    style={{height: "42px"}}
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <table className="table h-100">
                                    <tbody>
                                    {filteredList.map((item, key) => (
                                        <tr key={key + 1} className={"align-items-start"}>
                                            <td>
                                                <AccordionRow
                                                    key={key + 1}
                                                    index={key + 1}
                                                    content={item}
                                                    incidentsList={incidentsList}
                                                    onHeaderSelect={handleHeaderSelect}
                                                    onSubItemSelect={handleSubItemSelect}
                                                    selectedHeaders={selectedHeaders}
                                                    selectedSubItems={selectedSubItems[item] || []}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col" style={{height: "450px", position: "relative"}}>
                            <div className="row user-select-none text-center"
                                 style={{height: "250px", overflowY: "auto", padding: "0 0 120px 0"}}>
                                <table>
                                    <thead className="sticky-top bg-white">
                                    <tr>
                                        <th className={"col-6"}>Üst Başlık</th>
                                        <th className={"col-6"}>Alt Başlıklar</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {selectedHeaders.map(header => (
                                        <tr key={header}>
                                            <td>{header}</td>
                                            <td className={"text-start"}>
                                                {selectedSubItems[header] && selectedSubItems[header].length > 0
                                                    ? selectedSubItems[header].join(', ')
                                                    : '—'}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row bg-danger-subtle justify-content-center pb-3"
                                 style={{position: "sticky", bottom: "0", zIndex: "10"}}>
                                <div className="row w-50">
                                    <input className="form-control mt-3" list="provinceDatalist"
                                           id="provinceDataInput"
                                           placeholder="İl Seçiniz..."
                                           value={selectedProvince}
                                           disabled={false}
                                           onChange={handleProvinceChange}/>
                                    <datalist id="provinceDatalist">
                                        {province && province.length > 0 && province.map((city, index) => (
                                            <option key={index} value={city}/>
                                        ))}
                                    </datalist>
                                </div>
                                <Department isSmall={false} onSelectionChange={handleDepartmentSelectionChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 h-25">
                    <input
                        className="form-control nu-format text-center fs-5"
                        style={{
                            height: "75px",
                            border: "5px double red",
                            borderRadius: "15px",
                        }}
                        placeholder="Arayan Numarayı Giriniz..."
                        id={"calledNumber"}
                        onChange={handlePhoneNumber}
                    />
                    <Address province={selectedProvince} addressData={handleAddressValue}
                             triggerUpdate={triggerUpdate}/>
                    <div className="row w-100 ps-3">
                        <div className="btn btn-danger" onClick={() => {
                            document.getElementById("addressDescription").value = ""
                            setTriggerUpdate(prevState => prevState + 1);
                        }}>Konum Detaylarını Temizle
                        </div>
                    </div>
                    <div className="row w-100 ps-3">
                        <textarea
                            className="form-control p-2 mt-1"
                            id="caseDescription"
                            placeholder={"Vaka Açıklaması"}
                            rows="6"
                            maxLength={1024}
                            style={{maxHeight: "200px"}}
                            onChange={handleCaseDescChange}
                        />
                        <span className={"text-end"} style={{fontSize: "10px"}}>{charCount + "/1024"}</span>
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                     tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" ref={modalRef}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">{message.title}</h1>
                            </div>
                            <div className="modal-body text-center">
                                {message.content}
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    data-bs-dismiss="modal" onClick={handleCloseModal}>Tamam
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}

EventDetails.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        createdAt: PropTypes.string.isRequired,
    }).isRequired,
    removeTab: PropTypes.func.isRequired
};

export default EventDetails;
