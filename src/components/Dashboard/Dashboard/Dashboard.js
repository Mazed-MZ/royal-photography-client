import React from 'react';
import Manubar from '../Manubar/Manu';
import ServiceDetails from '../ServiceDetails/Details';


const Dashboard = () => {

    return (
        <main className='row'>
            <div className='col-md-3'>
                <Manubar></Manubar>
            </div>
            <div className='col-md-5'>
                <ServiceDetails></ServiceDetails>
            </div>
        </main>
    );
};

export default Dashboard;