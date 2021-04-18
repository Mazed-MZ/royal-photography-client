import React from 'react';
import Footer from '../../Footer/Footer';
import About from '../AboutUs/About';
import Form from '../ContactForm/Form';
import CustomerReview from '../CustomerReview/CustomerReview';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Team from '../TeamMember/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Service></Service>
            <Team></Team>
            <Form></Form>
            <CustomerReview></CustomerReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;