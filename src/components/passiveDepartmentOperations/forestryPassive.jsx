function ForestryPassive() {
    return (
        <div className="w-100 ps-3 m-0 pb-2" style={{height: "97%"}}>
            <button className={"row btn btn-outline-success"} type="button">Yenile</button>
            <div className="row">Kurum Adı: ORMAN <br/> Atanan Kaynaklar:</div>
            <div className="row" style={{height: "90%"}}>
                <div className="col-2">Vaka Zaman Bilgileri <br/> Başlama Zamanı: <br/> Kontrol Altına Alış
                    Zamanı: <br/> Söndürme Zamanı:
                </div>
                <div className="col-10">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ForestryPassive;