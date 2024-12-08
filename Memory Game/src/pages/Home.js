import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Tasks from '../components/Tasks';
const Home = () => {
    return (
        <div><Navigation />
            <Tasks />
            <Footer /></div>

    );
};

export default Home;