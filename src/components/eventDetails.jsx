import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Address from "./address.jsx";
import {MdLocalPolice, MdOutlineFireTruck} from "react-icons/md";
import {RiPoliceBadgeLine} from "react-icons/ri";
import {LiaAmbulanceSolid} from "react-icons/lia";
import {GiCircleForest} from "react-icons/gi";
import {TbRadioactiveFilled} from "react-icons/tb";
import NewEventService from "../services/newEventService.js";
import {FcHighPriority} from "react-icons/fc";

const MASKS = {
    Emniyet: 1,
    Sağlık: 2,
    Jandarma: 4,
    İtfaiye: 8,
    Orman: 16,
    Afad: 32
};

function EventDetails({data, removeTab}) {
    const [selectedOption, setSelectedOption] = useState('');
    const [filter, setFilter] = useState('');
    const [selectedMask, setSelectedMask] = useState(0);
    const [message, setMessage]=useState({title: "",content:""});
    const eventService = new NewEventService();
    const caseDefinitions = eventService.caseDefinition();
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.addEventListener('keydown', handleF9Press);
        return () => {
            window.removeEventListener('keydown', handleF9Press);
        };
    }, []);

    useEffect(() => {
        if (showModal) {
            const modalInstance = new window.bootstrap.Modal(modalRef.current);
            modalInstance.show();

            const handleKeyDown = (event) => {
                if (event.code === 'Space') {
                    event.preventDefault();
                    closeButtonRef.current.click();
                }
            };

            window.addEventListener('keydown', handleKeyDown);

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [showModal]);

    const sendForm = () => {
        setShowModal(true);
        if (getSelectedLabels().length > 0) {
            setMessage({title: "Başarılı",content:`Gönderildi: ${getSelectedLabels()}`
        });
            eventService.sendData("data");
            removeTab(selectedOption);
        } else {
            setMessage({title: "Hata",content:"Lütfen Kurum Seçiniz"});
    }}

    const attributeCall = () => {
        setShowModal(true);
        setMessage({title: "Başarılı",content:"İlişkilendirme Yapıldı"})
    }
    const endCall = () => {
        console.log("End call");
        removeTab();
    }

    const handleCheckboxChange = (event) => {
        const {id, checked} = event.target;
        const mask = MASKS[id];

        if (checked) {
            setSelectedMask(prev => prev | mask);
        } else {
            setSelectedMask(prev => prev & ~mask);
        }
    };
    const getSelectedLabels = () => {
        return Object.keys(MASKS).filter(key => (selectedMask & MASKS[key]) !== 0).join(', ');
    };
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
    const filteredDefinitions = Object.entries(caseDefinitions)
        .filter(([key, value]) => value.toLowerCase().includes(filter.toLowerCase()));

    const handleCloseModal =()=>{
        setShowModal(false);
    }
    return (
        <div className="row">
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
                        <div className="col-3">
                            <div className="row bg-info justify-content-center rounded">Saat</div>
                            <div
                                className="row justify-content-center bg-info-subtle h-50 fs-5 align-items-center rounded">{data.createTime}
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row bg-info justify-content-center">Tarih</div>
                            <div
                                className="row justify-content-center bg-info-subtle h-50 fs-5 align-items-center rounded">{data.createDate}</div>
                        </div>
                        <div className="col-3">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch"
                                       id="flexSwitchCheckDefault"/>
                                <label className="form-check-label user-select-none"
                                       htmlFor="flexSwitchCheckDefault">Öncelikli Vaka mı?</label>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{height: "40px"}}>
                        <div className="col-3 text-center align-content-center">Haber Verme Şekli:</div>
                        <div className="col-5">
                            <select className="form-select" style={{fontSize: "10px"}}
                                    aria-label="Default select example">
                                <option selected value="1">Telefon</option>
                                <option value="2">SMS</option>
                                <option value="3">Acil</option>
                            </select>
                        </div>
                    </div>
                    <div className="row overflow-x-hidden overflow-y-auto"
                         style={{
                             fontSize: "12px",
                             height: "150px",
                             border: "1px solid #CFF4FC",
                             borderRadius: "5px"
                         }}>
                        <table>
                            <thead>
                            <tr className="text-center">
                                <th scope="col"
                                    style={{
                                        position: "sticky",
                                        top: "0",
                                        backgroundColor: "white",
                                        zIndex: "1"
                                    }}>Çağrı ID
                                </th>
                                <th scope="col"
                                    style={{
                                        position: "sticky",
                                        top: "0",
                                        backgroundColor: "white",
                                        zIndex: "1"
                                    }}>Numara
                                </th>
                                <th scope="col"
                                    style={{
                                        position: "sticky",
                                        top: "0",
                                        backgroundColor: "white",
                                        zIndex: "1"
                                    }}>Çağrı Zamanı
                                </th>
                                <th scope="col" style={{
                                    position: "sticky",
                                    top: "0",
                                    backgroundColor: "white",
                                    zIndex: "1"
                                }}>Enlem/Boylam
                                </th>
                                <th scope="col"
                                    style={{
                                        position: "sticky",
                                        top: "0",
                                        backgroundColor: "white",
                                        zIndex: "1"
                                    }}>Çağrı Konumu
                                </th>
                                <th scope="col" style={{
                                    position: "sticky",
                                    top: "0",
                                    backgroundColor: "white",
                                    zIndex: "1"
                                }}>Çağrıyı Kaldır
                                </th>
                            </tr>
                            </thead>
                            <tbody className={"text-center"}>
                            {data.callHistory.map((call, index) => (
                                <tr key={index}>
                                    <td>{call.callId}</td>
                                    <td>{call.number}</td>
                                    <td>{new Date(call.callTime).toLocaleString()}</td>
                                    <td>{call["lat-lot"]}</td>
                                    <td>{call["call-location"]}</td>
                                    <td className={"d-flex justify-content-center"}>
                                        <div className="form-check">
                                            <input className="form-check-input " type="checkbox"
                                                   id={`checkbox-${index}`} defaultChecked={call["call-attribution"]}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
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
                    <div className="row">
                        <div className="col bg-info-subtle m-0 p-0" style={{height: "56vh", position: "relative"}}>
                            <div className="row m-0 p-0" style={{height: "30px"}}><b>Vaka Tanımı</b></div>
                            <div className="row m-0 p-0 h-75 overflow-y-auto">
                                <input
                                    list="datalistOptions"
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                    className="form-control"
                                    placeholder="Arama..."
                                    style={{height: "42px"}}
                                />
                                <datalist id="datalistOptions">
                                    {Object.entries(caseDefinitions).map(([key, value]) => (
                                        <option key={key} value={value}/>
                                    ))}
                                </datalist>

                                <table className="table">
                                    <tbody>
                                    {filteredDefinitions.map(([key, value]) => (
                                        <tr key={key}>
                                            <th>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value={key}
                                                           id={`checkbox-${key}`}/>
                                                    <label className="form-check-label" htmlFor={`checkbox-${key}`}>
                                                        {value}
                                                    </label>
                                                </div>
                                            </th>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col" style={{height: "450px", position: "relative"}}>
                            <div className="row" style={{height: "250px"}}>Vaka Listesi</div>
                            <div className="row bg-danger-subtle justify-content-center pb-3"
                                 style={{position: "sticky", bottom: "0", zIndex: "10"}}>
                                <div className="row w-50">
                                    <input className="form-control mt-3" list="datalistOptions" id="exampleDataList"
                                           placeholder="İl Seçiniz..."/>
                                    <datalist id="datalistOptions">
                                        <option value="San Francisco"/>
                                        <option value="New York"/>
                                        <option value="Seattle"/>
                                        <option value="Los Angeles"/>
                                        <option value="Chicago"/>
                                    </datalist>
                                </div>
                                <div className="row h-100 fs-5 flex-wrap">
                                    <div className="row h-100 fs-5 flex-wrap">
                                        <input
                                            type="checkbox"
                                            className="btn-check"
                                            id="Emniyet"
                                            autoComplete="off"
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className="btn col-3 my-3 btn-danger fs-5" htmlFor="Emniyet">
                                            <RiPoliceBadgeLine size={"14px"}/> Emniyet
                                        </label>

                                        <input
                                            type="checkbox"
                                            className="btn-check"
                                            id="Sağlık"
                                            autoComplete="off"
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className="btn col-3 my-3 btn-danger fs-5" htmlFor="Sağlık">
                                            <LiaAmbulanceSolid size={"14px"}/> Sağlık
                                        </label>

                                        <input
                                            type="checkbox"
                                            className="btn-check"
                                            id="Jandarma"
                                            autoComplete="off"
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className="btn col-3 my-3 btn-danger fs-5" htmlFor="Jandarma">
                                            <MdLocalPolice size={"14px"}/> Jandarma
                                        </label>

                                        <input
                                            type="checkbox"
                                            className="btn-check"
                                            id="İtfaiye"
                                            autoComplete="off"
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className="btn col-3 my-3 btn-danger fs-5" htmlFor="İtfaiye">
                                            <MdOutlineFireTruck size={"14px"}/> İtfaiye
                                        </label>

                                        <input
                                            type="checkbox"
                                            className="btn-check"
                                            id="Orman"
                                            autoComplete="off"
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className="btn col-3 my-3 btn-danger fs-5" htmlFor="Orman">
                                            <GiCircleForest size={"14px"}/> Orman
                                        </label>

                                        <input
                                            type="checkbox"
                                            className="btn-check"
                                            id="Afad"
                                            autoComplete="off"
                                            onChange={handleCheckboxChange}
                                        />
                                        <label className="btn col-3 my-3 btn-danger fs-5" htmlFor="Afad">
                                            <TbRadioactiveFilled size={"14px"}/> Afad
                                        </label>

                                        <div className="col-3 mb-3"><i>Kurum Ekleyiniz...</i></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 ps-4">
                    <Address/>
                </div>
            </div>

            <div className="modal fade" ref={modalRef} id="staticEventModal" data-bs-backdrop="static"
                 data-bs-keyboard="false"
                 tabIndex="-1" aria-labelledby="eventModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 user-select-none" id="eventModal">{message.title}</h1>
                        </div>
                        <div className="modal-body fs-5 text-center user-select-none"
                             style={{fontWeight: "600"}}>

                            {message.title === "Hata" ? (
                                <><FcHighPriority size={"32px"} /> {message.content}</>
                            ) : (
                                <> {message.content}</>
                            )}

                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={closeButtonRef} className="btn btn-outline-success"
                                    data-bs-dismiss="modal"
                                    onClick={
                                        () => handleCloseModal()
                                    }
                            >
                                Tamam
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
        createId: PropTypes.string.isRequired,
        createTime: PropTypes.string.isRequired,
        createDate: PropTypes.string.isRequired,
        callHistory: PropTypes.arrayOf(PropTypes.shape({
            callId: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            callTime: PropTypes.string.isRequired,
            "lat-lot": PropTypes.string.isRequired,
            "call-location": PropTypes.string.isRequired,
            "call-attribution": PropTypes.bool.isRequired
        })).isRequired
    }).isRequired,
    removeTab: PropTypes.func.isRequired
};

export default EventDetails;
