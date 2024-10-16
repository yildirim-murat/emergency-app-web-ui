import {FaEdit} from "react-icons/fa";
import {
    MdLocalPolice,
    MdOutlineCancelPresentation,
    MdOutlineExitToApp,
    MdOutlineFireTruck,
    MdOutlineSave
} from "react-icons/md";
import {VscFolderActive} from "react-icons/vsc";
import {RiDeleteBin5Line, RiMapPinTimeLine, RiPoliceBadgeLine} from "react-icons/ri";
import Address from "../address.jsx";
import CallLogs from "../callLogs.jsx";
import Department from "../department.jsx";
import DepartmentOperations from "./DepartmentOperations.jsx";
import {RxLapTimer} from "react-icons/rx";
import {LiaAmbulanceSolid} from "react-icons/lia";
import {GiCircleForest} from "react-icons/gi";
import {TbRadioactiveFilled} from "react-icons/tb";
import {useEffect, useState} from "react";

function ForestryEvent({data, onSelectChange}) {
    const [exitKm, setExitKm] = useState(0);
    const [entryKm, setEntryKm] = useState(0);
    const [diffKm, setDiffKm] = useState(0);

    useEffect(() => {
            let difference = entryKm - exitKm
            if (difference < 0) {
                difference = 0;
            }
            setDiffKm(difference)
        }, [exitKm, entryKm]
    )

    const handleButtonClick = (inputId) => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        document.getElementById(inputId).value = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    };

    const handleRemoveInput = (inputId) => {
        document.getElementById(inputId).value = '';
    }
    return (
        <div>
            <div className="row text-center align-items-center my-2">
                <div className="col-1 btn-outline-info btn mx-1"><FaEdit size={"22px"}/> Değiştir</div>
                <div className="col-1 btn-outline-secondary btn mx-1"><MdOutlineCancelPresentation
                    size={"22px"}/> Vazgeç
                </div>
                <div className="col-1 btn-outline-primary btn mx-1"><VscFolderActive size={"22px"}/> Etkinleştir</div>
                <div className="col-1 btn-outline-success btn mx-1"><MdOutlineSave size={"24px"}/> Kaydet</div>
                <div className="col-2 btn-outline-primary btn mx-1"><MdOutlineExitToApp size={"22px"}/> Vakadan Çık
                </div>
                <div className="col-4 mx-1">
                    <select className="form-select">
                        <option selected>Seçiniz</option>
                        <option value="1">Faaliyet Bloğu</option>
                        <option value="2">Ses Kayıtları</option>
                    </select>
                </div>
            </div>
            <div className="row bg-primary-subtle" style={{height: "40vh"}}>
                <div className="col-3 h-100 user-select-none" style={{fontSize: "12px"}}>
                    <div className="row text-center" style={{border: "1px solid #000000", borderRadius: "8px"}}>
                        <div className="col" style={{borderRight: "1px solid #000000"}}>Vaka Nu</div>
                        <div className="col">Tarih</div>
                    </div>
                    <div className="row ps-3 my-2">
                        ÇA Vaka Tanımı : ***
                    </div>
                    <div className="row ps-3 mb-2">
                        Bildirim Türü : ***
                    </div>
                    <div className="row">
                        <div className="row ms-1">Kurum Görevlendirme Zamanı:</div>
                        <div className="row">
                            <div className="input-group my-2">
                                <input type="text" className="form-control" placeholder="01.01.2025 12:34:56"
                                       aria-label="date time" aria-describedby="button-addon2" disabled={true}/>
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                                        disabled={true}><RiMapPinTimeLine size={"20px"}/>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Öncelikli
                                    </label>
                                </div>
                            </div>
                            <div className="col-3 bg-danger-subtle" style={{borderRadius:"10px 0 0 10px"}}>
                                <input className="form-check-input"  type="radio" name="region"
                                       id="radioRegionUrban"/>
                                <label className="form-check-label" htmlFor="radioRegionUrban">
                                    Kentsel
                                </label>
                            </div>
                            <div className="col-3 bg-danger-subtle" style={{borderRadius:"0 10px 10px 0"}}>
                                <input className="form-check-input" type="radio" name="region"
                                       id="radioRegionRural"/>
                                <label className="form-check-label" htmlFor="radioRegionRural">
                                    Kırsal
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">Bildirim Türü:</div>
                            <div className="col-3 bg-danger-subtle" style={{borderRadius:"10px 0 0 10px"}}>
                                <input className="form-check-input" type="radio" name="notification"
                                       id="radioRequestInfo"/>
                                <label className="form-check-label" htmlFor="radioRequestInfo">
                                    Bilgi Talebi
                                </label>
                            </div>
                            <div className="col-3 bg-danger-subtle">
                                <input className="form-check-input" type="radio" name="notification"
                                       id="radioUnfounded"/>
                                <label className="form-check-label" htmlFor="radioUnfounded">
                                    Asılsız
                                </label>
                            </div>
                            <div className="col-3 bg-danger-subtle" style={{borderRadius:"0 10px 10px 0"}}>
                                <input className="form-check-input" type="radio" name="notification"
                                       id="radioFounded"/>
                                <label className="form-check-label" htmlFor="radioFounded">
                                    Asıllı
                                </label>
                            </div>
                        </div>
                        <div className="row ms-2">Olay Türü</div>
                        <div className="row">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Arama..." aria-label="Username"
                                       aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                                          style={{maxHeight: "100px"}}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 ps-4 user-select-none" style={{fontSize: "10px"}}>
                    <div className="row">
                        <div className="row ps-4">Tüm Vaka Açıklamaları</div>
                        <div className="row">
                            <div className="mb-1">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={12}
                                          readOnly={true}
                                          style={{maxHeight: "240px", overflowY: "auto", fontSize: "12px"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row ps-4">Orman Kurum Açıklaması</div>
                        <div className="row">
                            <div className="mb-1">
                                <textarea className="form-control" id="exampleFormControlTextarea2" rows={4}
                                          readOnly={false}
                                          style={{maxHeight: "100px", overflowY: "auto", fontSize: "12px"}}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 h-100 p-0 m-0">
                    <Address districts={data}/>
                </div>
                <div className="col-2 bg-white h-100 p-0 m-0" style={{overflow: "hidden"}}><CallLogs isSmall={true}/>
                </div>
                <div className="col-2 user-select-none h-100 p-0 m-0" style={{fontSize: "10px"}}>
                    <div className="row h-25 p-0 m-0">
                        <div className="d-flex h-50 p-0 mt-2 w-100 flex-wrap justify-content-center" >
                            <input
                                type="checkbox"
                                className="btn-check"
                                id="Emniyet"
                                autoComplete="off"
                            />
                            <label className="btn btn-danger m-0 p-0 w-25 text-start align-content-center" htmlFor="Emniyet"
                                   style={{height: '60%',fontSize:"12px"}}>
                                <RiPoliceBadgeLine size={"14px"}/> Emniyet
                            </label>

                            <input
                                type="checkbox"
                                className="btn-check"
                                id="Sağlık"
                                autoComplete="off"
                                // onChange={handleCheckboxChange}
                            />
                            <label className="btn btn-danger m-0 p-0 mx-1 w-25 text-start align-content-center" htmlFor="Sağlık"
                                   style={{height: '60%',fontSize:"12px"}}>
                                <LiaAmbulanceSolid size={"14px"}/> Sağlık
                            </label>

                            <input
                                type="checkbox"
                                className="btn-check col"
                                id="Jandarma"
                                autoComplete="off"
                                // onChange={handleCheckboxChange}
                            />
                            <label className="btn btn-danger m-0 p-0 w-25 text-start align-content-center" htmlFor="Jandarma"
                                   style={{height: '60%',fontSize:"11px"}}>
                                <MdLocalPolice size={"14px"}/> Jandarma
                            </label>

                            <input
                                type="checkbox"
                                className="btn-check col"
                                id="İtfaiye"
                                autoComplete="off"
                                // onChange={handleCheckboxChange}
                            />
                            <label className="btn btn-danger m-0 p-0 w-25 mt-1 text-start align-content-center" htmlFor="İtfaiye"
                                   style={{height: '60%',fontSize:"11px"}}>
                                <MdOutlineFireTruck size={"14px"}/> İtfaiye
                            </label>

                            <input
                                type="checkbox"
                                className="btn-check"
                                id="Orman"
                                autoComplete="off"
                                // onChange={handleCheckboxChange}
                            />
                            <label className="btn btn-danger m-0 p-0 w-25 m-1 text-start align-content-center" htmlFor="Orman"
                                   style={{height: '60%',fontSize:"11px"}}>
                                <GiCircleForest size={"14px"}/> Orman
                            </label>

                            <input
                                type="checkbox"
                                className="btn-check"
                                id="Afad"
                                autoComplete="off"
                                // onChange={handleCheckboxChange}
                            />
                            <label className="btn btn-danger m-0 mt-1 p-0 w-25 text-start align-content-center" htmlFor="Afad"
                                   style={{height: '60%',fontSize:"11px"}}>
                                <TbRadioactiveFilled size={"14px"}/> Afad
                            </label>
                        </div>
                    </div>
                    <br/>
                    <div className="row h-75 overflow-y-auto p-0 m-0" style={{fontSize: "10px"}}>
                        <div className="row align-items-center">
                            <div className="col-3">Başlama Zamanı:</div>
                            <div className="col-9 p-0 m-0">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control"
                                           aria-describedby="startTimeIncidentBtn" id={"startTimeIncident"}
                                           style={{height: "32px", fontSize:"8px"}}/>
                                    <button className="btn btn-outline-success py-0 m-0" type="button"
                                            id="startTimeIncidentBtn" style={{height: "32px"}}
                                            onClick={() => handleButtonClick("startTimeIncident")}><RxLapTimer
                                        size={"18px"}/>
                                    </button>
                                    <button className="btn btn-outline-danger py-0 m-0" type="button"
                                            id="startTimeIncidentRmvBtn" style={{height: "32px"}}
                                            onClick={() => handleRemoveInput("startTimeIncident")}>
                                        <RiDeleteBin5Line size={"18px"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-3">İlk Müdahale:</div>
                            <div className="col-9 p-0 m-0">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control"
                                           aria-describedby="firstResponseBtn" id={"firstResponse"}
                                           style={{height: "32px", fontSize: "8px"}}/>
                                    <button className="btn btn-outline-success py-0 m-0" type="button"
                                            id="firstResponseBtn" style={{height: "32px"}}
                                            onClick={() => handleButtonClick("firstResponse")}><RxLapTimer
                                        size={"18px"}/>
                                    </button>
                                    <button className="btn btn-outline-danger py-0 m-0" type="button"
                                            id="firstResponseRmvBtn" style={{height: "32px"}}
                                            onClick={() => handleRemoveInput("firstResponse")}>
                                        <RiDeleteBin5Line size={"18px"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-3">Kontrol Altına Alış:</div>
                            <div className="col-9 p-0 m-0">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control"
                                           aria-describedby="underControlTimeBtn" id={"underControlTime"}
                                           style={{height: "32px", fontSize: "8px"}}/>
                                    <button className="btn btn-outline-success py-0 m-0" type="button"
                                            id="underControlTimeBtn" style={{height: "32px"}}
                                            onClick={() => handleButtonClick("underControlTime")}><RxLapTimer
                                        size={"18px"}/>
                                    </button>
                                    <button className="btn btn-outline-danger py-0 m-0" type="button"
                                            id="underControlTimeRmvBtn" style={{height: "32px"}}
                                            onClick={() => handleRemoveInput("underControlTime")}>
                                        <RiDeleteBin5Line size={"18px"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-3">Söndürme Zamanı:</div>
                            <div className="col-9 p-0 m-0">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control"
                                           aria-describedby="extinguishingTimeBtn" id={"extinguishingTime"}
                                           style={{height: "32px", fontSize: "8px"}}/>
                                    <button className="btn btn-outline-success py-0 m-0" type="button"
                                            id="extinguishingTimeBtn" style={{height: "32px"}}
                                            onClick={() => handleButtonClick("extinguishingTime")}><RxLapTimer
                                        size={"18px"}/>
                                    </button>
                                    <button className="btn btn-outline-danger py-0 m-0" type="button"
                                            id="extinguishingTimeRmvBtn" style={{height: "32px"}}
                                            onClick={() => handleRemoveInput("extinguishingTime")}>
                                        <RiDeleteBin5Line size={"18px"}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row overflow-hidden p-0 m-0" style={{height: "38vh"}}>
                <DepartmentOperations name={"forestry"} />
            </div>
        </div>
    );
}

export default ForestryEvent;