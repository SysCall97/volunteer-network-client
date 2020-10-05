import React, { useEffect, useState } from 'react';
import AdminLeft from '../AdminLeft/AdminLeft';
import trash from '../../images/logos/trash-2.png';

const VolunteerRegisterList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://safe-atoll-12717.herokuapp.com/getAllUsers')
            .then(res => res.json())
            .then(data => { setUsers(data); console.log(data); });
    }, []);

    const removeUser = id => {
        const updatedUsers = users.filter(user => user._id !== id);
        
        fetch(`https://safe-atoll-12717.herokuapp.com/deleteRegisteredEvent/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(isDeleted => {
            if(isDeleted) {
                alert('Removed user');
                setUsers(updatedUsers);
            }
        })
    }

    return (
        <div className="VolunteerListContainer">
            <AdminLeft />
            <div>
                <div className="adminRightTop">
                    <h4>Volunteer register list</h4>
                </div>

                <div className="adminRightBottom">
                    <table id="table">
                        <thead className="tHead">
                            <td>Name</td>
                            <td>Email ID</td>
                            <td>Registration date</td>
                            <td>Volunteer list</td>
                            <td>Action</td>
                        </thead>
                        {/* { user &&
                            user.map(user => <tr>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>{user.date}</td>
                                <td>{user.eventName}</td>
                                <td>Action</td>
                            </tr>
                            )
                        } */}

                        {users &&
                            users.map(user => <tr className="tr">
                                <td style={{fontWeight: 'bold'}}>{user.displayName}</td>
                                <td style={{fontWeight: 'bold'}}>{user.email}</td>
                                <td>{user.date}</td>
                                <td>{user.eventName}</td>
                                <td>
                                    <div style={{width:"20%", height:"20%", backgroundColor: '#FF444A', cursor: 'pointer'}} onClick={() => removeUser(user._id)}>
                                        <img src={trash} alt="" height='100%' width='100%'/>
                                    </div>
                                </td>
                            </tr>
                            )
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VolunteerRegisterList;