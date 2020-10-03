import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const ShowField = props => {
    const field = props.field;
    const color = ['#FFBD3E', '#FF7044', '#3F90FC', '#421FCF'];

    const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
    return (

        <div className="col-md-6 col-lg-4 col-xl-3 py-2">
            <div className="card h-100">
                <Link to={`/register/${field.id}`} style={{ textDecoration: 'none' }}>
                    <Card.Img variant="top" src={field.img} />
                    <div className="card-body" style={{ backgroundColor: color[getRandomInt(4)], color: 'white' }}>
                        <Card.Text>
                            {field.name}
                        </Card.Text>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ShowField;