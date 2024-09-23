import {FaLocationArrow} from "react-icons/fa6";
import {FiEdit3} from "react-icons/fi";
import {TbHospital} from "react-icons/tb";
import {RxLapTimer} from "react-icons/rx";
import {useEffect, useState} from "react";
import {IoIosSave} from "react-icons/io";
import {RiDeleteBin5Line} from "react-icons/ri";

function HealthActive() {
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
        <div className="d-flex align-items-start w-100 h-100 overflow-hidden">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" id="v-pills-base-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-base" type="button" role="tab" aria-controls="v-pills-base"
                        aria-selected="true">Temel İşlemler
                </button>
                <button className="nav-link" id="v-pills-department-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-department" type="button" role="tab" aria-controls="v-pills-department"
                        aria-selected="false">Kuruma Özgü İşlemler
                </button>
                <button className="nav-link" id="v-pills-hospital-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-hospital" type="button" role="tab" aria-controls="v-pills-hospital"
                        aria-selected="false">Hastane İşlemleri
                </button>
            </div>
            <div className="tab-content h-100" style={{width: "200vh"}} id="v-pills-tabContent">
                <div className="tab-pane fade show active w-100 h-100" id="v-pills-base" role="tabpanel"
                     aria-labelledby="v-pills-base-tab" tabIndex="0">
                    <div className="row w-100 h-100">
                        <div className="col-3">
                            <div className="row">
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="crewSearch"
                                           placeholder="Ekip Ara"/>
                                </div>
                            </div>
                            <div className="row h-75">
                                <table className="table h-100">
                                    <tbody>
                                    <tr className={"align-items-start"}>
                                        {/*{filteredList.map((item, key) => (*/}
                                        {/*    <AccordionRow*/}
                                        {/*        key={key + 1}*/}
                                        {/*        index={key + 1}*/}
                                        {/*        content={item}*/}
                                        {/*        incidentsList={incidentsList}*/}
                                        {/*        onHeaderSelect={handleHeaderSelect}*/}
                                        {/*        onSubItemSelect={handleSubItemSelect}*/}
                                        {/*        selectedHeaders={selectedHeaders}*/}
                                        {/*        selectedSubItems={selectedSubItems[item] || []}*/}
                                        {/*    />*/}
                                        {/*))}*/}
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-4 text-center">Atanmış Ekipler
                            <table>
                                <thead>
                                <tr>
                                    <th className="col-5">Ekip</th>
                                    <th className="col-1">Atandı</th>
                                    <th className="col-1"></th>
                                    <th className="col-1"></th>
                                    <th className="col-1"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>6215 Çankaya 21 Nolu</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><FaLocationArrow size={"24px"} style={{cursor: "pointer"}}/></td>
                                    <td><FiEdit3 size={"24px"} style={{cursor: "pointer"}}/></td>
                                    <td><TbHospital size={"24px"} style={{cursor: "pointer"}}/></td>
                                </tr>
                                <tr>
                                    <td>6215 Çankaya 21 Nolu</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><FaLocationArrow size={"24px"} style={{cursor: "pointer"}}/></td>
                                    <td><FiEdit3 size={"24px"} style={{cursor: "pointer"}}/></td>
                                    <td><TbHospital size={"24px"} style={{cursor: "pointer"}}/></td>
                                </tr>
                                <tr>
                                    <td>6215 Çankaya 21 Nolu</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><FaLocationArrow size={"24px"} style={{cursor: "pointer"}}/></td>
                                    <td><FiEdit3 size={"24px"} style={{cursor: "pointer"}}/></td>
                                    <td><TbHospital size={"24px"} style={{cursor: "pointer"}}/></td>
                                </tr>
                                <tr>
                                    <td>6215 Çankaya 21 Nolu</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><FaLocationArrow size={"24px"} style={{cursor: "pointer"}}/></td>
                                    <td><FiEdit3 size={"24px"} style={{cursor: "pointer"}}/></td>
                                    <td><TbHospital size={"24px"} style={{cursor: "pointer"}}/></td>
                                </tr>
                                <tr>
                                    <td>6215 Çankaya 21 Nolu</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><FaLocationArrow size={"24px"} style={{cursor: "pointer"}}/></td>
                                    <td><FiEdit3 size={"24px"} style={{cursor: "pointer"}}/></td>
                                    <td><TbHospital size={"24px"} style={{cursor: "pointer"}}/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-5 align-items-center  overflow-y-auto"
                             style={{fontSize: "12px", height: "97%"}}>Ekip Kayıt Bilgileri
                            <div className="col-12 h-100">
                                <div className="row">
                                    <div className="col-4">Ekip Adı</div>
                                    <div className="col-3">213</div>
                                    <div className="col-5">
                                        <button className="btn btn-outline-danger px-2 m-0 w-100" type="button"
                                                id="saveTime" style={{height: "32px", fontSize: "13px"}}><IoIosSave
                                            size={"24px"}/>Zamanları Kaydet
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Araç Plakası</div>
                                    <div className="col-8">06ABC123</div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Ekip Atama Zamanı:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control"
                                                   aria-describedby="deploymentIncidentBtn" id={"deploymentIncident"}
                                                   style={{height: "32px"}} readOnly/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="deploymentIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("deploymentIncident")}><RxLapTimer
                                                size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="deploymentIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("deploymentIncident")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ps-5 user-select-none">
                                    <div className="form-check col-4">
                                        <input className="form-check-input" type="radio" name="regionType"
                                               id="inRegion"/>
                                        <label className="form-check-label" htmlFor="inRegion">
                                            Bölge İçi
                                        </label>
                                    </div>
                                    <div className="form-check col-4">
                                        <input className="form-check-input" type="radio" name="regionType"
                                               id="outRegion"/>
                                        <label className="form-check-label" htmlFor="outRegion">
                                            Bölge Dışı
                                        </label>
                                    </div>
                                    <div className="form-check col-4">
                                        <input className="form-check-input" type="radio" name="regionType"
                                               id="outProvince"/>
                                        <label className="form-check-label" htmlFor="outProvince">
                                            İl Dışı
                                        </label>
                                    </div>
                                </div>
                                <div className="row align-items-center text-center"
                                     style={{fontSize: "10px"}}>
                                    <div className="col-2">Çıkış km:</div>
                                    <div className="col-3">
                                        <input type="text" className="form-control" id="exitKm"
                                               style={{fontSize: "10px"}} onChange={(e) => setExitKm(e.target.value)}/>
                                    </div>
                                    <div className="col-2">Dönüş km:</div>
                                    <div className="col-3">
                                        <input type="text" className="form-control" id="entryKm"
                                               style={{fontSize: "10px"}} onChange={(e) => setEntryKm(e.target.value)}/>
                                    </div>
                                    <div className="col-2">= <span style={{
                                        borderColor: "red",
                                        borderStyle: "dashed",
                                        borderWidth: "0 0 0.5px 0"
                                    }}>{diffKm}</span> km
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Vakaya Çıkış:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="releaseIncidentBtn" id={"releaseIncident"}
                                                   style={{height: "32px"}} readOnly/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="releaseIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("releaseIncident")}><RxLapTimer
                                                size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="deploymentIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("releaseIncident")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Olay Yerine Varış:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="arrivalSceneBtn" id={"arrivalScene"}
                                                   style={{height: "32px"}} readOnly/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="arrivalSceneBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("arrivalScene")}><RxLapTimer
                                                size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="deploymentIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("arrivalScene")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Vakaya Varış:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="arrivalIncidentBtn" id={"arrivalIncident"}
                                                   style={{height: "32px"}} readOnly/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="arrivalIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("arrivalIncident")}><RxLapTimer
                                                size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="deploymentIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("arrivalIncident")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Olay Yerinden Ayrılış:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="departureSceneBtn" id={"departureScene"}
                                                   style={{height: "32px"}} readOnly/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="departureSceneBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("departureScene")}><RxLapTimer
                                                size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="deploymentIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("departureScene")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Hastaneye Varış:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="arrivalHospitalBtn" id={"arrivalHospital"}
                                                   style={{height: "32px"}} readOnly/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="arrivalHospitalBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("arrivalHospital")}><RxLapTimer
                                                size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="deploymentIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("arrivalHospital")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Hastaneden Ayrılış:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="departureHospitalBtn" id={"departureHospital"}
                                                   style={{height: "32px"}} readOnly/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="departureHospitalBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("departureHospital")}><RxLapTimer
                                                size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="deploymentIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("departureHospital")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">İstasyona Varış:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="arrivalStationBtn" id={"arrivalStation"}
                                                   style={{height: "32px"}} readOnly/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="arrivalStationBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("arrivalStation")}><RxLapTimer
                                                size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="deploymentIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("arrivalStation")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-department" role="tabpanel"
                 aria-labelledby="v-pills-department-tab" tabIndex="0">Kuruma Özgü İşlemler...
            </div>
            <div className="tab-pane fade" id="v-pills-hospital" role="tabpanel"
                 aria-labelledby="v-pills-hospital-tab" tabIndex="0">Hastane İşlemleri...
            </div>
        </div>
    )
}

export default HealthActive;