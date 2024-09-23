import {CgPlayListAdd} from "react-icons/cg";
import {GrAdd} from "react-icons/gr";

function PoliceActive() {
    return (
        <div className="w-100 ps-3 m-0 pb-2" style={{height: "97%"}}>
            <div className="row h-100">
                <div className="col-3">
                    <div className="row">Kaynak Detayları</div>
                    <div className="row">
                        <div className="col-6">

                            <div className="row">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Kanal</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div className="row">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                            </div>
                        </div>
                        <div className="col-5  ms-2">
                            <div className="row">
                                <label htmlFor="exampleFormControlInput1" className="form-label">İlçe</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="row">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <table className="table">
                        <thead className="bg-white sticky-top">
                        <tr>
                            <th scope="col">Kanal</th>
                            <th scope="col">Anons Edildi</th>
                            <th scope="col">Anons Zamanı</th>
                            <th scope="col">Ekip İntikal Zamanı</th>
                            <th scope="col">Durum</th>
                            <th scope="col">Ekip Açıklamaları</th>
                            <th scope="col">Ekip Kodu</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td scope="row">ABC</td>
                            <td><input className="form-check-input" type="checkbox" value="" id="announcedCrew1"/></td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>GÜNCELLENDİ</td>
                            <td><CgPlayListAdd size={"24px"}/></td>
                            <td>8074</td>
                        </tr>
                        <tr>
                            <td scope="row">ABC</td>
                            <td><input className="form-check-input" type="checkbox" value="" id="announcedCrew1"/></td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>GÜNCELLENDİ</td>
                            <td><CgPlayListAdd size={"24px"}/></td>
                            <td>5512</td>
                        </tr>
                        <tr>
                            <td scope="row">ABC</td>
                            <td><input className="form-check-input" type="checkbox" value="" id="announcedCrew1"/></td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>OKUNDU</td>
                            <td><CgPlayListAdd size={"24px"}/></td>
                            <td>8074</td>
                        </tr>
                        <tr>
                            <td scope="row">ABC</td>
                            <td><input className="form-check-input" type="checkbox" value="" id="announcedCrew1"/></td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>GÜNCELLENDİ</td>
                            <td><CgPlayListAdd size={"24px"}/></td>
                            <td>8074</td>
                        </tr>
                        <tr>
                            <td scope="row">ABC</td>
                            <td><input className="form-check-input" type="checkbox" value="" id="announcedCrew1"/></td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>OKUNDU</td>
                            <td><CgPlayListAdd size={"24px"}/></td>
                            <td>8074</td>
                        </tr>
                        <tr>
                            <td scope="row">ABC</td>
                            <td><input className="form-check-input" type="checkbox" value="" id="announcedCrew1"/></td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>GÜNCELLENDİ</td>
                            <td><CgPlayListAdd size={"24px"}/></td>
                            <td>8074</td>
                        </tr>
                        <tr>
                            <td scope="row">ABC</td>
                            <td><input className="form-check-input" type="checkbox" value="" id="announcedCrew1"/></td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>OKUNMADI</td>
                            <td><CgPlayListAdd size={"24px"}/></td>
                            <td>8074</td>
                        </tr>
                        <tr>
                            <td scope="row">ABC</td>
                            <td><input className="form-check-input" type="checkbox" value="" id="announcedCrew1"/></td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>OKUNMADI</td>
                            <td><CgPlayListAdd size={"24px"}/></td>
                            <td>8074</td>
                        </tr>
                        <tr>
                            <td scope="row">ABC</td>
                            <td><input className="form-check-input" type="checkbox" value="" id="announcedCrew1"/></td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>01 Ocak 2025 12:34:56</td>
                            <td>OKUNDU</td>
                            <td><CgPlayListAdd size={"24px"}/></td>
                            <td>8074</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <div className="col-3">
                    <div className="row">
                        <div className="col-8">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="Plaka Girişi"/>
                                <label htmlFor="floatingInput">Plaka Girişi</label>
                            </div>
                        </div>
                        <div className="col-3">
                            <button type="button" className="btn btn-success"><GrAdd size={"24px"}/></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Plakalar</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PoliceActive;