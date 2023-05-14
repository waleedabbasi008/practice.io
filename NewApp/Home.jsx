import React from 'react'
import './Navbar.scss';
import Navbar from './Navbar';
import web from '../images/home-image1.jpg';
import web2 from '../images/home-image2.jpg';
import web3 from '../images/home-image3.jpg';
import web4 from '../images/home-image4.jpg';
const Home = () => {
    return (
        <>
            <section id="hero">
                <Navbar />
                <div className="heroContainer">
                    <div className="heroContent">

                        <h2> Lorem ipsum dolor sit amet. </h2>
                        <p> Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Quod <br /> corporis dolore laudantium rem sit id ad ratione aspernatur, iste eligendi. </p>
                    </div>
                    <div className="heroImages">
                        <img src={web} alt="" />
                        <img src={web2} alt="" />
                        <img src={web3} alt="" />
                        <img src={web4} alt="" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;