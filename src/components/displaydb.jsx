// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Displayevent() {
//     const [status, setStatus] = useState(''); // State to store the selected status

//     const handleStatusChange = (e) => {
//         setStatus(e.target.value); // Update the selected status when the user makes a selection
//     };

//     return (
//         <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
//             <div className='w-50'>
//                 <table className='table'>
//                     <thead>
//                         <tr>
//                             <th>Start</th>
//                             <th>End</th>
//                             <th>Title</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>20/02/2024 4pm</td>
//                             <td>20/02/2024 6pm</td>
//                             <td>IEEE Event</td>
//                             <td>
//                                 <select value={status} onChange={handleStatusChange}>
//                                     <option value="">Select Status</option>
//                                     <option value="approve1">Approve</option>
//                                     <option value="disapprove1">Disapprove</option>
//                                 </select>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>30/2/2024 3pm</td>
//                             <td>31/2/2024 9pm</td>
//                             <td>Hackathon</td>
//                             <td>
//                                 <select value={status} onChange={handleStatusChange}>
//                                     <option value="">Select Status</option>
//                                     <option value="approve2">Approve</option>
//                                     <option value="disapprove2">Disapprove</option>
//                                 </select>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>21/02/2024 8pm</td>
//                             <td>23/02/2024 10pm</td>
//                             <td>Devclash Event</td>
//                             <td>
//                                 <select value={status} onChange={handleStatusChange}>
//                                     <option value="">Select Status</option>
//                                     <option value="approve3">Approve</option>
//                                     <option value="disapprove3">Disapprove</option>
//                                 </select>
//                             </td>
//                         </tr>
//                         <tr>
//                             <td>14/02/2024 10am</td>
//                             <td>16/02/2024 12pm</td>
//                             <td>NSS Event</td>
//                             <td>
//                                 <select value={status} onChange={handleStatusChange}>
//                                     <option value="">Select Status</option>
//                                     <option value="approve4">Approve</option>
//                                     <option value="disapprove4">Disapprove</option>
//                                 </select>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Displayevent;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Displayevent() {
    const [statuses, setStatuses] = useState(['', '', '', '']); // State to store the selected status for each row

    const handleStatusChange = (index, status) => {
        const newStatuses = [...statuses]; // Create a copy of the statuses array
        newStatuses[index] = status; // Update the status for the specified row index
        setStatuses(newStatuses); // Update the statuses state
    };

    return (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center ">
            <div className='w-50'>
                <table className='table' style={{ backgroundColor: 'orange' }}>
                    <thead>
                        <tr>
                            <th>Start</th>
                            <th>End</th>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {statuses.map((status, index) => (
                            <tr key={index}>
                                <td>20/02/2024 4pm</td>
                                <td>20/02/2024 6pm</td>
                                <td>IEEE Event</td>
                                <td>
                                    <select value={status} onChange={(e) => handleStatusChange(index, e.target.value)}>
                                        <option value="">Select Status</option>
                                        <option value={`approve${index + 1}`}>Approve</option>
                                        <option value={`disapprove${index + 1}`}>Disapprove</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Displayevent;
