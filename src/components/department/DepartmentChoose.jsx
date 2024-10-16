import PropTypes from "prop-types";
import HealthEvent from "./healthEvent.jsx";
import PoliceEvent from "./policeEvent.jsx";
import GendarmeEvent from "./gendarmeEvent.jsx";
import FireDepartmentEvent from "./fireDepartmentEvent.jsx";
import ForestryEvent from "./forestryEvent.jsx";
import DAEMEvent from "./DAEMEvent.jsx";
import CoastGuardEvent from "./coastGuardEvent.jsx";
import IncidentService from "../../services/incidentService.js";
import {useEffect, useState} from "react";
import {departmentList} from "../../utils/departmentUtils.js";

function DepartmentChoose({id}) {
    const [departmentData, setDepartmentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const localData = localStorage.getItem("user") || null;
    const data = JSON.parse(localData).data.data.departmentName;
    const service = new IncidentService();


    useEffect(() => {
        let result;

        async function fetchData() {
            try {
                //for (const key of Object.keys(departmentList)) {
                    result = await service.getOneDetailsById("health", id);
                //}

                setDepartmentData(result);
            } catch (error) {
                console.error("Veri çekilirken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    const selectionBlock = () => null;

    if (data === "HEALTH") {
        return (<HealthEvent data={departmentData} onSelectChange={selectionBlock}/>)
    } else if (data === "POLICE") {
        return (<PoliceEvent data={departmentData["police"]} onSelectChange={selectionBlock}/>)
    } else if (data === "GENDARME") {
        return (<GendarmeEvent data={departmentData["gendarme"]} onSelectChange={selectionBlock}/>)
    } else if (data === "FIRE") {
        return (<FireDepartmentEvent data={departmentData["fire_department"]} onSelectChange={selectionBlock}/>)
    } else if (data === "FORESTRY") {
        return (<ForestryEvent data={departmentData["forestry"]} onSelectChange={selectionBlock}/>)
    } else if (data === "DAEM") {
        return (<DAEMEvent data={departmentData["daem"]} onSelectChange={selectionBlock}/>)
    } else if (data === "COAST_GUARD") {
        return (<CoastGuardEvent data={departmentData["coast_guard"]} onSelectChange={selectionBlock}/>)
    }

    return (<div>Yetki Hatası!...</div>);
}

DepartmentChoose.propTypes = {
    id: PropTypes.node.isRequired,
}
export default DepartmentChoose;