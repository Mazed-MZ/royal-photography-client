import React from 'react';
import './ServiceList.css';

const ServiceLIst = ({ list }) => {

    return (
        <div className='col-md-5 cards-container'>
            <div className='cards'>
                <img src={list.img} alt=""/>
                <span id='pending-badge' class="badge rounded-pill bg-warning text-dark"><h6>{list.Porder}</h6></span>
                <span id='done-badge' class="badge rounded-pill bg-success text-light"><h6>{list.Dorder}</h6></span>
                <h4 style={{color: 'white'}}>{list.title}</h4>
                <h3 style={{color: 'white'}}>{list.price} per day</h3>
            </div>
        </div>
    );
};

export default ServiceLIst;