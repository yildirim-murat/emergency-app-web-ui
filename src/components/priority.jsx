
function Priority() {
    return (
        <div className="col-2 align-content-center h-75 form-check form-switch ms-2">
            <input className="form-check-input" type="checkbox" role="switch"
                   id="checkPriority"/>
            <label className="form-check-label user-select-none"
                   htmlFor="checkPriority">Öncelikli Vaka mı?</label>
        </div>
    );
}

export default Priority;