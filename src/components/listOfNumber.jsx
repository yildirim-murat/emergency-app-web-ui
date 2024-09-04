import PropTypes from "prop-types";

function ListOfNumber({ listOfCall=[] }) {
    return (
        <div>
            <table className="table table-hover table-striped" style={{ fontSize: "11px", cursor: "pointer" }}>
                <thead className={"sticky-top"}>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Numara</th>
                    <th scope="col">Çağrı Zamanı</th>
                    <th scope="col">ID</th>
                </tr>
                </thead>
                <tbody>
                {Array.isArray(listOfCall) && listOfCall.length > 0 ? (
                    listOfCall.map((item, index) => (
                        <tr key={`${item}-${index}`} className={"text-center"}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.calledNumber}</td>
                            <td>{item.createTime} - {item.createDate}</td>
                            <td>{item.createId}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" className="text-center">No data available</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

ListOfNumber.propTypes = {
    listOfCall: PropTypes.arrayOf(
        PropTypes.shape({
            calledNumber: PropTypes.string.isRequired,
            createTime: PropTypes.string.isRequired,
            createDate: PropTypes.string.isRequired,
            createId: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ListOfNumber;