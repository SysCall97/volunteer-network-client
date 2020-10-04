import React, { useEffect, useState } from 'react';
import ShowField from '../ShowField/ShowField';

const VolunteerFields = () => {
    const [volunteeringFileds, setVolunteeringFileds] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/getAllEvents')
        .then(res => res.json())
        .then(data => setVolunteeringFileds(data));
    }, []);
    return (
        <div>
            <div className='container'>
                <div className='row'>
                        {volunteeringFileds.length && volunteeringFileds.map(field => <ShowField field={field} key={field.id} />)}
                        
                </div>
            </div>
        </div>
    );
};

export default VolunteerFields;