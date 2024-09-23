import {IoIosSave} from "react-icons/io";
import {RxLapTimer} from "react-icons/rx";
import {RiDeleteBin5Line} from "react-icons/ri";
import {Button} from "react-bootstrap";
import {MdOutlineModeEditOutline, MdOutlineMyLocation} from "react-icons/md";
import {useEffect, useState} from "react";

function FireDepartmentActive() {
    const [exitKm, setExitKm] = useState(0);
    const [entryKm, setEntryKm] = useState(0);
    const [diffKm, setDiffKm] = useState(0);

    useEffect(() => {
            let difference = entryKm - exitKm
            if (difference < 0) {
                difference = 0;
            }
            setDiffKm(difference)
        }, [exitKm, entryKm]
    )


    const handleButtonClick = (inputId) => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        document.getElementById(inputId).value = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    };

    const handleRemoveInput = (inputId) => {
        document.getElementById(inputId).value = '';
    }

    return (
        <div className="d-flex align-items-start w-100 h-100 overflow-hidden">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active" id="v-pills-base-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-base" type="button" role="tab" aria-controls="v-pills-base"
                        aria-selected="true">Temel İşlemler
                </button>
                <button className="nav-link" id="v-pills-department-tab" data-bs-toggle="pill"
                        data-bs-target="#v-pills-department" type="button" role="tab" aria-controls="v-pills-department"
                        aria-selected="false">Kuruma Özgü İşlemler
                </button>
            </div>
            <div className="tab-content h-100 " style={{width: "200vh"}} id="v-pills-tabContent">
                <div className="tab-pane fade show active w-100 h-100" id="v-pills-base" role="tabpanel"
                     aria-labelledby="v-pills-base-tab" tabIndex="0">
                    <div className="row w-100 h-100 py-1">
                        <div className="col-2">
                            <div className="row">
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="crewSearch"
                                           placeholder="Ekip Ara"/>
                                </div>
                            </div>
                            <div className="row h-75">
                                <table className="table h-100">
                                    <tbody>
                                    <tr className={"align-items-start"}>
                                        {/*{filteredList.map((item, key) => (*/}
                                        {/*    <AccordionRow*/}
                                        {/*        key={key + 1}*/}
                                        {/*        index={key + 1}*/}
                                        {/*        content={item}*/}
                                        {/*        incidentsList={incidentsList}*/}
                                        {/*        onHeaderSelect={handleHeaderSelect}*/}
                                        {/*        onSubItemSelect={handleSubItemSelect}*/}
                                        {/*        selectedHeaders={selectedHeaders}*/}
                                        {/*        selectedSubItems={selectedSubItems[item] || []}*/}
                                        {/*    />*/}
                                        {/*))}*/}
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-6 h-75 overflow-y-auto">Atanmış Kaynaklar
                            <table className={"text-center"} style={{fontSize: "12px"}}>
                                <thead>
                                <tr className={"sticky-top bg-white"}>
                                    <th className="col-1">Takım Adı</th>
                                    <th className="col-1">Kaynak Adı</th>
                                    <th className="col-1">Kaynak Tipi</th>
                                    <th className="col-1">Plakası</th>
                                    <th className="col-1">Durum</th>
                                    <th className="col-1">Atandı</th>
                                    <th className="col-1">Uygun mu?</th>
                                    <th className="col-1"></th>
                                    <th className="col-1"></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Kurtuluş</td>
                                    <td>Kurtuluş</td>
                                    <td>Hizmet Aracı</td>
                                    <td>06 ABC 123</td>
                                    <td>Uygun</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="crewAssigned"/>
                                        </div>
                                    </td>
                                    <td><Button type={"button"}
                                                className={"btn btn-light"}><MdOutlineMyLocation/></Button></td>
                                    <td><Button type={"button"} className={"btn btn-light"}><MdOutlineModeEditOutline/></Button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-4 align-items-center overflow-y-auto"
                             style={{fontSize: "12px", height: "85%"}}>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-4">Ekip Adı:</div>
                                    <div className="col-3">213</div>
                                    <div className="col-5">
                                        <button className="btn btn-outline-danger px-2 m-0 w-100" type="button"
                                                id="saveTime" style={{height: "32px", fontSize: "13px"}}><IoIosSave
                                            size={"24px"}/>Zamanları Kaydet
                                        </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">Kaynak Adı</div>
                                    <div className="col-8">ABC</div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Kaynak Atama Zamanı:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control"
                                                   aria-describedby="assignResourcesBtn"
                                                   id={"assignResources"}
                                                   style={{height: "32px"}}/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="assignResourcesBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("assignResources")}>
                                                <RxLapTimer
                                                    size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="assignResourcesRmvBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("assignResources")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ps-5 user-select-none">
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
                                </div>
                                <div className="row align-items-center text-center"
                                     style={{fontSize: "10px"}}>
                                    <div className="col-2">Çıkış km:</div>
                                    <div className="col-3">
                                        <input type="text" className="form-control" id="exitKm"
                                               style={{fontSize: "10px"}} onChange={(e) => setExitKm(e.target.value)}/>
                                    </div>
                                    <div className="col-2">Dönüş km:</div>
                                    <div className="col-3">
                                        <input type="text" className="form-control" id="entryKm"
                                               style={{fontSize: "10px"}} onChange={(e) => setEntryKm(e.target.value)}/>
                                    </div>
                                    <div className="col-2">= <span style={{
                                        borderColor: "red",
                                        borderStyle: "dashed",
                                        borderWidth: "0 0 0.5px 0"
                                    }}>{diffKm}</span> km
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">İstasyondan Ayrıldım:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="leaveStationBtn"
                                                   id={"leaveStation"}
                                                   style={{height: "32px"}}/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="leaveStationBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("leaveStation")}>
                                                <RxLapTimer
                                                    size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="leaveStationRmvBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("leaveStation")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Olay Yerine Vardım:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="arrivalSceneBtn"
                                                   id={"arrivalScene"}
                                                   style={{height: "32px"}}/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="arrivalSceneBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("arrivalScene")}>
                                                <RxLapTimer
                                                    size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="arrivalSceneRmvBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("arrivalScene")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Vakaya Ulaştım:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="arrivalIIncidentBtn"
                                                   id={"arrivalIIncident"}
                                                   style={{height: "32px"}}/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="arrivalIIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("arrivalIIncident")}>
                                                <RxLapTimer
                                                    size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="arrivalIIncidentRmvBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("arrivalIIncident")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">Vakadan Ayrıldım:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="departureIncidentBtn"
                                                   id={"departureIncident"}
                                                   style={{height: "32px"}}/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="departureIncidentBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("departureIncident")}>
                                                <RxLapTimer
                                                    size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="departureIncidentRmvBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("departureIncident")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-4">İstasyona Ulaştım:</div>
                                    <div className="col-8">
                                        <div className="input-group mb-1">
                                            <input type="text" className="form-control"
                                                   aria-describedby="arrivalStationBtn"
                                                   id={"arrivalStation"}
                                                   style={{height: "32px"}}/>
                                            <button className="btn btn-outline-success py-0 m-0" type="button"
                                                    id="arrivalStationBtn" style={{height: "32px"}}
                                                    onClick={() => handleButtonClick("arrivalStation")}>
                                                <RxLapTimer
                                                    size={"18px"}/>
                                            </button>
                                            <button className="btn btn-outline-danger py-0 m-0" type="button"
                                                    id="departureIncidentRmvBtn" style={{height: "32px"}}
                                                    onClick={() => handleRemoveInput("arrivalStation")}>
                                                <RiDeleteBin5Line size={"18px"}/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="v-pills-department" role="tabpanel"
                 aria-labelledby="v-pills-department-tab" tabIndex="0">Kuruma Özgü İşlemler...
            </div>
        </div>
    );
}

export default FireDepartmentActive;