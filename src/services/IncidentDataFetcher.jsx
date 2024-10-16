import { useEffect } from 'react';
import axios from 'axios';

const IncidentDataFetcher = () => {

    useEffect(() => {
        const sendUniqueIncidentDefinitions = async (incidentDefinitions) => {
            // try {
            //     const uniqueKeys = new Set();
            //
            //     for (const definition of incidentDefinitions) {
            //         const key = Object.keys(definition)[0];
            //         if (key) {
            //             uniqueKeys.add(key.trim());
            //         }
            //     }
            //
            //     const requests = Array.from(uniqueKeys).map(name => ({
            //         name: name
            //     }));
            //
            //
            //     requests.forEach((request) => {
            //         console.log(request);
            //         const response =
                        await axios.post('http://localhost:8002/incident/save');

            //         console.log('Veri başarıyla gönderildi:', response);
            //     })
            //
            //
            // } catch (error) {
            //     console.error('Backend ile iletişim hatası:', error);
            // }
        };

        const fetchIncidentData = async () => {
            try {
                const response = await axios.get('http://localhost:8002/incident');
                const data = response.data;
                await sendUniqueIncidentDefinitions(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchIncidentData();
    }, []);

    return (
        <div>
            <h1>Veriler Alınıyor ve Gönderiliyor...</h1>
        </div>
    );
};

export default IncidentDataFetcher;
