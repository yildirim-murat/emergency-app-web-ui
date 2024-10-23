import PropTypes from "prop-types";
import {MdOpenInNew} from "react-icons/md";
import {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";

function SummaryList({data}) {
    const [selectedIncident, setSelectedIncident] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filters, setFilters] = useState({
        incidentNumber: '',
        description: '',
        location: '',
        type: '',
    });

    useEffect(() => {console.log("DATA: " + JSON.stringify(data))})

    if (!data.summaryData) {
        return <div>Yükleniyor...</div>;
    }
    const incidents = data?.summaryData?.data?.data?.content || [];
    const handleInputChange = (e) => {
        const {id, value} = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [id]: value,
        }));
    };
    const filteredIncidents = incidents.filter((incident) => {
        return (
            incident.incidentId.toString().includes(filters.incidentNumber) &&
            (incident.description?.toLowerCase() || '').includes(filters.description.toLowerCase()) &&
            (incident.location?.toLowerCase() || '').includes(filters.location.toLowerCase()) &&
            (incident.type?.toLowerCase() || '').includes(filters.type.toLowerCase())
        );
    });
    const openModal = (incident) => {
        setSelectedIncident(incident);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedIncident(null);
    };

    return (
        <div className="m-2" style={{height: "50%", width: "32%", minWidth: "500px", overflowY: "auto"}}>
            <div className="head sticky-top bg-danger" style={{borderRadius: "8px"}}>
                <div className="head d-flex justify-content-between user-select-none text-white">
                    <div className={"text-uppercase align-content-center fs-4 px-2 "}>{data.departmentName}</div>
                    <div className={"align-content-center pe-2"}>5 vaka
                        listelenmektedir
                    </div>
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                <tr className={"text-center sticky-top"}>
                    <th className={"bg-info-subtle"} scope="col" width={"150px"} style={{borderRadius: "8px 0 0 8px"}}>
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="incidentNumber"
                                value={filters.incidentNumber}
                                onChange={handleInputChange}
                                placeholder="Vaka Numarası"
                            />
                            <label htmlFor="incidentNumber" style={{fontSize: "12px"}}>Vaka Numarası</label>
                        </div>
                    </th>
                    <th className={"bg-info-subtle"} scope="col" width={"150px"}>
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={filters.description}
                                onChange={handleInputChange}
                                placeholder="Olay Tanımı"
                            />
                            <label htmlFor="description" style={{fontSize: "14px"}}>Olay Tanımı</label>
                        </div>
                    </th>
                    <th className={"bg-info-subtle"} scope="col">
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                value={filters.location}
                                onChange={handleInputChange}
                                placeholder="Olay Yeri"
                            />
                            <label htmlFor="location" style={{fontSize: "14px"}}>Olay Yeri</label>
                        </div>
                    </th>
                    <th className={"bg-info-subtle"} scope="col" style={{borderRadius: "0 8px 8px 0"}}>
                        <div className="form-floating mb-2">
                            <input
                                type="text"
                                className="form-control"
                                id="type"
                                value={filters.type}
                                onChange={handleInputChange}
                                placeholder="Olay Türü"
                            />
                            <label htmlFor="type" style={{fontSize: "14px"}}>Olay Türü</label>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {filteredIncidents
                    .sort((a, b) => a.incidentId - b.incidentId)
                    .map((incident, index) => (
                        <tr
                            key={index}
                            className="user-select-none"
                            style={{cursor: "pointer"}}
                            onClick={() => {
                                setSelectedIncident(incident)
                            }}
                        >
                            <th scope="row" style={{borderRadius: "15px 0 0 15px"}}>
                                <div className="d-inline-block text-truncate text-center" style={{width: "80px"}}>
                                    {incident.incidentId}
                                </div>
                                {selectedIncident === incident && (
                                    <button className="btn btn-danger" onClick={() => openModal(incident)}>
                                        <MdOpenInNew color="white" size="22px"/>
                                    </button>
                                )}
                            </th>
                            <td style={{height: "60px"}}>
                                <span className="d-inline-block text-truncate align-content-center"
                                      style={{maxWidth: "100px", height: "100%"}}>
                                    {incident.description}
                                </span>
                            </td>
                            <td style={{height: "60px"}}>
                                <span className="d-inline-block text-truncate align-content-center"
                                      style={{maxWidth: "100px", height: "100%"}}>
                                    {incident.address?.district}
                                </span>
                            </td>
                            <td style={{borderRadius: "0 15px 15px 0", height: "60px"}}>
                                <span className="d-inline-block text-truncate align-content-center"
                                      style={{maxWidth: "100px", height: "100%"}}>
                                    {incident.type}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={isModalOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Olay Detayı</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedIncident && (
                        <div>
                            <p><strong>Olay Numarası:</strong> {selectedIncident.incidentId} </p>
                            <p><strong>Olay Tanımı:</strong> {selectedIncident.description} </p>
                            <p><strong>Olay
                                Yeri:</strong> {selectedIncident.address?.province}/{selectedIncident.address?.district} {selectedIncident.address?.neighborhood} {selectedIncident.address?.street}
                            </p>
                            <p><strong>Olay Türü:</strong> {selectedIncident.definition} </p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-success" onClick={() => {
                        closeModal();
                        localStorage.setItem("idData", JSON.stringify(selectedIncident.incidentId));
                    }}>Aç
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

SummaryList.propTypes = {
    data: PropTypes.object.isRequired,
    transferData: PropTypes.func
}
export default SummaryList;