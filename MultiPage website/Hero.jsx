import React, { useContext } from 'react';
import { AppContext, useGloballyContext} from '../ReduxApp/Context';
import './Mp.scss';
import { NavLink } from 'react-router-dom';
const Hero = (props) => {
    // now we are going to use usecontext hook here
const {name,fname,  image} = useGloballyContext();
    return (
        <>
            <section id="Hero">
                <div className="hero-container">
                    <div className="hero-content">
                        <div className="container-text">
                            <h1> {name} {fname}  </h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, perferendis? </p>
                            <NavLink to='/About' > <button className="btn"> More About us </button> </NavLink>
                        </div>
                        <div className="container-image">
                            <img className='image1' src={image} alt="image1" />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero