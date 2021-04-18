import React from 'react';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <main className='main'>
            <img id='title-img' src="https://www.pngkit.com/png/full/265-2653960_photography.png" alt=""/><br/>
            <img id='logo-img' src="https://i.ibb.co/WPMrSqh/unnamed.png" alt=""/><br/>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, praesentium voluptates, laboriosam similique voluptate ipsam illum assumenda culpa quisquam, consectetur nobis magni excepturi perferendis ea est aliquid neque natus iure suscipit nostrum nesciunt perspiciatis expedita soluta recusandae! Eius adipisci tenetur veritatis nostrum esse est laborum itaque ea ullam, ex necessitatibus.</h3>
            <button className='btn btn-info'>Explore 📷</button>
        </main>
    );
};

export default HeaderMain;