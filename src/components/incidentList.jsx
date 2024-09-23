function IncidentList() {
    return (
        <div style={{overflowY: 'auto', height: '75vh'}}>
            <table className="table table-hover text-center user-select-none">
                <thead className="sticky-top bg-white">
                <tr>
                    <th scope="col">Sıra No</th>
                    <th scope="col"></th>
                    <th scope="col">Vaka Numarası</th>
                    <th scope="col">Kilitleyen</th>
                    <th scope="col">Olay Türü</th>
                    <th scope="col">Olay Tanımı</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Yayınlanma Zamanı</th>
                    <th scope="col">Adres</th>
                    <th scope="col">Adres Açıklaması</th>
                    <th scope="col">Acil Öncelikli</th>
                    <th scope="col">Çağr. Cevp.</th>
                </tr>
                </thead>
                <tbody>
                <tr className={"table-danger"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}} title={"03121120000"}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-warning"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-danger"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-warning"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-danger"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-warning"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-danger"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-warning"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-danger"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-warning"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-danger"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-warning"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-danger"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-warning"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-success"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                <tr className={"table-primary"} style={{cursor: 'pointer'}}>
                    <th scope="row" className={"text-truncate"} style={{maxWidth: "50px"}}>
                        1
                    </th>
                    <td>
                        <div className="btn btn-outline-success">AÇ</div>
                    </td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>6495462</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 1</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Nakil</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>KAZALAR-MADDI HASARLI</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>03121120000</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>13 Eylül 2024 14:32:54.452</td>
                    <td className={"text-truncate"} style={{maxWidth: "150px"}}>Yenimahalle Varlık Mh. Yayın Sok.</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>NO:65</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Evet</td>
                    <td className={"text-truncate"} style={{maxWidth: "50px"}}>Staff 25</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default IncidentList;