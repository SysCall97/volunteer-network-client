import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import ShowRegisteredEvent from '../ShowRegisteredEvent/ShowRegisteredEvent';
import TopNavbar from '../TopNavbar/TopNavbar';

const RegisteredEvents = () => {
    const { user } = useContext(userContext);
    const [loggedinUser] = user;
    const [registeredEvents, setRegisteredEvents] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getRegisteredEvents/${loggedinUser.email}`)
            .then(res => res.json())
            .then(data => {
                setRegisteredEvents(data);
            });
    }, []);

    const handleDeleteRegisteredEvent = id => {
        const updatedRegisteredEvents = registeredEvents.filter(event => event._id !== id);

        fetch(`http://localhost:5000/deleteRegisteredEvent/${id}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(isDeleteRegisteredEvent => {
                if (isDeleteRegisteredEvent) {
                    setRegisteredEvents(updatedRegisteredEvents);
                }
            });
    }

    return (
        <div>
            <TopNavbar />

            <div className="registeredEventsContainer">
                {
                    (registeredEvents &&
                        registeredEvents.map(event => <ShowRegisteredEvent event={event} handleDeleteRegisteredEvent={handleDeleteRegisteredEvent} key={event._id} />))
                    || <h2 style={{ marginLeft: "10%" }}>No registered events</h2>
                }
            </div>

        </div>
    );
};

export default RegisteredEvents;