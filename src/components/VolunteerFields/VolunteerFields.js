import React from 'react';
import { volunteeringFileds } from '../../fakeData';
import ShowField from '../ShowField/ShowField';

const VolunteerFields = () => {
    
    return (
        <div>
            <div className='container'>
                <div className='row'>
                        {volunteeringFileds.map(field => <ShowField field={field} key={field.id} />)}
                        
                </div>
            </div>
        </div>
    );
};

export default VolunteerFields;