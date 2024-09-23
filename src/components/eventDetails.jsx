import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import NewEventService from "../services/newEventService.js";
import CallLogs from "./callLogs.jsx";
import AccordionRow from "./accordionRow.jsx";
import Address from "./address.jsx";
import Priority from "./priority.jsx";
import Department from "./department.jsx";

function EventDetails({data, removeTab}) {
    const [selectedOption, setSelectedOption] = useState('');
    const [filter, setFilter] = useState('');
    const [message, setMessage] = useState({title: "", content: ""});
    const eventService = new NewEventService();
    const [caseDefinitions, setCaseDefinitions] = useState([]);
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
    const [selectOption, setSelectOption] = useState("1");
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [city, setCity] = useState("");
    const [incidents, setIncidents] = useState();
    const [incidentsList, setIncidentsList] = useState([]);
    const [keyList, setKeyList] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [triggerUpdate, setTriggerUpdate] = useState(false);
    const [selectedHeaders, setSelectedHeaders] = useState([]);
    const [selectedSubItems, setSelectedSubItems] = useState({});
    const [selectedDepartments, setSelectedDepartments] = useState('');

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
                return await NewEventService.getAddress.getProvince();
            } catch (error) {
                console.error(error);
                throw error;
            }
        };
        fetchData()
            .then(response => {
                setProvince(response.data);
                setCity("ANKARA");
            })
            .catch(error => {
                console.error("Veri çekilirken hata oluştu:", error);
            });

        const fetchIncidents = async () => {
            try {
                return await NewEventService.getIncidents.getData();
            } catch (e) {
                console.error(e)
            }
        }
        fetchIncidents().then(res => setIncidents(res)).catch((error) => console.error(error));


    }, []);

    useEffect(() => {
        if (city.trim().length > 0) {
            const fetchDistricts = async () => {
                try {
                    return await NewEventService.getAddress.getDistrict(city);
                } catch (error) {
                    console.error(error);
                    throw error;
                }
            }
            fetchDistricts()
                .then(response => setDistrict(response.data))
                .catch(error => console.error("Veri çekilirken hata oluştu:(District)", error));
        }
    }, [city]);

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

    // useEffect(() => {
    //         const fetchNeighborhood = async () => {
    //             console.log(district);
    //             if (arrayOf(district).length > 0) {
    //                 try {
    //                     return await NewEventService.getAddress.getNeighborhoods(province, district);
    //                 } catch (error) {
    //                     console.error(error);
    //                     throw error;
    //                 }
    //             }
    //         }
    //     fetchNeighborhood()
    //         .then(response => setNeighborhoods(response.data))
    //         .catch(error => console.error("Veri çekilirken hata oluştu:(Neigh)", error));
    // }, [district]);

    const handleDepartmentSelectionChange = (selected) => {
        setSelectedDepartments(selected);
    };

    const sendForm = () => {
        if (selectedHeaders.length > 0 && selectedDepartments.length > 0) {
            eventService.sendData("data");
            removeTab();
        } else {
            let errorMessage;
            if (selectedHeaders.length < 1 && selectedDepartments.length < 1) {
                errorMessage = `Lütfen Kurum ve Vaka Tanımı Seçiniz!..`;
            } else if (selectedHeaders.length < 1) {
                errorMessage = "Lütfen Vaka Seçiniz";
            } else if (selectedDepartments.length < 1) {
                errorMessage = "Lütfen Kurum Seçiniz";
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
        console.log("End call");
        removeTab();
    }

    const handleF9Press = (event) => {
        if (event.key === 'F9') {
            const endCallButton = document.getElementById('endCall');
            if (endCallButton) {
                endCallButton.click();
            }
        }
    };

    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        setFilter(value);
    };
// const filteredDefinitions = Object.entries(caseDefinitions)
//     .filter(([key, value]) => value.toLowerCase().includes(filter.toLowerCase()));

    const handleCloseModal = () => {
        setShowModal(false);
        setMessage({title: "", content: ""});
    }

    const handleCityChoose = (event) => {
        setCity(event.target.value);
    }

    useEffect(() => {
        if (incidents) {
            Object.values(incidents).forEach(value => {
                if (Array.isArray(value)) {
                    // setIncidentsList(JSON.stringify(value))
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

    return (
        <div className="row overflow-hidden m-0" style={{height: "79vh", width: "83vw"}}>
            <div className="row">
                <div className="col d-flex justify-content-evenly">
                    <button className="btn btn-outline-success" onClick={sendForm}>Yayınla
                    </button>
                    <button className="btn btn-outline-success" onClick={attributeCall}>Çağrıyı İlişkilendir (F8)
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
                                className="row justify-content-center bg-info-subtle h-50 fs-5 align-items-center rounded">{data.createId}
                            </div>
                        </div>
                        <div className="col-3 mx-1">
                            <div className="row bg-info justify-content-center rounded">Saat</div>
                            <div
                                className="row justify-content-center bg-info-subtle h-50 fs-5 align-items-center rounded">{data.createTime}
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row bg-info justify-content-center rounded">Tarih</div>
                            <div
                                className="row justify-content-center bg-info-subtle h-50 fs-5 align-items-center rounded">{data.createDate}</div>
                        </div>
                        <Priority/>
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
                                           defaultValue={city}/>
                                    <datalist id="provinceDatalist">
                                        {province.length > 0 && province.map((city, index) => (
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
                    <Address districts={district} triggerUpdate={triggerUpdate}/>
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
                        />
                        <span className={"text-end"} style={{fontSize: "10px"}}>{1024 + "/1024"}</span>
                    </div>
                </div>
            </div>

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
            </div>
        </div>
    );
}

EventDetails.propTypes = {
    data: PropTypes.shape({
        createId: PropTypes.number.isRequired,
        createTime: PropTypes.string.isRequired,
        createDate: PropTypes.string.isRequired,
        callHistory: PropTypes.arrayOf(PropTypes.shape({
            callId: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            callTime: PropTypes.number.isRequired,
            "lat-lot": PropTypes.string.isRequired,
            "call-location": PropTypes.string.isRequired,
            "call-attribution": PropTypes.bool.isRequired
        })).isRequired
    }).isRequired,
    removeTab: PropTypes.func.isRequired
};

export default EventDetails;
