import DepartmentOperations from "./DepartmentOperations.jsx";
import {FaEdit} from "react-icons/fa";
import {MdOutlineCancelPresentation, MdOutlineRecycling, MdOutlineSave} from "react-icons/md";
import {VscFolderActive} from "react-icons/vsc";
import {GiBrain} from "react-icons/gi";
import {RiMapPinTimeLine} from "react-icons/ri";
import Address from "../address.jsx";
import CallLogs from "../callLogs.jsx";
import Department from "../department.jsx";
import PropTypes from "prop-types";
import AddressService from "../../services/AddressService.js";
import {useState} from "react";

function PoliceEvent({data, onSelectChange}) {
    const [policeData, setPoliceData] = useState({
        id: "",
        incidentId: "",
        isPriority: false,
        calledNumber: "",
        regionType: "urban",
        callerName: "",
        healthDescription: "",
        address: {},
        description: "",
        incidentDefinition: {},
        crew: [],
    });
    const addressService = new AddressService();

    if (!data) return <div>Veri Yüklenemedi...</div>

    const handleChange = (key, value) => {
        setPoliceData(prevData => ({...prevData, [key]: value}));
    };

    const testFunction = () => {
        return null
    }
    return (
        <div>
            <div className="row text-center align-items-center my-2">
                <div className="col-1 btn-outline-info btn mx-1"><FaEdit size={"22px"}/> Değiştir</div>
                <div className="col-1 btn-outline-secondary btn mx-1"><MdOutlineCancelPresentation
                    size={"22px"}/> Vazgeç
                </div>
                <div className="col-1 btn-outline-primary btn mx-1 disabled"><VscFolderActive
                    size={"22px"}/> Etkinleştir
                </div>
                <div className="col-1 btn-outline-success btn mx-1"><MdOutlineSave size={"24px"}/> Kaydet</div>
                <div className="col-1 btn-outline-danger btn mx-1 disabled"><GiBrain size={"22px"}/> Hatırla</div>
                <div className="col-2 btn-outline-primary btn mx-1 disabled"><MdOutlineRecycling
                    size={"22px"}/> Mükerrer
                    Kontrolü
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
                        <div className="col nu-format"
                             style={{borderRight: "1px solid #000000"}}>{data?.data?.data.incidentId}</div>
                        <div className="col">Tarih :
                            <span className={"nu-format"} style={{fontSize: "11px"}}>
                                {addressService.formatTime(data?.data?.data?.modifiedAt)} {addressService.formatDigitalDate(data?.data?.data?.modifiedAt)}
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row ms-1">Kurum Görevlendirme Zamanı:</div>
                        <div className="row">
                            <div className="input-group my-2">
                                <input type="text" className="form-control"
                                       placeholder={`${addressService.formatTime(data?.data?.data?.createdAt)} ${addressService.formatDigitalDate(data?.data?.data?.createdAt)}`}
                                       aria-label="date time" aria-describedby="check-time1" disabled={true}/>
                                <button className="btn btn-outline-secondary" type="button" id="check-time1"
                                        disabled={true}><RiMapPinTimeLine size={"20px"}/>
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value={policeData.isPriority}
                                        id="priorityCheck"
                                        onChange={(e)=> handleChange("isPriority", e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="priorityCheck">
                                        Öncelikli
                                    </label>
                                </div>
                            </div>
                            <div className="col-3 bg-danger-subtle mb-1" style={{borderRadius: "10px 0 0 10px"}}>
                                <input className="form-check-input" type="radio" name="region" id="radioRegionUrban"
                                       value="urban" onChange={(e) => handleChange('regionType', e.target.value)}
                                       checked={policeData.regionType === "urban"}/>
                                <label className="form-check-label ps-1" htmlFor="radioRegionUrban">
                                    Kentsel
                                </label>
                            </div>
                            <div className="col-3 bg-danger-subtle mb-1" style={{borderRadius: "0 10px 10px 0"}}>
                                <input className="form-check-input" type="radio" name="region" id="radioRegionRural"
                                       value="rural" onChange={(e) => handleChange('regionType', e.target.value)}
                                       checked={policeData.regionType === "rural"}/>
                                <label className="form-check-label" htmlFor="radioRegionRural">
                                    Kırsal
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">Bildirim Türü:</div>
                            <div className="col-3 bg-danger-subtle pt-2" style={{borderRadius: " 10px 0 0 10px "}}>
                                <input className="form-check-input" type="radio" name="notification"
                                       id="radioRequestInfo"/>
                                <label
                                    className="form-check-label"
                                    htmlFor="radioRequestInfo"
                                    style={{borderRadius: "10px 0 0 10px"}}
                                    onChange={(e) => handleChange('notification', e.target.value)}
                                >
                                    Bilgi Talebi
                                </label>
                            </div>
                            <div className="col-3 bg-danger-subtle pt-2">
                                <input className="form-check-input" type="radio" name="notification"
                                       id="radioUnfounded"/>
                                <label
                                    className="form-check-label"
                                    htmlFor="radioUnfounded"
                                    onChange={(e) => handleChange('notification', e.target.value)}
                                >
                                    Asılsız
                                </label>
                            </div>
                            <div className="col-3 bg-danger-subtle pt-2" style={{borderRadius: "0 10px 10px 0"}}>
                                <input className="form-check-input"
                                       type="radio"
                                       name="notification"
                                       onChange={(e) => handleChange('notification', e.target.value)}
                                       id="radioFounded" //buradayım 24.10.2024 14:23
                                />
                                <label className="form-check-label" htmlFor="radioFounded" >
                                    Asıllı
                                </label>
                            </div>
                        </div>
                        <div className="row ms-2">Olay Türü</div>
                        <div className="row">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Arama..." aria-label="Username"
                                       aria-describedby="basic-addon1" disabled={true}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                          style={{maxHeight: "150px"}} disabled={true}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 ps-4 user-select-none" style={{fontSize: "10px"}}>
                    <div className="row">
                        <div className="row">Çağrı Karşılayıcı Vaka Tanımı</div>
                        <div className="row">
                            <div className="mb-1">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={2}
                                          readOnly={true}
                                          style={{maxHeight: "40px", overflowY: "auto", fontSize: "12px"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">Çağrı Karşılayıcı Vaka Açıklaması</div>
                        <div className="row">
                            <div className="mb-1">
                                <textarea className="form-control" id="exampleFormControlTextarea2" rows={2}
                                          readOnly={true}
                                          style={{maxHeight: "40px", overflowY: "auto", fontSize: "12px"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">Emniyet Açıklama Yazınız</div>
                        <div className="row">
                            <div className="mb-1">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={2}
                                          style={{maxHeight: "80px", overflowY: "auto", fontSize: "12px"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">Emniyet Açıklamaları</div>
                        <div className="row">
                            <div className="mb-1">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={2}
                                          readOnly={true}
                                          style={{maxHeight: "60px", overflowY: "auto", fontSize: "12px"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">Diğer Kurum Açıklamaları</div>
                        <div className="row">
                            <div className="mb-1">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={2}
                                          readOnly={true}
                                          style={{maxHeight: "60px", overflowY: "auto", fontSize: "12px"}}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 h-100 p-0 m-0">
                    <Address districts={[]} triggerUpdate={true} province={"ANKARA"} addressData={data}
                             onAddressChange={testFunction}/>
                </div>
                <div className="col-2 bg-white h-100 p-0 m-0" style={{overflow: "hidden"}}><CallLogs isSmall={true}
                                                                                                     number={"0532"}/>
                </div>
                <div className="col-2 user-select-none"><Department isSmall={true} onSelectionChange={onSelectChange}/>
                </div>
            </div>
            <div className="row overflow-hidden p-0 m-0" style={{height: "38vh"}}>
                <DepartmentOperations name={"police"}/>
            </div>
        </div>
    );
}

PoliceEvent.propTypes = {
    data: PropTypes.array.isRequired,
    onSelectChange: PropTypes.func
}

export default PoliceEvent;