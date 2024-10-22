import {FaEdit} from "react-icons/fa";
import {MdOutlineCancelPresentation, MdOutlineRecycling, MdOutlineSave} from "react-icons/md";
import {GiBrain} from "react-icons/gi";
import {VscFolderActive} from "react-icons/vsc";
import {RiMapPinTimeLine} from "react-icons/ri";
import Address from "../address.jsx";
import CallLogs from "../callLogs.jsx";
import Department from "../department.jsx";
import DepartmentOperations from "./DepartmentOperations.jsx";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import AddressService from "../../services/AddressService.js";
import {useDispatch} from "react-redux";
import {syncHealth} from "../../store/actions/healthActions.js";
import IncidentService from "../../services/incidentService.js";
import store from "../../store/configureStore.js";

function HealthEvent({data, onSelectChange}) {
    const [address, setAddress] = useState({});
    const [trigger, setTrigger] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const addressService = new AddressService();
    const incidentService = new IncidentService();
    const dispatch = useDispatch();

    const [healthData, setHealthData] = useState({
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

    useEffect(() => {
        handleAddress();
    }, []);


    useEffect(() => {
        if (data?.data?.data) {
            setHealthData(prevData => ({
                ...prevData,
                id: data.data.data.id || "",
                incidentId: data.data.data.incidentId || "",
                isPriority: data.data.data.isPriority || false,
                calledNumber: data.data.data.calledNumber || "",
                regionType: data.data.data.regionType || "urban",
                callerName: data.data.data.callerName || "",
                healthDescription: data.data.data.healthDescription || "",
                address: data.data.data.address || {},
                description: data.data.data.description || "",
                incidentDefinition: data.data.data.incidentDefinition || {},
                crewData: data.data.data.crewData || [],
                savedForm: data.data.data.savedOn,
            }));
            setAddress(data.data.data.address || {});

            dispatch(syncHealth({
                id: data.data.data.id || "",
                incidentId: data.data.data.incidentId || "",
                isPriority: data.data.data.isPriority || false,
                calledNumber: data.data.data.calledNumber || "",
                regionType: data.data.data.regionType || "urban",
                callerName: data.data.data.callerName || "",
                healthDescription: data.data.data.healthDescription || "",
                address: data.data.data.address || {},
                description: data.data.data.description || "",
                incidentDefinition: data.data.data.incidentDefinition || {},
                savedForm: data.data.data.savedOn
            }, data.data.data.crewData))
        }
    }, [data]);
    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        onSelectChange(value);
        setHealthData(prevData => ({...prevData, regionType: value}));

    };
    const handleAddress = () => {
        setAddress(data?.data?.data?.address);

    };
    const handleAddressChange = (updatedAddress) => {
        setHealthData(prevData => ({...prevData, address: updatedAddress}));

    };
    const savedStateData = async () => {
        await dispatch(syncHealth(healthData))
    }

    const handleSave = async () => {
        await savedStateData();
        const getData = store.getState().health.healthProps;

        try {
            await incidentService.updateForm(getData);
            console.log("Success updated health form");
        } catch (error) {
            console.error("Error updating health form:", error);
        }
    };


    const handleChange = (key, value) => {
        setHealthData(prevData => ({...prevData, [key]: value}));
    };

    return (
        <div className={"h-100"}>
            <div className="row text-center align-items-center my-2">
                <div className="col-1 btn-outline-info btn mx-1"><FaEdit size={"22px"}/> Değiştir</div>
                <div className="col-1 btn-outline-secondary btn mx-1"><MdOutlineCancelPresentation
                    size={"22px"}/> Vazgeç
                </div>
                <div className="col-1 btn-outline-primary btn mx-1 disabled"><VscFolderActive
                    size={"22px"}/> Etkinleştir
                </div>
                <div className="col-1 btn-outline-success btn mx-1" onClick={handleSave}>
                    <MdOutlineSave size={"24px"}/> Kaydet
                </div>
                <div className="col-1 btn-outline-danger btn mx-1 disabled"><GiBrain size={"22px"}/> Hatırla</div>
                <div className="col-2 btn-outline-primary btn mx-1 disabled"><MdOutlineRecycling
                    size={"22px"}/> Mükerrer Kontrolü
                </div>
                <div className="col-4 mx-1">
                    <select className="form-select" value={selectedOption} onChange={handleSelectChange}>
                        <option value={""}>Seçiniz</option>
                        <option value="s1">Faaliyet Bloğu</option>
                        <option value="s2">Ses Kayıtları</option>
                    </select>
                </div>
            </div>
            <div className="row bg-primary-subtle" style={{height: "40vh"}}>
                <div className="col-3 h-100 user-select-none">
                    <div className="row text-center align-items-center"
                         style={{border: "1px solid #000000", borderRadius: "8px"}}>
                        <div className="col" style={{borderRight: "1px solid #000000"}}>
                            Vaka Nu : <span className={"nu-format"}> {data?.data?.data?.incidentId} </span>
                        </div>
                        <div className="col">Tarih :
                            <span className={"nu-format"} style={{fontSize: "11px"}}>
                                {addressService.formatTime(data?.data?.data?.createdAt)} {addressService.formatDigitalDate(data?.data?.data?.createdAt)}
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row ms-1">Kurum Görevlendirme Zamanı:</div>
                        <div className="row">
                            <div className="input-group my-2">
                                <input type="text" className="form-control"
                                       placeholder={`${addressService.formatTime(data?.data?.data?.createdAt)} ${addressService.formatDigitalDate(data?.data?.data?.createdAt)}`}
                                       aria-label="date time" aria-describedby="button-addon2" disabled={true}/>
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                                        disabled={true}><RiMapPinTimeLine size={"20px"}/></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={healthData.isPriority}
                                        id="priorityCheck"
                                        onChange={(e) => handleChange('isPriority', e.target.checked)}
                                    />
                                    <label className="form-check-label" htmlFor="priorityCheck">
                                        Öncelikli
                                    </label>
                                </div>
                            </div>
                            <div className="col-3 bg-danger-subtle" style={{borderRadius: "10px 0 0 10px"}}>
                                <input className="form-check-input" type="radio" name="region" id="radioRegionUrban"
                                       value="urban" onChange={(e) => handleChange('regionType', e.target.value)}
                                       checked={healthData.regionType === "urban"}/>
                                <label className="form-check-label" htmlFor="radioRegionUrban">
                                    Kentsel
                                </label>
                            </div>
                            <div className="col-3 bg-danger-subtle" style={{borderRadius: "0 10px 10px 0"}}>
                                <input className="form-check-input" type="radio" name="region" id="radioRegionRural"
                                       value="rural" onChange={(e) => handleChange('regionType', e.target.value)}
                                       checked={healthData.regionType === "rural"}/>
                                <label className="form-check-label" htmlFor="radioRegionRural">
                                    Kırsal
                                </label>
                            </div>
                        </div>
                        <div className="row ms-2">Olay Türü</div>
                        <div className="row">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Arama..." aria-label="search"
                                       aria-describedby="basic-addon1" disabled={true}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 overflow-hidden" style={{maxHeight: "150px", overflowY: "auto"}}>
                                {data?.data?.data?.incidentDefinition?.definition
                                    ? data.data.data.incidentDefinition.definition.includes(',')
                                        ? data.data.data.incidentDefinition.definition.split(',').map((line, index) => {
                                            const trimmedLine = line.trim();
                                            return (
                                                <div key={index}>
                                                    <b>{trimmedLine}</b>
                                                    {data?.data?.data?.incidentDefinition?.subDefinition?.includes(trimmedLine) && (
                                                        <div style={{marginLeft: '20px'}}>
                                                            ==&gt; {data?.data?.data?.incidentDefinition?.subDefinition.split(':')[1]?.trim()}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })
                                        : <div><b>{data.data.data.incidentDefinition.definition}</b></div>
                                    : <div>Data not available.</div>
                                }
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 ps-4 user-select-none">
                    <div className="row">
                        Olay Tanımı
                        <div className="row">
                            <div className="mb-3">
                                <input className="form-control" id="definitionInput" value={healthData.definition}
                                       onChange={(e) => handleChange('definition', e.target.value)}
                                       placeholder={data?.data?.data?.description}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        Arayan veya hasta Adı Soyadı
                        <div className="row">
                            <div className="mb-3">
                                <textarea className="form-control" id="callerNameInput" value={healthData.callerName}
                                          onChange={(e) => handleChange('callerName', e.target.value)}
                                          style={{maxHeight: "55px", overflowY: "auto"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        Sağlık Açıklama
                        <div className="row">
                            <div className="mb-3">
                                <textarea className="form-control" id="healthDescriptionInput"
                                          value={healthData.healthDescription}
                                          onChange={(e) => handleChange('healthDescription', e.target.value)}
                                          style={{maxHeight: "68px", overflowY: "auto"}}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        Diğer Kurum Açıklamaları
                        <div className="row">
                            <div className="mb-3">
                                <textarea className="form-control" id="desc-other-department" readOnly={true}
                                          style={{maxHeight: "55px", overflowY: "auto"}}
                                          placeholder={data?.data?.data?.description}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 h-100 p-0 m-0">
                    <Address data={address} triggerUpdate={trigger} onAddressChange={handleAddressChange}/>
                </div>
                <div className="col-2 bg-white h-100 p-0 m-0 user-select-none" style={{overflow: "hidden"}}>
                    <CallLogs isSmall={true} number={data?.data?.data}/>
                </div>
                <div className="col-2 user-select-none">
                    <Department
                        isSmall={true}
                        onSelectionChange={onSelectChange}
                    />
                </div>
            </div>
            <div className="row overflow-hidden p-0 m-0" style={{height: "38vh"}}>
                <DepartmentOperations name={"health"}/>
                {/*Buradayım. Department Name dinamik gelecek.*/}
            </div>
        </div>
    );
}

HealthEvent.propTypes = {
    data: PropTypes.shape({
        data: PropTypes.shape({
            data: PropTypes.shape({
                id: PropTypes.number,
                isPriority: PropTypes.bool,
                createdAt: PropTypes.string,
                incidentId: PropTypes.number,
                address: PropTypes.object,
                description: PropTypes.string,
                calledNumber: PropTypes.string,
                callerName: PropTypes.string,
                regionType: PropTypes.string,
                healthDescription: PropTypes.string,
                incidentDefinition: PropTypes.shape({
                    definition: PropTypes.string,
                    subDefinition: PropTypes.string
                }),
                crewData: PropTypes.string,
                savedOn: PropTypes.string
            }),
            address: PropTypes.object,
            incidentId: PropTypes.string,
            createdAt: PropTypes.string,
            incidentDefinition: PropTypes.object,
            description: PropTypes.string
        })
    }),
    onSelectChange: PropTypes.func
};

export default HealthEvent;