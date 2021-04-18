import React from 'react';
import './Manu.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCreditCard, faShoppingCart, faUserShield, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './../../../App';
import { useContext, useState, useEffect } from 'react';


const Manu = () => {

    const [loginUser, setLoginUser] = useContext(UserContext);
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/admin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loginUser.email })
        })
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [])

    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    return (
        <nav class="nav flex-column manu-btn">
            <img src="https://i.ibb.co/WPMrSqh/unnamed.png" alt="" />
            <Link to='/home'><Button id='home-btn' variant="outlined" color="primary">
                    <FontAwesomeIcon className='btn-padd' icon={faHome} /> Home
            </Button></Link>
            {admin && <div>
                <Link to='/makeAdmin'><Button variant="outlined" color="primary">
                    <FontAwesomeIcon className='btn-padd' icon={faUserShield} /> Make Admin
            </Button></Link>
                <Link to='/add'><Button variant="outlined" color="primary">
                    + Add Service
            </Button></Link>
            </div>}
            <Link to='/form'><Button variant="outlined" color="primary"><FontAwesomeIcon className='btn-padd' icon={faCreditCard} /> Booking Form
            </Button></Link>
            <Link to='/list'><Button variant="outlined" color="primary">
                <FontAwesomeIcon className='btn-padd' icon={faShoppingCart} /> Order List
            </Button></Link>
            <Link to='review'><Button variant="outlined" color="primary">
                <FontAwesomeIcon className='btn-padd' icon={faStarHalfAlt} /> Review
            </Button></Link>
        </nav>
    );
};

export default Manu;