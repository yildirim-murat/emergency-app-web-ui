import {IoIosSave} from "react-icons/io";
import {RxLapTimer} from "react-icons/rx";
import {RiDeleteBin5Line} from "react-icons/ri";


function HealthPassive() {
    return (
        <div className="w-100 ps-3 m-0 pb-2 " style={{height: "97%"}}>
            <button className={"row btn btn-outline-success"} type="button">Yenile</button>
            <div className="row" style={{height: "90%"}}>

                <div className="col-8">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-4">
                    <div className="col-12 h-100">
                        <div className="row">
                            <div className="col-4">Ekip Adı</div>
                            <div className="col-5">213</div>
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
                                           style={{height: "32px"}} readOnly={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="row ps-5">
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
                                       style={{fontSize: "10px"}} readOnly={true}/>
                            </div>
                            <div className="col-2">Dönüş km:</div>
                            <div className="col-3">
                                <input type="text" className="form-control" id="entryKm"
                                       style={{fontSize: "10px"}} readOnly={true}/>
                            </div>
                            <div className="col-2">= <span style={{
                                borderColor: "red",
                                borderStyle: "dashed",
                                borderWidth: "0 0 0.5px 0"
                            }}>123</span> km
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4">Vakaya Çıkış:</div>
                            <div className="col-8">
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control"
                                           aria-describedby="releaseIncidentBtn" id={"releaseIncident"}
                                           style={{height: "32px"}} readOnly={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4">Olay Yerine Varış:</div>
                            <div className="col-8">
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control"
                                           aria-describedby="arrivalSceneBtn" id={"arrivalScene"}
                                           style={{height: "32px"}} readOnly={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4">Vakaya Varış:</div>
                            <div className="col-8">
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control"
                                           aria-describedby="arrivalIncidentBtn" id={"arrivalIncident"}
                                           style={{height: "32px"}} readOnly={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4">Olay Yerinden Ayrılış:</div>
                            <div className="col-8">
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control"
                                           aria-describedby="departureSceneBtn" id={"departureScene"}
                                           style={{height: "32px"}} readOnly={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4">Hastaneye Varış:</div>
                            <div className="col-8">
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control"
                                           aria-describedby="arrivalHospitalBtn" id={"arrivalHospital"}
                                           style={{height: "32px"}} readOnly={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4">Hastaneden Ayrılış:</div>
                            <div className="col-8">
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control"
                                           aria-describedby="departureHospitalBtn" id={"departureHospital"}
                                           style={{height: "32px"}} readOnly={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-4">İstasyona Varış:</div>
                            <div className="col-8">
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control"
                                           aria-describedby="arrivalStationBtn" id={"arrivalStation"}
                                           style={{height: "32px"}} readOnly={true}/>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default HealthPassive;