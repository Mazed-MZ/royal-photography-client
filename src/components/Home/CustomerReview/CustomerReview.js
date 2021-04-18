import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const CustomerReview = () => {
    return (
        <section>
            <h1>Reviews</h1>
            <div className="row">
                <div className='col-md-4 mb-5'>
                    <div className="card p-1">
                        <div className="card-body text-center team-card">
                            <h5>Mark Jakarburg</h5>
                            <br/>
                            <p>Royal Photography sit amet consectetur adipisicing elit. Consectetur soluta a dolorum quasi adipisci. Est itaque asperiores quis veniam molestiae.</p>
                            <h6>Wedding Photography <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStar} /></h6>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-5'>
                    <div className="card p-1">
                        <div className="card-body text-center team-card">
                            <h5>Jams Camaron</h5>
                            <br/>
                            <p>Royal Photography sit amet consectetur adipisicing elit. Consectetur soluta a dolorum quasi adipisci. Est itaque asperiores quis veniam molestiae.</p>
                            <h6>Commercial Photography <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStar} /></h6>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-5'>
                    <div className="card p-1">
                        <div className="card-body text-center team-card">
                            <h5>Joe Biden</h5>
                            <br/>
                            <p>Royal Photography sit amet consectetur adipisicing elit. Consectetur soluta a dolorum quasi adipisci. Est itaque asperiores quis veniam molestiae.</p>
                            <h6>Event Photography <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStarHalfAlt} /></h6>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-5'>
                    <div className="card p-1">
                        <div className="card-body text-center team-card">
                            <h5>Tahsan Khan</h5>
                            <br/>
                            <p>Royal Photography sit amet consectetur adipisicing elit. Consectetur soluta a dolorum quasi adipisci. Est itaque asperiores quis veniam molestiae.</p>
                            <h6>Architecture Photography <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStarHalfAlt} />
                            <FontAwesomeIcon className='btn-padd' icon={faStarHalfAlt} /></h6>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-5'>
                    <div className="card p-1">
                        <div className="card-body text-center team-card">
                            <h5>Ayman Sadiq</h5>
                            <br/>
                            <p>Royal Photography sit amet consectetur adipisicing elit. Consectetur soluta a dolorum quasi adipisci. Est itaque asperiores quis veniam molestiae.</p>
                            <h6>Documentry Photography <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStarHalfAlt} /></h6>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-5'>
                    <div className="card p-1">
                        <div className="card-body text-center team-card">
                            <h5>Tanjin Tisha</h5>
                            <br/>
                            <p>Royal Photography sit amet consectetur adipisicing elit. Consectetur soluta a dolorum quasi adipisci. Est itaque asperiores quis veniam molestiae.</p>
                            <h6>Beach Photography <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStar} />
                            <FontAwesomeIcon className='btn-padd' icon={faStar} /></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default CustomerReview;