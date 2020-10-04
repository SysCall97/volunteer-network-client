import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import TopNavbar from '../TopNavbar/TopNavbar';
import VolunteerFields from '../VolunteerFields/VolunteerFields';

const Home = () => {
    return (
        <div>
            <TopNavbar />
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
            <VolunteerFields />
        </div>
    );
};

export default Home;