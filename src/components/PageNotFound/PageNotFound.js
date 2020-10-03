import React from 'react';
import TopNavbar from '../TopNavbar/TopNavbar';

const PageNotFound = () => {
    return (
        <>
            <TopNavbar />
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h2>404: Page Not found</h2>
                
            </div>
        </>
    );
};

export default PageNotFound;