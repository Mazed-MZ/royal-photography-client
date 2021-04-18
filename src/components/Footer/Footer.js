import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo-text'>
                <img src="https://i.ibb.co/7GcmwTD/RP-logo-removebg-preview.png" alt="" srcset="" />
                <div className='text-line1'>
                    <a href="/about">• About us</a><br />
                    <a href="/blog">• Read our blog</a><br />
                    <a href="/order">• Add your order</a><br />
                    <a href="/signin">• Sign up</a>
                </div>
                <div className='text-line2'>
                    <a href="/contact">• Get help</a><br />
                    <a href="/blog">• Read FAQs</a><br />
                    <a href="/order">• View all service</a><br />
                    <a href="/order">• Photography tips</a>
                </div>
            </div>
            <div className='foot-text'>
                <h5>Copyright@2020 all rights reserved by Royal Photography </h5>
                <div className='foot-div'>
                    <a href="/terms">Privacy Policy</a>
                    <a className='term' href="/terms">Terms of use</a>
                    <a className='contact' href="/contact">Contact us</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;