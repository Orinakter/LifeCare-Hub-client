import React from 'react';
import Banner from '../Components/Banner';
import AvailableDoctor from '../Components/AvailableDoctor';
import OurServices from '../Components/OurServices';
import ReactCount from '../Components/ReactCount';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AvailableDoctor></AvailableDoctor>
            <OurServices></OurServices>
            <ReactCount></ReactCount>
            
            
        </div>
    );
};

export default Home;