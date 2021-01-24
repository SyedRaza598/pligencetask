import React from 'react';
import ProductsSection from './productsSection'
import HeroSection from './heroSection';
import Navbar from './navbar';
import Services from './services';
import Blog from './blog';
import Careers from './careers';
import ContactUs from './contactUs'
import Footer from './footer';
const Home = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <Navbar />
            <ProductsSection />
            <Services />
            <Blog />
            <Careers />
            <ContactUs />
            <Footer />
        </React.Fragment>
    );
}

export default Home;