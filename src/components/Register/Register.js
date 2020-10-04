import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { userContext } from '../../App';
import { Button } from 'react-bootstrap';

const Register = () => {
    const { id } = useParams();
    // const selectedField = volunteeringFileds.find(vf => vf.id === Number(id));
    const [selectedField, setSelectedField] = useState({});
    const { user } = useContext(userContext);
    const [loggedinUser] = user;
    const history = useHistory()

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const newRegistration = {
            displayName: data.displayName,
            email: data.email,
            eventId: id,
            date: data.date,
            description: data.description
        }
        fetch('https://safe-atoll-12717.herokuapp.com/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRegistration)
        })
        .then(res => res.json())
        .then(isRegistrationCompleted => {
            if(isRegistrationCompleted) history.replace('/registeredEvents')
        })
    }

    useEffect(() => {
        fetch(`https://safe-atoll-12717.herokuapp.com/getEventById/${id}`)
            .then(res => res.json())
            .then(data => setSelectedField(data));
    }, []);

    return (
        <div className="formContainer">
            <img src={logo} alt="" width="20%" />
            <div className="form">
                <div className="formContainer2">
                    <h2>Register as a Volunteer</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="displayName" className="input" placeholder="Your Name" defaultValue={loggedinUser.displayName} ref={register({ required: true })} /> <br />
                        {errors.displayName && <span style={{ color: 'red' }}>This field is required<br /></span>}

                        <input name="email" className="input" placeholder="Email" defaultValue={loggedinUser.email} ref={register({ required: true })} /> <br />
                        {errors.email && <span style={{ color: 'red' }}>This field is required<br /></span>}

                        <input type="date" name="date" className="input" placeholder="Date" ref={register({ required: true })} /> <br />
                        {errors.date && <span style={{ color: 'red' }}>This field is required<br /></span>}


                        <input name="description" className="input" placeholder="Description" ref={register({ required: true })} /> <br />
                        {errors.description && <span style={{ color: 'red' }}>This field is required<br /></span>}

                        <input name="volunteeringField" className="input" placeholder="Name" defaultValue={selectedField.name} ref={register({ required: true })} disabled /> <br />
                        {errors.volunteeringField && <span style={{ color: 'red' }}>This field is required<br /></span>}

                        <br /><Button variant="primary" type="submit" style={{ width: '100%' }}>Submit</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;