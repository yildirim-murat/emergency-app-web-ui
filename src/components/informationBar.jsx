import {HiPhoneMissedCall} from "react-icons/hi";
import {TbCoffee, TbMapStar, TbReportSearch} from "react-icons/tb";
import {MdOutlineLooksTwo, MdOutlineRecordVoiceOver} from "react-icons/md";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

function InformationBar({setSelectedOption, inCall, setIsConnected}) {
    const [textAvailable, setTextAvailable] = useState("Uygun");
    const [textExemption, setTextExemption] = useState("Çağrı Muafiyeti");
    const [textBreak, setTextBreak] = useState("Mola");

    useEffect(() => {
        changeTextExemption();
    }, [])

    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    const changeTextAvailable = () => {
        const now = new Date();
        setTextExemption("Çağrı Muafiyeti");
        setTextAvailable(`Uygun - ${formatTime(now)}`)
        setTextBreak("Mola")
        setSelectedOption(true);
        setIsConnected(true)
    };

    const changeTextExemption = () => {
        const now = new Date();
        setTextExemption(`Çağrı Muafiyeti - ${formatTime(now)}`);
        setTextAvailable("Uygun")
        setTextBreak("Mola")
        setSelectedOption(false);
        setIsConnected(false)
    };

    const changeTextBreak = () => {
        const now = new Date();
        setTextExemption("Çağrı Muafiyeti");
        setTextAvailable("Uygun")
        setTextBreak(`Mola - ${formatTime(now)}`)
        setSelectedOption(false);
        setIsConnected(false)
    };

    const openSiteSecondScreen = () => {
        window.open("https://ista-wld.ng112.gov.tr/NG112UC/login.html", "_blank");
    }

    const openSiteMaps = () => {
        window.open("https://ista-wld.ng112.gov.tr/NG112UC/login.html", "_blank");
    }

    const openSiteRecords = () => {
        window.open("https://ista-wld.ng112.gov.tr", "_blank");
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-info-subtle">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#secondNavbarSupportedContent" aria-controls="secondNavbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="secondNavbarSupportedContent">
                        <div className="row align-items-center w-100 h-100 user-select-none">
                            <div className="col-lg-3">
                                <div className="btn-group" role="group"
                                     aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnavaliable"
                                           autoComplete="off" onClick={changeTextAvailable}/>
                                    <label className="btn btn-outline-success"
                                           htmlFor="btnavaliable">
                                        {textAvailable}
                                    </label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnexemption"
                                           autoComplete="off" disabled={inCall} onClick={changeTextExemption}
                                           defaultChecked/>
                                    <label className="btn btn-outline-secondary"
                                           htmlFor="btnexemption"><HiPhoneMissedCall size={"1.5rem"}/>
                                        {textExemption}
                                    </label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnbreak"
                                           autoComplete="off" disabled={inCall} onClick={changeTextBreak}/>
                                    <label className="btn btn-outline-danger" htmlFor="btnbreak"><TbCoffee
                                        size={"1.5rem"}/>{textBreak}</label>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className={"btn btn-sm btn-outline-info"} onClick={openSiteSecondScreen}>
                                    <MdOutlineLooksTwo size={"1.5rem"}/>İkinci
                                    Ekran
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <div className={"btn btn-sm btn-outline-info"} onClick={openSiteMaps}><TbMapStar
                                    size={"1.5rem"}/>Harita
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className={"btn btn-sm btn-outline-info"} onClick={openSiteRecords}>
                                    <MdOutlineRecordVoiceOver size={"1.5rem"}/>Ses
                                </div>
                            </div>
                            <div className="col-lg-1">
                                <span className="col pt-2">
                                    <div style={{color: "green",fontWeight: "bold"}}>Sokete Bağlı</div>
                                </span>
                            </div>
                            <div className="col-lg-2"><span className={"d-inline-block text-truncate"}
                                                            style={{fontSize: "12px", maxWidth: "175px"}}>
                            Staff Name (Department Info)
                            </span></div>
                            <div className="col-lg-1">
                                <button className={"btn btn-sm btn-outline-info"} disabled={true}><TbReportSearch
                                    size={"1.5rem"}/>Rapor
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

InformationBar.propTypes = {
    setSelectedOption: PropTypes.func.isRequired,
    inCall: PropTypes.bool.isRequired,
    setIsConnected: PropTypes.func.isRequired
}

export default InformationBar;