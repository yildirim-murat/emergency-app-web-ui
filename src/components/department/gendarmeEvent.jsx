import {FaEdit} from "react-icons/fa";
import {MdOutlineCancelPresentation, MdOutlineRecycling, MdOutlineSave} from "react-icons/md";
import {VscFolderActive} from "react-icons/vsc";
import {GiBrain} from "react-icons/gi";
import {RiMapPinTimeLine} from "react-icons/ri";
import Address from "../address.jsx";
import CallLogs from "../callLogs.jsx";
import Department from "../department.jsx";
import DepartmentOperations from "./DepartmentOperations.jsx";

function GendarmeEvent({data, onSelectChange}) {
    return (
        <div>
            <div className="row text-center align-items-center my-2">
                <div className="col-1 btn-outline-info btn mx-1"><FaEdit size={"22px"}/> Değiştir</div>
                <div className="col-1 btn-outline-secondary btn mx-1"><MdOutlineCancelPresentation
                    size={"22px"}/> Vazgeç
                </div>
                <div className="col-1 btn-outline-primary btn mx-1"><VscFolderActive size={"22px"}/> Etkinleştir</div>
                <div className="col-1 btn-outline-success btn mx-1"><MdOutlineSave size={"24px"}/> Kaydet</div>
                <div className="col-1 btn-outline-danger btn mx-1"><GiBrain size={"22px"}/> Hatırla</div>
                <div className="col-2 btn-outline-primary btn mx-1"><MdOutlineRecycling size={"22px"}/> Mükerrer
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
                        <div className="col" style={{borderRight: "1px solid #000000"}}>Vaka Nu</div>
                        <div className="col">Tarih</div>
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
                                <input className="form-check-input" type="radio" name="region"
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
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                          style={{maxHeight: "150px"}}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 ps-4 user-select-none" style={{fontSize: "10px"}}>
                    <div className="row">
                        <div className="row">Tüm Vaka Açıklamaları</div>
                        <div className="row">
                            <div className="mb-1">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={12}
                                          readOnly={true}
                                          style={{maxHeight: "240px", overflowY: "auto", fontSize: "12px"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">Jandarma Kurum Açıklaması</div>
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
                <div className="col-2 user-select-none"><Department isSmall={true} onSelectionChange={onSelectChange}/></div>
            </div>
            <div className="row overflow-hidden p-0 m-0" style={{height: "38vh"}}>
                <DepartmentOperations name={"gendarme"}/>
            </div>
        </div>
    );
}

export default GendarmeEvent;