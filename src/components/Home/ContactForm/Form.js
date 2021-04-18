import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <section className='form-div'>
            <h1>Contact us</h1>
            <form className='form'>
                <input className='form-control inp' type="text" name="" placeholder='Your name'/>
                    <input className='form-control inp' type="email" name="email" id="" placeholder='Type your email' />
                    <input className='form-control inp' type="text" placeholder='Type your message here'/>
                    <input className='btn btn-info' type="submit" value="Submit" />
                </form>
        </section>
    );
};

export default Form;