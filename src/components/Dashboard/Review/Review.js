import React from 'react';
import Manubar from '../Manubar/Manu';


const Review = () => {
    return (
        <div className='row'>
            <div className='col-md-3'>
                <Manubar></Manubar>
            </div>
            <div>
                <h1>Review</h1>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Topic Name</label>
                    <input type="text" class="form-control" id="floatingInputGrid" placeholder="Topic name"/>
                </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Write your review</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
    );
};

export default Review;