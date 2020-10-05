import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import user from '../../images/logos/users-alt.png';
import add from '../../images/logos/plus.png';

const AdminLeft = () => {
    return (
        <div className="adminLeft">
                <img src={logo} alt="" width="60%" />
                <div className="adminLinks">
                    <Link to="/volunteerregisterlist" style={{textDecoration: 'none'}}>
                        <img src={user} alt="" width="10%" className='active' />
                        <span style={{marginLeft: "3%"}}> Volunteer Register List </span>
                    </Link>
                    <br /><br />
                    <Link to="/addEvent" style={{textDecoration: 'none', color:"black"}}>
                        <img src={add} alt="" width="10%" />
                        <span style={{marginLeft: "3%"}}> Add event </span>
                    </Link>
                </div>
            </div>
    );
};

export default AdminLeft;