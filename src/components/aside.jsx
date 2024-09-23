import Numpad from "./Numpad.jsx";
import ListOfNumber from "./listOfNumber.jsx";
import {RiPoliceBadgeLine} from "react-icons/ri";
import {LiaAmbulanceSolid} from "react-icons/lia";
import {GiCircleForest} from "react-icons/gi";
import {MdLocalPolice, MdOutlineFireTruck} from "react-icons/md";
import {TbRadioactiveFilled} from "react-icons/tb";
import {VscCallOutgoing} from "react-icons/vsc";
import PropTypes from "prop-types";

function Aside({calledNu, callHistory, missedCall, staffData, inCall, onCall, acceptData, voice}) {

    const call = () => {
        return calledNu !== null ? String(calledNu) : "0";
    }

    const publishDepartment = (event) => {
        voice(false)
        const label = event.currentTarget.querySelector('.transferredFrom').innerText;
        console.log(label + " birimine " + calledNu + " numaralı ihbarcıya ait vaka bilgileri gönderildi.");
        onCall(false);
        acceptData(true);
    }

    return (
        <div>
            <div className="row overflow-hidden user-select-none" style={{height: "300px"}}>
                <nav>
                    <div className="nav nav-tabs" style={{fontSize: "11px", width: "400px"}} id="nav-tab"
                         role="tablist">
                        <button className="nav-link active" id="nav-phone-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-phone" type="button" role="tab" aria-controls="nav-phone"
                                aria-selected="true">Softphone
                        </button>
                        <button className="nav-link" id="nav-call-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-call" type="button" role="tab" aria-controls="nav-call"
                                aria-selected="false">Kurum Kuyruğu
                        </button>
                        <button className="nav-link" id="nav-off-time-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-off-time" type="button" role="tab" aria-controls="nav-off-time"
                                aria-selected="false">Mola Takip Ekranı
                        </button>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-phone" role="tabpanel"
                         aria-labelledby="nav-phone-tab" tabIndex="0">
                        <Numpad callNu={call()} inCall={inCall} onCall={onCall} acceptData={acceptData} voice={voice}/>
                    </div>
                    <div className="tab-pane fade text-center" id="nav-call" role="tabpanel"
                         aria-labelledby="nav-call-tab"
                         tabIndex="0">
                        <div className="row" style={{height: "200px", overflowY: "auto"}}>
                            <table className="table">
                                <thead className="sticky-top bg-white">
                                <tr>
                                    <th className={"col-5"} scope="col">Arayan Numara</th>
                                    <th className={"col-7"} scope="col">Çağrı Zamanı</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>
                                <tr>
                                    <td>03121120000</td>
                                    <td>01.01.2025 12:34:56</td>
                                </tr>


                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="tab-pane fade text-center" id="nav-off-time" role="tabpanel"
                         aria-labelledby="nav-off-time-tab"
                         tabIndex="0">
                        <div className="row ps-4">Toplam Mola Süresi: 00:00:00</div>
                        <div className="row" style={{height: "200px", overflowY: "auto"}}>
                            <table className="table ">
                                <thead className="sticky-top bg-white">
                                <tr>
                                    <th className={"col-4"} scope="col">Giriş</th>
                                    <th className={"col-4"} scope="col">Çıkış</th>
                                    <th className={"col-4"} scope="col">Süre</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/*{logData.map((log, index) => (*/}
                                {/*    <tr key={index}>*/}
                                {/*        <td>{log.entry}</td>*/}
                                {/*        <td>{log.exit || '-'}</td>*/}
                                {/*        <td>{log.exit - log.entry}</td>*/}
                                {/*    </tr>*/}
                                {/*))}*/}
                                <tr>
                                    <td>12:34:56</td>
                                    <td>12:34:56</td>
                                    <td>00:00:00</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{fontSize: "12px", height: "26vh", overflow: "hidden"}}>
                <nav>
                    <div className="nav nav-tabs h-100" id="nav-called-tab" role="tablist">
                        <button className="nav-link active" id="nav-call-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-call" type="button" role="tab" aria-controls="nav-call"
                                aria-selected="true">Çağrılarım
                        </button>
                        <button className="nav-link" id="nav-missed-call-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-missed-call" type="button" role="tab"
                                aria-controls="nav-missed-call"
                                aria-selected="false">Cevapsız Çağrı
                        </button>
                    </div>
                </nav>
                <div className="tab-content h-100 pe-0 pb-4" id="nav-tabContent">
                    <div className="tab-pane fade show active overflow-y-auto h-100" id="nav-call" role="tabpanel"
                         aria-labelledby="nav-call-tab" tabIndex="0">
                        <ListOfNumber listOfCall={callHistory}/>
                    </div>
                    <div className="tab-pane fade overflow-auto h-100" id="nav-missed-call" role="tabpanel"
                         aria-labelledby="nav-missed-call-tab"
                         tabIndex="0">
                        <ListOfNumber listOfCall={missedCall}/>
                    </div>
                </div>
            </div>
            <div className="row mt-2" style={{height: "26vh", overflow: "hidden"}}>
                <div className="col overflow-y-auto overflow-x-hidden h-100">
                    <div className="row sticky-top bg-white">
                        <div className="text-center user-select-none"><h5>Operatörler</h5></div>
                        <input className="form-control text-center" list="departmentList" id="departmentDataList"
                               placeholder="Personel Birim Seçiniz" style={{fontSize: "8px"}}/>
                    </div>
                    <datalist id="departmentList">
                        <option value="Çağrı Karşılayıcı"/>
                        <option value="ÇY - Sağlık"/>
                        <option value="ÇY - Emniyet"/>
                        <option value="ÇY - Jandarma"/>
                        <option value="ÇY - İtfaiye"/>
                        <option value="ÇY - Orman"/>
                        <option value="ÇY - AFAD"/>
                    </datalist>
                    <div className="row">
                        {Array.isArray(staffData) && staffData.length > 0 ? (
                            staffData.map((item, index) => {
                                let statusText;
                                let timeInfo;
                                let bgColor;

                                switch (item.status) {
                                    case "0":
                                        statusText = "Uygun";
                                        timeInfo = " - " + item.recentActivity;
                                        bgColor = "bg-success";
                                        break;
                                    case "1":
                                        statusText = "Görüşmede";
                                        timeInfo = " - " + item.duration;
                                        bgColor = "bg-warning";
                                        break;
                                    case "2":
                                        statusText = "Çalıyor";
                                        timeInfo = "";
                                        bgColor = "bg-danger";
                                        break;
                                    default:
                                        statusText = "undefined";
                                        timeInfo = "-";
                                        bgColor = "bg-info";
                                        break;
                                }

                                return (
                                    <div key={index}
                                         className={`${bgColor} row m-1 mb-0 p-0 user-select-none text-light rounded`}
                                         style={{cursor: "pointer", fontSize: "12px"}}
                                         onDoubleClick={publishDepartment}>
                                        <div className="row flex-nowrap" title={item.staffName}>
                                            <div className="col-1"><VscCallOutgoing size={"12px"}/></div>
                                            <div className="col-12">
                            <span className="d-inline-block text-truncate transferredFrom"
                                  style={{fontSize: "12px", maxWidth: "175px"}}>
                                {item.staffName} - {item.departmentName}
                            </span>
                                            </div>
                                        </div>
                                        <div className="row text-center">
                        <span style={{fontSize: "9px"}}>
                            <b>{statusText}</b>{timeInfo}
                        </span>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="row m-1 mb-0 p-0 bg-dark text-light rounded"
                                 style={{cursor: "pointer", fontSize: "12px"}}>
                                <div className="row" title="No data available">
                                    No data available
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col overflow-auto h-100">
                    <div className="row sticky-top bg-white text-center user-select-none"><h5>Kurumlar</h5></div>
                    <div className="row bg-primary h-25 align-items-center" style={{cursor: "pointer"}}
                         onDoubleClick={publishDepartment}>
                        <div className="col-1">
                            <RiPoliceBadgeLine
                                size={"18px"}/>
                        </div>
                        <div className="col-9 user-select-none"><b className={"transferredFrom"}>EMNİYET</b></div>
                    </div>
                    <div className="row bg-info h-25 align-items-center" style={{cursor: "pointer"}}
                         onDoubleClick={publishDepartment}>
                        <div className="col-1">
                            <LiaAmbulanceSolid
                                size={"18px"}/>
                        </div>
                        <div className="col-9 user-select-none"><b className={"transferredFrom"}>SAĞLIK</b></div>
                    </div>
                    <div className="row bg-info h-25 align-items-center" style={{cursor: "pointer"}}
                         onDoubleClick={publishDepartment}>
                        <div className="col-1">
                            <LiaAmbulanceSolid
                                size={"18px"}/>
                        </div>
                        <div className="col-9 user-select-none"><b className={"transferredFrom"}>Sağlık Nakil</b></div>
                    </div>
                    <div className="row bg-info h-25 align-items-center" style={{cursor: "pointer"}}
                         onDoubleClick={publishDepartment}>
                        <div className="col-1">
                            <LiaAmbulanceSolid
                                size={"18px"}/>
                        </div>
                        <div className="col-9 user-select-none"><b className={"transferredFrom"}>Sağlık Doktor</b></div>
                    </div>
                    <div className="row bg-success h-25 align-items-center" style={{cursor: "pointer"}}
                         onDoubleClick={publishDepartment}>
                        <div className="col-1"><GiCircleForest
                            size={"18px"}/></div>
                        <div className="col-9 user-select-none"><b className={"transferredFrom"}>ORMAN</b></div>
                    </div>
                    <div className="row bg-primary h-25 align-items-center" style={{cursor: "pointer"}}
                         onDoubleClick={publishDepartment}>
                        <div className="col-1"><MdLocalPolice
                            size={"18px"}/></div>
                        <div className="col-9 user-select-none"><b className={"transferredFrom"}>JANDARMA</b></div>
                    </div>
                    <div className="row bg-danger h-25 align-items-center" style={{cursor: "pointer"}}
                         onDoubleClick={publishDepartment}>
                        <div className="col-1"><MdOutlineFireTruck
                            size={"18px"}/></div>
                        <div className="col-9 user-select-none"><b className={"transferredFrom"}>İTFAİYE</b></div>
                    </div>
                    <div className="row bg-primary h-25 align-items-center" style={{cursor: "pointer"}}
                         onDoubleClick={publishDepartment}>
                        <div className="col-1"><TbRadioactiveFilled
                            size={"18px"}/></div>
                        <div className="col-9 user-select-none"><b className={"transferredFrom"}>AFAD</b></div>
                    </div>
                    <div className="row user-select-none"><h6>Yabancı Dil</h6></div>
                    <div className="row pt-4 bg-secondary text-light text-center user-select-none"
                         onDoubleClick={publishDepartment}
                         style={{cursor: "pointer"}}>
                        <div className="col-12 user-select-none"><b className={"transferredFrom"}>İngilizce</b></div>
                    </div>
                    <div className="row pt-4 bg-secondary text-light text-center user-select-none"
                         onDoubleClick={publishDepartment}
                         style={{cursor: "pointer"}}>
                        <div className="col-12 user-select-none text-center"><b className={"transferredFrom"}>Arapça</b>
                        </div>
                    </div>
                    <div className="row pt-4 bg-secondary text-light text-center user-select-none"
                         onDoubleClick={publishDepartment}
                         style={{cursor: "pointer"}}>
                        <div className="col-12 user-select-none text-center"><b
                            className={"transferredFrom"}>Almanca</b></div>
                    </div>
                    <div className="row pt-4 bg-secondary text-light text-center user-select-none"
                         onDoubleClick={publishDepartment}
                         style={{cursor: "pointer"}}>
                        <div className="col-12 user-select-none text-center"><b className={"transferredFrom"}>Rusça</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Aside.propTypes = {
    calledNu: PropTypes.string.isRequired,
    callHistory: PropTypes.array.isRequired,
    missedCall: PropTypes.array.isRequired,
    staffData: PropTypes.array.isRequired,
    inCall: PropTypes.bool.isRequired,
    onCall: PropTypes.func,
    acceptData: PropTypes.func,
    voice: PropTypes.func.isRequired,
    logData: PropTypes.array,
}

export default Aside;