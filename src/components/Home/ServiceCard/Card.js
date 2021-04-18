import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {

    const {title, img, price} = props.info;

    return (
        <div className='col-md-4 mb-5'>
            <div className="card p-1 cards">
                <div className="card-body text-center service-card">
                    <img src={img} alt=""/>
                    <h3 className="card-title title">{title}</h3>
                    <h6>{price} per day</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga</p>
                    <Link to='/dashboard'><button onClick={()=> props.handleServiceData(props.info)} className="btn btn-info text-uppercase">Add to cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;