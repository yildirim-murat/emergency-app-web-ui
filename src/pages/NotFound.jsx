
function NotFound() {
    return (
        <div className="d-flex justify-content-center align-items-center h-100 w-100 bg-dark position-relative">
            <div className="col">
                <div className="row position-relative">
                    <img
                        src={"https://cdn.pixabay.com/photo/2024/09/15/09/19/ai-generated-9048642_1280.jpg"}
                        alt={"notFound"}
                        className="img-fluid"
                    />
                    <div className="text-center nu-format" style={{
                        color: "white",
                        fontSize:"42px",
                        fontWeight: "bold",
                        position: "absolute",
                        top: "65%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: "10"
                    }}>
                        Aranan Sayfa Bulunamadı! Lütfen Tekrar Deneyiniz...
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NotFound;