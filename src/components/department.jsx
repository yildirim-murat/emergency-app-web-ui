import { RiPoliceBadgeLine } from "react-icons/ri";
import { LiaAmbulanceSolid } from "react-icons/lia";
import { MdLocalPolice, MdOutlineFireTruck } from "react-icons/md";
import { GiCircleForest } from "react-icons/gi";
import { TbRadioactiveFilled } from "react-icons/tb";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const MASKS = {
    Emniyet: 1,
    Sağlık: 2,
    Jandarma: 4,
    İtfaiye: 8,
    Orman: 16,
    Afad: 32,
};

function Department({ isSmall, onSelectionChange }) {
    const [selectedMask, setSelectedMask] = useState(0);

    useEffect(() => {
        onSelectionChange(getSelectedLabels());
    }, [selectedMask]);

    const getSelectedLabels = () => {
        return Object.keys(MASKS).filter(key => (selectedMask & MASKS[key]) !== 0).join(', ');
    };

    const handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        const mask = MASKS[id];

        if (checked) {
            setSelectedMask(prev => prev | mask);
        } else {
            setSelectedMask(prev => prev & ~mask);
        }
    };

    return (
        isSmall ? (
            <div className="d-flex h-100 p-0 m-0 mt-4 w-100 flex-wrap align-items-center justify-content-center">
                <input type="checkbox" className="btn-check" id="Emniyet" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-50 text-start align-content-center" htmlFor="Emniyet" style={{ height: '11%', fontSize: "20px" }}>
                    <RiPoliceBadgeLine size={"20px"} /> Emniyet
                </label>

                <input type="checkbox" className="btn-check" id="Sağlık" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-50 text-start align-content-center" htmlFor="Sağlık" style={{ height: '11%', fontSize: "20px" }}>
                    <LiaAmbulanceSolid size={"20px"} /> Sağlık
                </label>

                <input type="checkbox" className="btn-check col" id="Jandarma" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-50 text-start align-content-center" htmlFor="Jandarma" style={{ height: '11%', fontSize: "16px" }}>
                    <MdLocalPolice size={"20px"} /> Jandarma
                </label>

                <input type="checkbox" className="btn-check col" id="İtfaiye" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-50 text-start align-content-center" htmlFor="İtfaiye" style={{ height: '11%', fontSize: "20px" }}>
                    <MdOutlineFireTruck size={"20px"} /> İtfaiye
                </label>

                <input type="checkbox" className="btn-check" id="Orman" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-50 text-start align-content-center" htmlFor="Orman" style={{ height: '11%', fontSize: "20px" }}>
                    <GiCircleForest size={"20px"} /> Orman
                </label>

                <input type="checkbox" className="btn-check" id="Afad" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-50 text-start align-content-center" htmlFor="Afad" style={{ height: '11%', fontSize: "20px" }}>
                    <TbRadioactiveFilled size={"20px"} /> Afad
                </label>

                <div className="row h-25"><i>Kurum Ekleyiniz...</i></div>
            </div>
        ) : (
            <div className="d-flex h-100 p-0 m-0 w-100 flex-wrap justify-content-center">
                <input type="checkbox" className="btn-check" id="Emniyet" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-25 text-start" htmlFor="Emniyet" style={{ height: '9%' }}>
                    <RiPoliceBadgeLine size={"14px"} /> Emniyet
                </label>

                <input type="checkbox" className="btn-check" id="Sağlık" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-25 text-start" htmlFor="Sağlık" style={{ height: '9%' }}>
                    <LiaAmbulanceSolid size={"14px"} /> Sağlık
                </label>

                <input type="checkbox" className="btn-check col" id="Jandarma" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-25 text-start" htmlFor="Jandarma" style={{ height: '9%' }}>
                    <MdLocalPolice size={"14px"} /> Jandarma
                </label>

                <input type="checkbox" className="btn-check col" id="İtfaiye" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-25 text-start" htmlFor="İtfaiye" style={{ height: '9%' }}>
                    <MdOutlineFireTruck size={"14px"} /> İtfaiye
                </label>

                <input type="checkbox" className="btn-check" id="Orman" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-25 text-start" htmlFor="Orman" style={{ height: '9%' }}>
                    <GiCircleForest size={"14px"} /> Orman
                </label>

                <input type="checkbox" className="btn-check" id="Afad" autoComplete="off" onChange={handleCheckboxChange} />
                <label className="btn btn-danger mt-1 me-1 w-25 text-start" htmlFor="Afad" style={{ height: '9%' }}>
                    <TbRadioactiveFilled size={"14px"} /> Afad
                </label>
            </div>
        )
    );
}

Department.propTypes = {
    isSmall: PropTypes.bool.isRequired,
    onSelectionChange: PropTypes.func.isRequired,
};

export default Department;
