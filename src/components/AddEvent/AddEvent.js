import React from 'react';
import validator from 'validator';
import { Button } from 'react-bootstrap';
import AdminLeft from '../AdminLeft/AdminLeft';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, errors } = useForm();

    const input = {
        width: '40%', 
        borderRadius:'10px', 
        border:'1px solid #aaa', 
        height: '40px', 
        paddingLeft:'10px',
        outline: 'none'
    }
    
    const onSubmit = event => {
        const eventName = document.getElementById('eventTitle').value;
        const url = document.getElementById('imageUrl').value;
        if(validator.isURL(url) && (url.endsWith('.png') || url.endsWith('jpg') || url.endsWith('jpeg'))) {
            const id = Number(localStorage.getItem('lastEventId')) + 1;
            localStorage.setItem('lastEventId', id);
            const newEvent = {
                id: id,
                img: url,
                name: eventName
            }
            fetch('https://safe-atoll-12717.herokuapp.com/addNewEvent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEvent)
            })
            .then(res => res.json())
            .then(isInserted => {
                if(isInserted) {
                    alert('New Event Added');
                }
            })
        } else {
            alert('The image url you given is must be a png or jpg or jpeg file')
        }
        // event.preventDefault();
    }

    return (
        <div className="VolunteerListContainer">
            <AdminLeft volunteerList={false} />
            <div>
                <div className="adminRightTop">
                    <h4>Add event</h4>
                </div>

                <div className="adminRightBottom" style={{paddingLeft: '10vw'}}>
                    {/* <form>
                        <label style={{fontWeight: 'bold'}}>Event Title</label> <br />
                        <input type="text" placeholder="Event title" id='eventTitle' style={input} /> <br /> <br />

                        <label style={{fontWeight: 'bold'}}>Image URL</label> <br />
                        <input type="text" placeholder="Image url" id='imageUrl' style={input} /> <br /> <br />

                        <Button type="primary" style={{width: '40%'}} onClick={() => handleAddEvent(event)}>Submit</Button>
                    </form> */}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label style={{fontWeight: 'bold'}}>Event Title</label> <br />
                        <input name="eventTitle" type="text" placeholder="Event title" id='eventTitle' style={input} ref={register({ required: true })} /> <br />
                        {errors.eventTitle && <span style={{ color: 'red' }}>This field is required<br /></span>} <br />

                        <label style={{fontWeight: 'bold'}}>Image URL</label> <br />
                        <input name="imgUrl" type="text" placeholder="Image URL" id='imageUrl' style={input} ref={register({ required: true })} /> <br />
                        {errors.imgUrl && <span style={{ color: 'red' }}>This field is required<br /></span>} <br />

                        <Button variant="primary" type="submit" style={{ width: '40%' }}>Submit</Button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddEvent;