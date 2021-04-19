import React, { useEffect, useState } from 'react';
import Manubar from '../Manubar/Manu';
import './List.css';
import ServiceLIst from '../ServiceList/ServiceLIst';


const List = () => {

    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-brook-84902.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])

    return (
        <div className='row'>
            <div className='col-md-3'>
                <Manubar></Manubar>
            </div>
            <div className='col-md-9 list-container'>
                <h1 style={{color: 'white'}}>Order List</h1>
                {
                    info.map(list => <ServiceLIst key={info.__id} list={list}></ServiceLIst>)
                }
            </div>
        </div>
    );
};

export default List;