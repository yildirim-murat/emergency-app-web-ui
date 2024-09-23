import PropTypes from "prop-types";
import PolicePassive from "../passiveDepartmentOperations/policePassive.jsx";
import HealthPassive from "../passiveDepartmentOperations/healthPassive.jsx";
import GendarmePassive from "../passiveDepartmentOperations/gendarmePassive.jsx";
import FireDepartmentPassive from "../passiveDepartmentOperations/fireDepartmentPassive.jsx";
import DAEMPassive from "../passiveDepartmentOperations/DAEMPassive.jsx";
import CoastGuardPassive from "../passiveDepartmentOperations/coastGuardPassive.jsx";
import ForestryPassive from "../passiveDepartmentOperations/forestryPassive.jsx";
import HealthActive from "../activeDepartmentOperations/HealthActive.jsx";
import PoliceActive from "../activeDepartmentOperations/PoliceActive.jsx";
import GendarmeActive from "../activeDepartmentOperations/gendarmeActive.jsx";
import FireDepartmentActive from "../activeDepartmentOperations/fireDepartmentActive.jsx";
import ForestryActive from "../activeDepartmentOperations/forestryActive.jsx";
import DaemActive from "../activeDepartmentOperations/daemActive.jsx";
import CoastGuardActive from "../activeDepartmentOperations/coastGuardActive.jsx";

function DepartmentContent({data, name}) {
    const departmentContent = {
        health: name === 'health' ? <HealthActive/> : <HealthPassive/>,
        police: name === 'police' ? <PoliceActive/> : <PolicePassive/>,
        gendarme: name === 'gendarme' ? <GendarmeActive/> : <GendarmePassive/>,
        fireDepartment: name === 'fireDepartment' ? <FireDepartmentActive/> : <FireDepartmentPassive/>,
        forestry: name === 'forestry'? <ForestryActive/> : <ForestryPassive/>,
        daem: name === 'daem' ? <DaemActive/> : <DAEMPassive/>,
        coastGuard: name === 'coastGuard' ? <CoastGuardActive/> : <CoastGuardPassive/>,
    };

    return (
        <div className={"w-100 h-100"}>
            {departmentContent[data]}
        </div>
    );
}

DepartmentContent.propTypes = {
    data: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}

export default DepartmentContent;