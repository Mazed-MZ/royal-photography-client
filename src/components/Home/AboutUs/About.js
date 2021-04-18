import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <h1>About us</h1>
            <div className='row about-txt'>
                <div className='col-md-5 justify-content-start'>
                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia et obcaecati culpa, accusamus, dolores quos esse recusandae autem tenetur quisquam odio repellat maiores animi illo ipsam assumenda. Officia, accusamus consectetur  magni perspiciatis aliquam quo quia consequatur tempora dolorum? Quibusdam voluptas.</h5>
                </div>
                <div className='col-md-5'>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque voluptas illum dolore saepe distinctio placeat molestiae, magni ipsum. At, sapiente nemo architecto quam saepe magnam, magni perspiciatis aliquam quo quia consequatur tempora dolorum? Quibusdam voluptas labore dolorem dolores, dolor consequuntur consequatur </h5>
                </div>
            </div>
        </div>
    );
};

export default About;