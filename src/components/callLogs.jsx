import PropTypes from "prop-types";
import {HiPhoneIncoming} from "react-icons/hi";
import {HiMiniPhoneArrowUpRight} from "react-icons/hi2";

function CallLogs({isSmall}) {
    return (
        <div style={{height: "100%",overflow: "hidden"}}>
            <div className="row bg-danger-subtle align-items-center rounded" style={{height: "40px"}}>
                <div className="col-6 text-end" style={{fontSize: "12px"}}>Haber Verme Şekli:</div>
                <div className="col-6 pt-1 px-0">
                    <select className="form-select" style={{fontSize: "10px"}}
                            aria-label="İletişim Şekli">
                        <option>Telefon</option>
                        <option value="2">SMS</option>
                        <option value="3">Alarm</option>
                        <option value="3">Sesli Mesaj</option>
                        <option value="3">Planlı Görev</option>
                        <option value="3">Telsiz</option>
                        <option value="3">Makam Onayi</option>
                    </select>
                </div>
            </div>
            {
                isSmall ? (
                    <div className="row overflow-x-hidden overflow-y-auto h-100 ps-3 pe-1"
                         style={{
                             fontSize: "12px",
                             height: "100%",
                             borderRadius: "5px"
                         }}>
                        <div className="row text-center p-0 m-0">
                            <div className="btn w-50 align-content-center btn-outline-secondary"
                                 style={{fontSize: "10px"}} >Çağrıyı İlişkilendir (F9)
                            </div>
                            <div className="btn w-50 align-content-center btn-outline-secondary"
                                 style={{fontSize: "10px"}}>Çağrıyı Kaldır
                            </div>
                        </div>
                        <table>
                            <thead>
                            <tr className="text-center">
                                <th scope="col" className={"sticky-top bg-white"}
                                    style={{
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
                                }}>
                                </th>
                            </tr>
                            </thead>
                            <tbody className={"text-center"}>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiPhoneIncoming size={"16px"} color={"green"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiMiniPhoneArrowUpRight size={"16px"} color={"blue"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiPhoneIncoming size={"16px"} color={"green"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiMiniPhoneArrowUpRight size={"16px"} color={"blue"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiPhoneIncoming size={"16px"} color={"green"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiMiniPhoneArrowUpRight size={"16px"} color={"blue"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiPhoneIncoming size={"16px"} color={"green"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiMiniPhoneArrowUpRight size={"16px"} color={"blue"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiPhoneIncoming size={"16px"} color={"green"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiMiniPhoneArrowUpRight size={"16px"} color={"blue"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiPhoneIncoming size={"16px"} color={"green"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiMiniPhoneArrowUpRight size={"16px"} color={"blue"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiPhoneIncoming size={"16px"} color={"green"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiMiniPhoneArrowUpRight size={"16px"} color={"blue"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiPhoneIncoming size={"16px"} color={"green"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiMiniPhoneArrowUpRight size={"16px"} color={"blue"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiPhoneIncoming size={"16px"} color={"green"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiMiniPhoneArrowUpRight size={"16px"} color={"blue"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiPhoneIncoming size={"16px"} color={"green"}/></td>
                            </tr>
                            <tr>
                                <td>6425426</td>
                                <td>03121120000</td>
                                <td>01.01.2025 12:34:56</td>
                                <td><HiMiniPhoneArrowUpRight size={"16px"} color={"blue"}/></td>
                            </tr>
                            {/*{data.callHistory.map((call, index) => (*/}
                            {/*    <tr key={index}>*/}
                            {/*        <td>{call.callId}</td>*/}
                            {/*        <td>{call.number}</td>*/}
                            {/*        <td>{new Date(call.callTime).toLocaleString()}</td>*/}
                            {/*        <td>{call["lat-lot"]}</td>*/}
                            {/*        <td>{call["call-location"]}</td>*/}
                            {/*        <td className={"d-flex justify-content-center"}>*/}
                            {/*            <div className="form-check">*/}
                            {/*                <input className="form-check-input " type="checkbox"*/}
                            {/*                       id={`checkbox-${index}`} defaultChecked={call["call-attribution"]}*/}
                            {/*                />*/}
                            {/*            </div>*/}
                            {/*        </td>*/}
                            {/*    </tr>*/}
                            {/*))}*/}
                            </tbody>
                        </table>
                    </div>) : (<div className="row overflow-x-hidden overflow-y-auto"
                                    style={{
                                        fontSize: "12px",
                                        height: "150px",
                                        border: "1px solid #CFF4FC",
                                        borderRadius: "5px"
                                    }}>
                    <table>
                        <thead>
                        <tr className="text-center">
                            <th scope="col" className={"sticky-top bg-white"}
                                style={{
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
                        {/*{data.callHistory.map((call, index) => (*/}
                        {/*    <tr key={index}>*/}
                        {/*        <td>{call.callId}</td>*/}
                        {/*        <td>{call.number}</td>*/}
                        {/*        <td>{new Date(call.callTime).toLocaleString()}</td>*/}
                        {/*        <td>{call["lat-lot"]}</td>*/}
                        {/*        <td>{call["call-location"]}</td>*/}
                        {/*        <td className={"d-flex justify-content-center"}>*/}
                        {/*            <div className="form-check">*/}
                        {/*                <input className="form-check-input " type="checkbox"*/}
                        {/*                       id={`checkbox-${index}`} defaultChecked={call["call-attribution"]}*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}
                        {/*))}*/}
                        </tbody>
                    </table>
                </div>)
            }


        </div>
    );
}


CallLogs.propTypes = {
    isSmall: PropTypes.bool.isRequired,
}
export default CallLogs;