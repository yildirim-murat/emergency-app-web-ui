import PropTypes from "prop-types";
import {MdOpenInNew} from "react-icons/md";

function SummaryList({data}) {
    return (
        <div className="m-2" style={{height: "50%", width: "32%", minWidth: "500px", overflowY: "auto"}}>
            <div className="head sticky-top bg-danger" style={{borderRadius: "8px"}}>
                <div className="head d-flex justify-content-between user-select-none text-white">
                    <div className={"text-uppercase align-content-center fs-4 px-2 "}>{data.name}</div>
                    <div className={"align-content-center"}>{data.nu} vaka listenmektedir</div>
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                <tr className={"text-center sticky-top"}>
                    <th className={"bg-info-subtle"} scope="col" width={"150px"} style={{borderRadius: "8px 0 0 8px"}}>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="incidentNumber"
                                   placeholder="Vaka Numarası"/>
                            <label htmlFor="incidentNumber" style={{fontSize: "12px"}}>Vaka Numarası</label>
                        </div>
                    </th>
                    <th className={"bg-info-subtle"} scope="col" width={"150px"}>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="incidentNumber"
                                   placeholder="Vaka Numarası"/>
                            <label htmlFor="incidentNumber" style={{fontSize: "14px"}}>Olay Tanımı</label>
                        </div>
                    </th>
                    <th className={"bg-info-subtle"} scope="col">
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="incidentNumber"
                                   placeholder="Vaka Numarası"/>
                            <label htmlFor="incidentNumber" style={{fontSize: "14px"}}>Olay Yeri</label>
                        </div>
                    </th>
                    <th className={"bg-info-subtle"} scope="col" style={{borderRadius: "0 8px 8px 0"}}>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="incidentNumber"
                                   placeholder="Vaka Numarası"/>
                            <label htmlFor="incidentNumber" style={{fontSize: "14px"}}>Olay Türü</label>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className={`${true ? "table-primary" : "table-danger"} user-select-none`}
                    style={{cursor: "pointer"}}>
                    <th scope="row" style={{borderRadius: "15px 0 0 15px"}}>
                        <div className={"d-inline-block text-truncate text-center"}
                             style={{width: "80px"}}>
                            123456789010
                        </div>
                        <div className="btn btn-danger"><MdOpenInNew color={"white"} size={"22px"}/></div>
                    </th>
                    <td style={{height: "60px"}}>
                        <span className={"d-inline-block text-truncate align-content-center"}
                              style={{maxWidth: "100px", height: "100%"}}>
                            AMBULANS TALEBİ
                        </span>
                    </td>
                    <td style={{height: "60px"}}>
                        <span className={"d-inline-block text-truncate align-content-center"}
                              style={{maxWidth: "100px", height: "100%"}}>
                            Yayın Sk. No:65 Önü Varlık Mh. Yenimahalle
                        </span>
                    </td>
                    <td style={{borderRadius: "0 15px 15px 0", height: "60px"}}>
                        <span className={"d-inline-block text-truncate align-content-center"}
                              style={{maxWidth: "100px", height: "100%"}}>
                            MEDİKAL
                        </span>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

SummaryList.propTypes = {
    data: PropTypes.func.isRequired,
}
export default SummaryList;