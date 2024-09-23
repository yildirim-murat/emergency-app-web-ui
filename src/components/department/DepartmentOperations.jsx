import PropTypes from "prop-types";
import TabMenu from "./TabMenu";

function DepartmentOperations({name}) {

    return (
        <div
            className={`col-12 m-2 w-100 h-100 overflow-hidden d-flex ${name === "health" ? "flex-row align-items-center" : "flex-column align-items-start"} `}>
            {name === "health" ? <TabMenu vertical={true} name={name}/> : <TabMenu vertical={false} name={name}/>}
        </div>
    );
}

DepartmentOperations.propTypes = {
    name: PropTypes.string.isRequired,
};

export default DepartmentOperations;
