import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const ShowRegisteredEvent = props => {
    const { eventId, description, date, _id } = props.event;
    const handleDeleteRegisteredEvent = props.handleDeleteRegisteredEvent;
    const [eventDetails, setEventDetails] = useState({});

    // console.log(props.event);

    useEffect(() => {
        fetch(`http://localhost:5000/getEventById/${eventId}`)
            .then(res => res.json())
            .then(data => setEventDetails(data));
    }, []);

    return (
        <div className="registeredEventContainer">
            <div className="imageContainer">
                <img src={eventDetails.img} alt="" width="80%"/>
            </div>
            <div>
                <h3>{eventDetails.name}</h3>
                <p>{description}</p>
                <small>{date}</small> <br/><br/>
                <Button variant="danger" onClick={() => handleDeleteRegisteredEvent(_id)}>Cancel</Button>
            </div>
        </div>
    );
};

export default ShowRegisteredEvent;