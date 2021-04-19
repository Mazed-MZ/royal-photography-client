import React from 'react';
import './Service.css';
import ServiceCard from '../ServiceCard/Card';


const serviceData = [
    {
        title: 'Event Photography',
        price: '$100',
        email: 'programminghero001@gmail.com',
        Porder: 'Pending',
        img: 'https://i.ibb.co/YWJP3Bm/andrew-arrol-b5-Aku-WDyg-Do-unsplash.jpg'
    },
    {
        title: 'Wedding Photography',
        price: '$500',
        email: 'programminghero001@gmail.com',
        Dorder: 'Done',
        img: 'https://i.ibb.co/26QwDWH/elvis-bekmanis-WJc87-MVc-Da-A-unsplash.jpg'
    },
    {
        title: 'Architecture Photography',
        price: '$50.59',
        email: 'programminghero001@gmail.com',
        Porder: 'Pending',
        img: 'https://i.ibb.co/HDdPyYK/marco-chilese-p-Th-CMpxv-CKQ-unsplash.jpg'
    },
    {
        title: 'Commercial Photography',
        price: '$200',
        email: 'programminghero001@gmail.com',
        Dorder: 'Done',
        img: 'https://i.ibb.co/9cVCnV7/kal-visuals-I-nd-LSCY04-unsplash.jpg'
    },
    {
        title: 'Documentery Photography',
        price: '$100',
        email: 'programminghero001@gmail.com',
        Dorder: 'Done',
        img: 'https://i.ibb.co/QdsRgHX/alexander-dummer-a-S4-Duj2j7r4-unsplash.jpg'
    },
    {
        title: 'Beach Photography',
        price: '$250',
        email: 'programminghero001@gmail.com',
        Porder: 'Pending',
        img: 'https://i.ibb.co/18cq17Z/tegan-HSvd-Q5d-X56k-unsplash.jpg'
    },
]
const Service = () => {

    const handleServiceData = (crdData) =>{
        fetch('https://sleepy-brook-84902.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(crdData)
        })
        .then(res => res.json())
        .then(result => console.log(result))
    }

    return (
        <div className='service-container'>
            <h1>Our Services</h1>
            <div className='row cards'>
                {
                    serviceData.map(data => <ServiceCard info={data} key={data.__id} handleServiceData={handleServiceData}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Service;