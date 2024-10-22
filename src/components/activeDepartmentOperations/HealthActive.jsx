import {FaLocationArrow} from "react-icons/fa6";
import {FiEdit3} from "react-icons/fi";
import {TbHospital} from "react-icons/tb";
import {RxLapTimer} from "react-icons/rx";
import {useEffect, useState} from "react";
import {IoIosSave} from "react-icons/io";
import {RiDeleteBin5Line} from "react-icons/ri";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {syncHealth} from "../../store/actions/healthActions.js";
import store from "../../store/configureStore.js";

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
                       isEditing,
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
                        <td
                            onClick={() => handleCrewClick(crew)}
                            style={{cursor: "pointer"}}
                        >
                            {isEditing === index ? (
                                <input
                                    type="text"
                                    className="form-control"
                                    value={updatedCrewName}
                                    onChange={(e) => setUpdatedCrewName(e.target.value)}
                                />
                            ) : typeof crew === "object" ? crew.name : crew}
                        </td>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value=""/>
                            </div>
                        </td>
                        <td>
                            <FaLocationArrow size={"24px"} style={{cursor: "pointer"}}/>
                        </td>
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
                        <td>
                            <TbHospital size={"24px"} style={{cursor: "pointer"}}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

CrewTable.propTypes = {
    crewList: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleCrewClick: PropTypes.func.isRequired,
    handleEditClick: PropTypes.func.isRequired,
    handleUpdateSave: PropTypes.func.isRequired,
    updatedCrewName: PropTypes.string.isRequired,
    setUpdatedCrewName: PropTypes.func.isRequired,
    isEditing: PropTypes.number,
};

const InputGroup = ({id, handleButtonClick, handleRemoveInput, defaultValue}) => {
    const handleTimeButtonClick = () => {
        const now = new Date();
        const formattedTime = now.toLocaleString("tr-TR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
        handleButtonClick(id, formattedTime);
    };

    return (
        <div className="input-group mb-1">
            <input
                type="text"
                className="form-control"
                aria-describedby={`${id}Btn`}
                id={id}
                style={{height: "24px"}}
                readOnly
                defaultValue={defaultValue}
            />
            <button
                className="btn btn-outline-success py-0 px-2 m-0"
                type="button"
                id={`${id}Btn`}
                style={{height: "24px"}}
                onClick={handleTimeButtonClick}
            >
                <RxLapTimer size={"12px"}/>
            </button>
            <button
                className="btn btn-outline-danger py-0 px-2 m-0"
                type="button"
                id={`${id}RemoveBtn`}
                style={{height: "24px"}}
                onClick={() => handleRemoveInput(id)}
            >
                <RiDeleteBin5Line size={"12px"}/>
            </button>
        </div>
    );
};

InputGroup.propTypes = {
    id: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func.isRequired,
    handleRemoveInput: PropTypes.func.isRequired,
    defaultValue: PropTypes.string,
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
    const propsData = useSelector(state => state.health.healthProps)
    const handleButtonClick = (id, formattedTime) => {
        const inputElement = document.getElementById(id);
        if (inputElement) {
            inputElement.value = formattedTime;
        }
    };

    const handleRemoveInput = (id) => {
        const inputElement = document.getElementById(id);
        if (inputElement) {
            inputElement.value = "";
        }
    };


    let crewList = [];

    const handleSaveTimeClick = () => {
        const crewData = {
            name: selectedCrewDetails?.name || 'Unknown',
            times: {},
        };

        inputFields.forEach(({id}) => {
            const inputElement = document.getElementById(id);
            if (inputElement) {
                crewData.times[id] = inputElement.value || '';
            }
        });

        const existingCrewIndex = crewList.findIndex(
            (crew) => crew.name === crewData.name
        );

        if (existingCrewIndex !== -1) {
            console.log(`Existing crew found at index ${existingCrewIndex}. Updating times...`);
            crewList[existingCrewIndex].times = {
                ...crewList[existingCrewIndex].times,
                ...crewData.times,
            };
        } else {
            crewList.push(crewData);
            console.log("New crew added successfully.");
        }

        dispatch(syncHealth({}, {crews: crewList}));
        console.log("Crew list dispatched:", JSON.stringify(crewList));
    };


    useEffect(() => {
        if (selectedCrewDetails && selectedCrewDetails.times) {
            inputFields.forEach(({id}) => {
                const inputElement = document.getElementById(id);
                if (inputElement && selectedCrewDetails.times[id]) {
                    inputElement.value = selectedCrewDetails.times[id];
                }
            });
        }
    }, [selectedCrewDetails]);

    return (
        <div className="col-5 align-items-center overflow-y-auto" style={{fontSize: "12px", height: "90%"}}>
            <div>Ekip Kayıt Bilgileri</div>
            {Object.keys(selectedCrewDetails).length > 0 ? (
                <div className="col-12 h-100">
                    <div className="row">
                        <div className="col-4">Ekip Adı</div>
                        <div className="col-3">
                            <strong>{selectedCrewDetails.name}</strong>
                        </div>
                        <div className="col-5">
                            <button
                                className="btn btn-outline-danger px-2 m-0 w-100"
                                type="button"
                                id="saveTime"
                                style={{height: "32px", fontSize: "13px"}}
                                onClick={handleSaveTimeClick}
                            >
                                <IoIosSave size={"24px"}/> Zamanları Kaydet
                            </button>
                        </div>
                    </div>
                    {inputFields.map(({label, id}) => (
                        <div className="row align-items-center" key={id}>
                            <div className="col-4">{label}:</div>
                            <div className="col-8">
                                <InputGroup
                                    id={id}
                                    handleButtonClick={handleButtonClick}
                                    handleRemoveInput={handleRemoveInput}
                                    defaultValue={selectedCrewDetails.times?.[id] || ""}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Ekip bilgisi yok</div>
            )}
        </div>
    );
};

CrewDetails.propTypes = {
    selectedCrewDetails: PropTypes.object.isRequired,
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

    useEffect(() => {
        const crewData = store?.getState()?.health?.healthProps?.crewData;
        if (typeof crewData === 'string') {
            setCrewList(Array.isArray(JSON.parse(crewData)) ? JSON.parse(crewData) : []);
        } else {
            setCrewList(Array.isArray(crewData) ? crewData : []);
        }
    }, [])
    const handleButtonClick = (inputId) => {
        const now = new Date();
        const formattedTime = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
        setSelectedCrewDetails(prev => ({...prev, [inputId]: formattedTime}));
    };
    const handleRemoveInput = (inputId) => {
        setSelectedCrewDetails(prev => ({...prev, [inputId]: ''}));
    };

    const handleSave = () => {
        const trimmedCrewName = crewName.trim();

        if (trimmedCrewName && !crewList.some(crew => crew.name === trimmedCrewName)) {
            const newCrew = {name: trimmedCrewName};
            setCrewList(prev => [...prev, newCrew]);
            setCrewName('');
        }
    };

    const handleCrewClick = (crewName) => {
        const selected = crewList.find((crew) => crew === crewName);
        if (selected) {
            setSelectedCrew(selected);
            setSelectedCrewDetails({name: selected.name, times: selected.times});
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