import React from 'react';
import './TeamCard.css';

const TeamCard = (props) => {

    const {name, image, tag} = props.td;

    return (
        <div className='col-md-4 mb-5'>
            <div className="card p-1">
                <div className="card-body text-center team-card">
                    <img src={image} alt=""/>
                    <h3 className="card-title title">{name}</h3>
                    <h6>{tag}</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga</p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;