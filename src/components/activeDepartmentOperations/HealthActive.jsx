import {FaLocationArrow} from "react-icons/fa6";
import {FiEdit3} from "react-icons/fi";
import {TbHospital} from "react-icons/tb";
import {RxLapTimer} from "react-icons/rx";
import {useEffect, useState} from "react";
import {IoIosSave} from "react-icons/io";
import {RiDeleteBin5Line} from "react-icons/ri";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {syncHealth} from "../../store/actions/healthActions.js";

const CrewForm = ({crewName, setCrewName, handleSave}) => {
    return (
        <div className="col">
            <div className="w-100">
                <input
                    type="text"
                    className="form-control"
                    id="crewSearch"
                    placeholder="Ekip Adı Ekle"
                    value={crewName}
                    onChange={(e) => setCrewName(e.target.value)}
                />
            </div>
            <div className="w-25">
                <button type="button" className="btn btn-warning" onClick={handleSave}>
                    Kaydet
                </button>
            </div>
        </div>
    );
};

CrewForm.propTypes = {
    crewName: PropTypes.string.isRequired,
    setCrewName: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
};

const CrewTable = ({
                       crewList,
                       handleCrewClick,
                       handleEditClick,
                       handleUpdateSave,
                       updatedCrewName,
                       setUpdatedCrewName,
                       isEditing
                   }) => {
    return (
        <div className="col-4 text-center">
            Atanmış Ekipler
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
                {crewList.map((crew, index) => (
                    <tr key={index}>
                        <td onClick={() => handleCrewClick(crew)} style={{cursor: 'pointer'}}>
                            {isEditing === index ? (
                                <input
                                    type="text"
                                    className="form-control"
                                    value={updatedCrewName}
                                    onChange={(e) => setUpdatedCrewName(e.target.value)}
                                />
                            ) : (
                                crew
                            )}
                        </td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                            </div>
                        </td>
                        <td><FaLocationArrow size={"24px"} style={{cursor: "pointer"}}/></td>
                        <td>
                            {isEditing === index ? (
                                <button
                                    className="btn btn-success"
                                    onClick={() => handleUpdateSave(index)}
                                >
                                    Kaydet
                                </button>
                            ) : (
                                <FiEdit3
                                    size={"24px"}
                                    style={{cursor: "pointer"}}
                                    onClick={() => handleEditClick(index)}
                                />
                            )}
                        </td>
                        <td><TbHospital size={"24px"} style={{cursor: "pointer"}}/></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

CrewTable.propTypes = {
    crewList: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleCrewClick: PropTypes.func.isRequired,
    handleEditClick: PropTypes.func.isRequired,
    handleUpdateSave: PropTypes.func.isRequired,
    updatedCrewName: PropTypes.string.isRequired,
    setUpdatedCrewName: PropTypes.func.isRequired,
    isEditing: PropTypes.number
};

const InputGroup = ({id, handleButtonClick, handleRemoveInput}) => {
    const handleTimeButtonClick = () => {
        const now = new Date();
        const formattedTime = now.toLocaleString('tr-TR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        handleButtonClick(id, formattedTime);
    };

    return (
        <div className="input-group mb-1">
            <input type="text" className="form-control" aria-describedby={`${id}Btn`} id={id} style={{height: "24px"}}
                   readOnly/>
            <button className="btn btn-outline-success py-0 px-2 m-0" type="button" id={`${id}Btn`}
                    style={{height: "24px"}}
                    onClick={handleTimeButtonClick}>
                <RxLapTimer size={"12px"}/>
            </button>
            <button className="btn btn-outline-danger py-0 px-2 m-0" type="button" id={`${id}RemoveBtn`}
                    style={{height: "24px"}} onClick={() => handleRemoveInput(id)}>
                <RiDeleteBin5Line size={"12px"}/>
            </button>
        </div>
    );
};
InputGroup.propTypes = {
    id: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func.isRequired,
    handleRemoveInput: PropTypes.func.isRequired
};

const inputFields = [
    {label: "Ekip Atama Zamanı", id: "deploymentIncident"},
    {label: "Vakaya Çıkış", id: "releaseIncident"},
    {label: "Olay Yerine Varış", id: "arrivalScene"},
    {label: "Vakaya Varış", id: "arrivalIncident"},
    {label: "Olay Yerinden Ayrılış", id: "departureScene"},
    {label: "Hastaneye Varış", id: "arrivalHospital"},
    {label: "Hastaneden Ayrılış", id: "departureHospital"},
    {label: "İstasyona Varış", id: "arrivalStation"},
];

const CrewDetails = ({selectedCrewDetails}) => {
    const dispatch = useDispatch();

    const handleButtonClick = (id, formattedTime) => {
        const inputElement = document.getElementById(id);
        if (inputElement) {
            inputElement.value = formattedTime;
        }
    };
    const handleRemoveInput = (id) => {
        const inputElement = document.getElementById(id);
        if (inputElement) {
            inputElement.value = '';
        }
    };

    const handleSaveTimeClick = () => {
        const crew = {
            name: selectedCrewDetails.name,
            times: {}
        };
        inputFields.forEach(({id}) => {
            const inputElement = document.getElementById(id);
            if (inputElement) {
                crew.times[id] = inputElement.value;
            }
        });

        //ekip adı ve bilgilerini array olarak kaydedeceğiz. BURADAYIM...
        dispatch(syncHealth({}, crew));
    };

    return (
        <div className="col-5 align-items-center overflow-y-auto" style={{fontSize: "12px", height: "90%"}}>
            <div>Ekip Kayıt Bilgileri</div>
            {Object.keys(selectedCrewDetails).length > 0 ? (
                <div className="col-12 h-100">
                    <div className="row">
                        <div className="col-4">Ekip Adı</div>
                        <div className="col-3"><strong>{selectedCrewDetails.name}</strong></div>
                        <div className="col-5">
                            <button className="btn btn-outline-danger px-2 m-0 w-100" type="button" id="saveTime"
                                    style={{height: "32px", fontSize: "13px"}} onClick={handleSaveTimeClick}>
                                <IoIosSave size={"24px"}/> Zamanları Kaydet
                            </button>
                        </div>
                    </div>
                    {inputFields.map(({label, id}) => (
                        <div className="row align-items-center" key={id}>
                            <div className="col-4">{label}:</div>
                            <div className="col-8">
                                <InputGroup id={id} handleButtonClick={handleButtonClick}
                                            handleRemoveInput={handleRemoveInput}/>
                            </div>
                        </div>
                    ))}
                    <div className="row ps-5 user-select-none">
                        {/* Radio buttons can be included here */}
                    </div>
                    <div className="row align-items-center text-center" style={{fontSize: "10px"}}>
                        {/* Kilometer inputs and their calculation */}
                    </div>
                </div>
            ) : (
                <p style={{fontSize: "20px", fontStyle: "italic"}}>Ekip bilgilerini görmek için bir ekip adına
                    tıklayın...</p>
            )}
        </div>
    );
}
CrewDetails.propTypes = {
    selectedCrewDetails: PropTypes.shape({
        name: PropTypes.string
    }),
    onSaveTime: PropTypes.func
};

export {CrewForm, CrewTable, InputGroup, CrewDetails};

function HealthActive() {
    const [exitKm, setExitKm] = useState(0);
    const [entryKm, setEntryKm] = useState(0);
    const [diffKm, setDiffKm] = useState(0);
    const [crewName, setCrewName] = useState("");
    const [crewList, setCrewList] = useState([]);
    const [isEditing, setIsEditing] = useState(null);
    const [updatedCrewName, setUpdatedCrewName] = useState('');
    const [selectedCrew, setSelectedCrew] = useState(null);
    const [selectedCrewDetails, setSelectedCrewDetails] = useState({});
    const [sentData, setSentData] = useState({});

    useEffect(() => {
        const difference = Math.max(0, entryKm - exitKm);
        setDiffKm(difference);
    }, [exitKm, entryKm])

    const handleButtonClick = (inputId) => {
        const now = new Date();
        const formattedTime = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        setSelectedCrewDetails(prev => ({...prev, [inputId]: formattedTime}));
    };
    const handleRemoveInput = (inputId) => {
        setSelectedCrewDetails(prev => ({...prev, [inputId]: ''}));
    }
    const handleSave = () => {
        if (crewName.trim() && !crewList.includes(crewName.trim())) {
            setCrewList(prev => [...prev, crewName.trim()]);
            setCrewName('');
        }
    };
    const handleCrewClick = (crewName) => {
        const selected = crewList.find((crew) => crew === crewName);
        if (selected) {
            setSelectedCrew(selected);
            setSelectedCrewDetails({name: selected, vehicle: ''});
        }
    };
    const handleEditClick = (index) => {
        setIsEditing(index);
        setUpdatedCrewName(crewList[index]);
    };
    const handleUpdateSave = (index) => {
        const updatedList = [...crewList];
        updatedList[index] = updatedCrewName;
        setCrewList(updatedList);
        setIsEditing(null);
    };

    return (<div className="d-flex align-items-start w-100 h-100 overflow-hidden">
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
        <div className="tab-content h-100" style={{width: "200vw"}} id="v-pills-tabContent">
            <div className="tab-pane fade show active w-100 h-100" id="v-pills-base" role="tabpanel"
                 aria-labelledby="v-pills-base-tab" tabIndex="0">
                <div className="row w-100 h-100">

                    <CrewForm crewName={crewName} setCrewName={setCrewName} handleSave={handleSave}/>
                    <CrewTable
                        crewList={crewList}
                        handleCrewClick={handleCrewClick}
                        handleEditClick={handleEditClick}
                        handleUpdateSave={handleUpdateSave}
                        updatedCrewName={updatedCrewName}
                        setUpdatedCrewName={setUpdatedCrewName}
                        isEditing={isEditing}
                    />
                    {selectedCrewDetails &&
                        <CrewDetails
                            selectedCrewDetails={selectedCrewDetails}
                            handleButtonClick={handleButtonClick}
                            handleRemoveInput={handleRemoveInput}
                        />
                    }


                    {/*<div className="col-3">*/}
                    {/*    <div className="row mb-3">*/}
                    {/*        <div className="col-8">*/}
                    {/*            <input type="text"*/}
                    {/*                   className="form-control"*/}
                    {/*                   id="crewSearch"*/}
                    {/*                   placeholder="Ekip Adı Ekle"*/}
                    {/*                   value={crewName}*/}
                    {/*                   onChange={(e) => setCrewName(e.target.value)}/>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-2">*/}
                    {/*            <button type={"button"} className={"btn btn-warning"} onClick={handleSave}>*/}
                    {/*                Kaydet*/}
                    {/*            </button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="row h-75"></div>*/}
                    {/*</div>*/}
                    {/*<div className="col-4 text-center">Atanmış Ekipler*/}
                    {/*    <table>*/}
                    {/*        <thead>*/}
                    {/*        <tr>*/}
                    {/*            <th className="col-5">Ekip</th>*/}
                    {/*            <th className="col-1">Atandı</th>*/}
                    {/*            <th className="col-1"></th>*/}
                    {/*            <th className="col-1"></th>*/}
                    {/*            <th className="col-1"></th>*/}
                    {/*        </tr>*/}
                    {/*        </thead>*/}
                    {/*        <tbody>*/}
                    {/*        {*/}
                    {/*            crewList.map((crew, index) => (*/}
                    {/*                <tr key={index}>*/}
                    {/*                    <td onClick={() => handleCrewClick(crew)} style={{cursor: 'pointer'}}>*/}
                    {/*                        {isEditing === index ? (*/}
                    {/*                            <input*/}
                    {/*                                type="text"*/}
                    {/*                                className="form-control"*/}
                    {/*                                value={updatedCrewName}*/}
                    {/*                                onChange={(e) => setUpdatedCrewName(e.target.value)}*/}
                    {/*                            />*/}
                    {/*                        ) : (*/}
                    {/*                            crew*/}
                    {/*                        )}*/}
                    {/*                    </td>*/}
                    {/*                    <td>*/}
                    {/*                    <div className="form-check">*/}
                    {/*                            <input className="form-check-input" type="checkbox" value=""/>*/}
                    {/*                        </div>*/}
                    {/*                    </td>*/}
                    {/*                    <td><FaLocationArrow size={"24px"} style={{cursor: "pointer"}}/></td>*/}
                    {/*                    <td>*/}
                    {/*                        {isEditing === index ? (*/}
                    {/*                            <button*/}
                    {/*                                className="btn btn-success"*/}
                    {/*                                onClick={() => handleUpdateSave(index)}*/}
                    {/*                            >*/}
                    {/*                                Kaydet*/}
                    {/*                            </button>*/}
                    {/*                        ) : (*/}
                    {/*                            <FiEdit3*/}
                    {/*                                size={"24px"}*/}
                    {/*                                style={{cursor: "pointer"}}*/}
                    {/*                                onClick={() => handleEditClick(index)}*/}
                    {/*                            />*/}
                    {/*                        )}*/}
                    {/*                    </td>*/}
                    {/*                    <td><TbHospital size={"24px"} style={{cursor: "pointer"}}/></td>*/}
                    {/*                </tr>*/}
                    {/*            ))*/}
                    {/*        }*/}
                    {/*        </tbody>*/}
                    {/*    </table>*/}
                    {/*</div>*/}
                    {/*<div className="col-5 align-items-center  overflow-y-auto"*/}
                    {/*     style={{fontSize: "12px", height: "97%"}}>*/}
                    {/*    Ekip Kayıt Bilgileri*/}
                    {/*    {*/}
                    {/*        selectedCrew ? (*/}
                    {/*                <div className="col-12 h-100">*/}
                    {/*                    <div className="row">*/}
                    {/*                        <div className="col-4">Ekip Adı</div>*/}
                    {/*                        <div className="col-3">*/}
                    {/*                            <strong>*/}
                    {/*                                {selectedCrewDetails.name}*/}
                    {/*                            </strong>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="col-5">*/}
                    {/*                            <button className="btn btn-outline-danger px-2 m-0 w-100" type="button"*/}
                    {/*                                    id="saveTime" style={{height: "32px", fontSize: "13px"}}>*/}
                    {/*                                <IoIosSave*/}
                    {/*                                    size={"24px"}/>Zamanları Kaydet*/}
                    {/*                            </button>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row">*/}
                    {/*                        <div className="col-4">Araç Plakası</div>*/}
                    {/*                        <div className="col-8">N/A</div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row align-items-center">*/}
                    {/*                        <div className="col-4">Ekip Atama Zamanı:</div>*/}
                    {/*                        <div className="col-8">*/}
                    {/*                            <div className="input-group mb-3">*/}
                    {/*                                <input type="text" className="form-control"*/}
                    {/*                                       aria-describedby="deploymentIncidentBtn"*/}
                    {/*                                       id={"deploymentIncident"}*/}
                    {/*                                       style={{height: "32px"}} readOnly/>*/}
                    {/*                                <button className="btn btn-outline-success py-0 m-0" type="button"*/}
                    {/*                                        id="deploymentIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleButtonClick("deploymentIncident")}>*/}
                    {/*                                    <RxLapTimer*/}
                    {/*                                        size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                                <button className="btn btn-outline-danger py-0 m-0" type="button"*/}
                    {/*                                        id="deploymentIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleRemoveInput("deploymentIncident")}>*/}
                    {/*                                    <RiDeleteBin5Line size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row ps-5 user-select-none">*/}
                    {/*                        <div className="form-check col-4">*/}
                    {/*                            <input className="form-check-input" type="radio" name="regionType"*/}
                    {/*                                   id="inRegion"/>*/}
                    {/*                            <label className="form-check-label" htmlFor="inRegion">*/}
                    {/*                                Bölge İçi*/}
                    {/*                            </label>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="form-check col-4">*/}
                    {/*                            <input className="form-check-input" type="radio" name="regionType"*/}
                    {/*                                   id="outRegion"/>*/}
                    {/*                            <label className="form-check-label" htmlFor="outRegion">*/}
                    {/*                                Bölge Dışı*/}
                    {/*                            </label>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="form-check col-4">*/}
                    {/*                            <input className="form-check-input" type="radio" name="regionType"*/}
                    {/*                                   id="outProvince"/>*/}
                    {/*                            <label className="form-check-label" htmlFor="outProvince">*/}
                    {/*                                İl Dışı*/}
                    {/*                            </label>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row align-items-center text-center"*/}
                    {/*                         style={{fontSize: "10px"}}>*/}
                    {/*                        <div className="col-2">Çıkış km:</div>*/}
                    {/*                        <div className="col-3">*/}
                    {/*                            <input type="text" className="form-control" id="exitKm"*/}
                    {/*                                   style={{fontSize: "10px"}}*/}
                    {/*                                   onChange={(e) => setExitKm(e.target.value)}/>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="col-2">Dönüş km:</div>*/}
                    {/*                        <div className="col-3">*/}
                    {/*                            <input type="text" className="form-control" id="entryKm"*/}
                    {/*                                   style={{fontSize: "10px"}}*/}
                    {/*                                   onChange={(e) => setEntryKm(e.target.value)}/>*/}
                    {/*                        </div>*/}
                    {/*                        <div className="col-2">= <span style={{*/}
                    {/*                            borderColor: "red",*/}
                    {/*                            borderStyle: "dashed",*/}
                    {/*                            borderWidth: "0 0 0.5px 0"*/}
                    {/*                        }}>{diffKm}</span> km*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row align-items-center">*/}
                    {/*                        <div className="col-4">Vakaya Çıkış:</div>*/}
                    {/*                        <div className="col-8">*/}
                    {/*                            <div className="input-group mb-1">*/}
                    {/*                                <input type="text" className="form-control"*/}
                    {/*                                       aria-describedby="releaseIncidentBtn" id={"releaseIncident"}*/}
                    {/*                                       style={{height: "32px"}} readOnly/>*/}
                    {/*                                <button className="btn btn-outline-success py-0 m-0" type="button"*/}
                    {/*                                        id="releaseIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleButtonClick("releaseIncident")}>*/}
                    {/*                                    <RxLapTimer*/}
                    {/*                                        size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                                <button className="btn btn-outline-danger py-0 m-0" type="button"*/}
                    {/*                                        id="deploymentIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleRemoveInput("releaseIncident")}>*/}
                    {/*                                    <RiDeleteBin5Line size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row align-items-center">*/}
                    {/*                        <div className="col-4">Olay Yerine Varış:</div>*/}
                    {/*                        <div className="col-8">*/}
                    {/*                            <div className="input-group mb-1">*/}
                    {/*                                <input type="text" className="form-control"*/}
                    {/*                                       aria-describedby="arrivalSceneBtn" id={"arrivalScene"}*/}
                    {/*                                       style={{height: "32px"}} readOnly/>*/}
                    {/*                                <button className="btn btn-outline-success py-0 m-0" type="button"*/}
                    {/*                                        id="arrivalSceneBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleButtonClick("arrivalScene")}>*/}
                    {/*                                    <RxLapTimer*/}
                    {/*                                        size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                                <button className="btn btn-outline-danger py-0 m-0" type="button"*/}
                    {/*                                        id="deploymentIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleRemoveInput("arrivalScene")}>*/}
                    {/*                                    <RiDeleteBin5Line size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row align-items-center">*/}
                    {/*                        <div className="col-4">Vakaya Varış:</div>*/}
                    {/*                        <div className="col-8">*/}
                    {/*                            <div className="input-group mb-1">*/}
                    {/*                                <input type="text" className="form-control"*/}
                    {/*                                       aria-describedby="arrivalIncidentBtn" id={"arrivalIncident"}*/}
                    {/*                                       style={{height: "32px"}} readOnly/>*/}
                    {/*                                <button className="btn btn-outline-success py-0 m-0" type="button"*/}
                    {/*                                        id="arrivalIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleButtonClick("arrivalIncident")}>*/}
                    {/*                                    <RxLapTimer*/}
                    {/*                                        size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                                <button className="btn btn-outline-danger py-0 m-0" type="button"*/}
                    {/*                                        id="deploymentIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleRemoveInput("arrivalIncident")}>*/}
                    {/*                                    <RiDeleteBin5Line size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row align-items-center">*/}
                    {/*                        <div className="col-4">Olay Yerinden Ayrılış:</div>*/}
                    {/*                        <div className="col-8">*/}
                    {/*                            <div className="input-group mb-1">*/}
                    {/*                                <input type="text" className="form-control"*/}
                    {/*                                       aria-describedby="departureSceneBtn" id={"departureScene"}*/}
                    {/*                                       style={{height: "32px"}} readOnly/>*/}
                    {/*                                <button className="btn btn-outline-success py-0 m-0" type="button"*/}
                    {/*                                        id="departureSceneBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleButtonClick("departureScene")}>*/}
                    {/*                                    <RxLapTimer*/}
                    {/*                                        size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                                <button className="btn btn-outline-danger py-0 m-0" type="button"*/}
                    {/*                                        id="deploymentIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleRemoveInput("departureScene")}>*/}
                    {/*                                    <RiDeleteBin5Line size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row align-items-center">*/}
                    {/*                        <div className="col-4">Hastaneye Varış:</div>*/}
                    {/*                        <div className="col-8">*/}
                    {/*                            <div className="input-group mb-1">*/}
                    {/*                                <input type="text" className="form-control"*/}
                    {/*                                       aria-describedby="arrivalHospitalBtn" id={"arrivalHospital"}*/}
                    {/*                                       style={{height: "32px"}} readOnly/>*/}
                    {/*                                <button className="btn btn-outline-success py-0 m-0" type="button"*/}
                    {/*                                        id="arrivalHospitalBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleButtonClick("arrivalHospital")}>*/}
                    {/*                                    <RxLapTimer*/}
                    {/*                                        size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                                <button className="btn btn-outline-danger py-0 m-0" type="button"*/}
                    {/*                                        id="deploymentIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleRemoveInput("arrivalHospital")}>*/}
                    {/*                                    <RiDeleteBin5Line size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row align-items-center">*/}
                    {/*                        <div className="col-4">Hastaneden Ayrılış:</div>*/}
                    {/*                        <div className="col-8">*/}
                    {/*                            <div className="input-group mb-1">*/}
                    {/*                                <input type="text" className="form-control"*/}
                    {/*                                       aria-describedby="departureHospitalBtn"*/}
                    {/*                                       id={"departureHospital"}*/}
                    {/*                                       style={{height: "32px"}} readOnly/>*/}
                    {/*                                <button className="btn btn-outline-success py-0 m-0" type="button"*/}
                    {/*                                        id="departureHospitalBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleButtonClick("departureHospital")}>*/}
                    {/*                                    <RxLapTimer*/}
                    {/*                                        size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                                <button className="btn btn-outline-danger py-0 m-0" type="button"*/}
                    {/*                                        id="deploymentIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleRemoveInput("departureHospital")}>*/}
                    {/*                                    <RiDeleteBin5Line size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="row align-items-center">*/}
                    {/*                        <div className="col-4">İstasyona Varış:</div>*/}
                    {/*                        <div className="col-8">*/}
                    {/*                            <div className="input-group mb-1">*/}
                    {/*                                <input type="text" className="form-control"*/}
                    {/*                                       aria-describedby="arrivalStationBtn" id={"arrivalStation"}*/}
                    {/*                                       style={{height: "32px"}} readOnly/>*/}
                    {/*                                <button className="btn btn-outline-success py-0 m-0" type="button"*/}
                    {/*                                        id="arrivalStationBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleButtonClick("arrivalStation")}>*/}
                    {/*                                    <RxLapTimer*/}
                    {/*                                        size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                                <button className="btn btn-outline-danger py-0 m-0" type="button"*/}
                    {/*                                        id="deploymentIncidentBtn" style={{height: "32px"}}*/}
                    {/*                                        onClick={() => handleRemoveInput("arrivalStation")}>*/}
                    {/*                                    <RiDeleteBin5Line size={"18px"}/>*/}
                    {/*                                </button>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}

                    {/*            ) :*/}
                    {/*            (*/}
                    {/*                <p>Ekip bilgilerini görmek için bir ekip adına tıklayın.</p>*/}
                    {/*            )*/}
                    {/*    }*/}
                    {/*</div>*/}

                </div>
            </div>
        </div>
        <div className="tab-pane fade" id="v-pills-department" role="tabpanel"
             aria-labelledby="v-pills-department-tab" tabIndex="0">Kuruma Özgü İşlemler...
        </div>
        <div className="tab-pane fade" id="v-pills-hospital" role="tabpanel"
             aria-labelledby="v-pills-hospital-tab" tabIndex="0">Hastane İşlemleri...
        </div>
    </div>)
}

export default HealthActive;