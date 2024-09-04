// import { useEffect, useState } from "react";
//
// function WebSocketTestPage() {
//     const [message, setMessage] = useState([]);
//
//     useEffect(() => {
//         const ws = new WebSocket("ws://localhost:8001/ws");
//
//         ws.onopen = () => {
//             console.log("WebSocket connection established.");
//             ws.send("Connected");
//         };
//
//         ws.onmessage = (event) => {
//             console.log("WebSocket message received:", event);
//             try {
//                 const msg = JSON.parse(event.data);
//                 setMessage(prevState => [...prevState, msg]);
//             }catch (error){
//                 console.log("Message parsing error: " + error);
//             }
//
//         };
//
//         ws.onerror = (event) => {
//             console.error("WebSocket error:", event);
//         };
//
//         return () => {
//             ws.close();
//             console.log("WebSocket connection closed.");
//         };
//     }, []);
//
//     return (
//         <div className="App">
//             <h1>Received Data:</h1>
//             <ul>
//                 {message.map((receiveMessage, index) => (
//                     <li key={index}>
//                         <strong>Phone Number: </strong>: {receiveMessage.phone_number} <br/>
//                         <strong>Time Stamp: </strong>: {receiveMessage.time_stamp} <br/>
//                         <strong>Latitude: </strong>: {receiveMessage.latitude} <br/>
//                         <strong>Longitude: </strong>: {receiveMessage.longitude} <br/>
//                         ----------------------------------------------------------
//                     </li>
//
//                 ))}
//             </ul>
//         </div>
//     );
// }
//
// export default WebSocketTestPage;
