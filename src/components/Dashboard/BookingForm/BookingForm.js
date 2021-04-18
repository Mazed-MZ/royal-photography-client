import React from 'react';
import Manubar from '../Manubar/Manu';
import './BookingForm.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('sk_test_51IeCUwLRZxEgCgdoYOMfrudpLBtwomKckQOe8XKmy2nn5lueT5fzrHhE5S9pGMTlzIqki0z1ZFFmADog4ZhrMure00QsQlO9eX');

const BookingForm = () => {
    
    return (
        <div className='row'>
            <div className='col-md-3'>
                <Manubar></Manubar>
            </div>
            <div className='booking-form col-md-9'>
                <h1 id='booking-title' style={{color: 'white'}}>Booking Form</h1>
                    <Elements stripe={stripePromise}>
                        <SplitCardForm></SplitCardForm>
                    </Elements>
            </div>
        </div>
    );
};

export default BookingForm;