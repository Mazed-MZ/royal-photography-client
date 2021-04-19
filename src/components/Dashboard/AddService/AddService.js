import React, { useState } from 'react';
import Manubar from '../Manubar/Manu';
import './AddService.css';

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('price', info.price);
        formData.append('review', info.review);

        fetch('https://sleepy-brook-84902.herokuapp.com/addNewService', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

    return (
        <div className='row'>
            <div className='col-md-3'>
                <Manubar></Manubar>
            </div>
            <div className='add-service col-md-9'>
                <h1 style={{color: 'white'}}>Add Service</h1>
                <form onSubmit={handleSubmit} className='service-form'>
                    <div class="mb-3">
                        <label style={{ color: 'white' }} for="exampleFormControlInput1" class="form-label">Upload Image</label>
                        <input onChange={handleFileChange} type="file" name="file" className='form-control' />
                    </div>
                    <div class="mb-3">
                        <label style={{ color: 'white' }} for="exampleFormControlInput1" class="form-label">Service Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" id="floatingInputGrid" name='name' placeholder="Topic name" />
                    </div>
                    <div class="mb-3">
                        <label style={{ color: 'white' }} for="exampleFormControlInput1" class="form-label">Set Price</label>
                        <input onBlur={handleBlur} type="text" class="form-control" id="floatingInputGrid" name='price' placeholder="Set price" />
                    </div>
                    <div id='review-box' class="mb-3">
                        <label style={{ color: 'white' }} for="exampleFormControlTextarea1" class="form-label">Write your review</label>
                        <textarea onBlur={handleBlur} name='review' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <input className='btn btn-info' id='submit-btn' type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
};

export default AddService;