import React from 'react'
import './Navbar.scss';
import AboutData from '../Components/AboutApi';
const About = () => {
    return (
        <>
            <h1 className=' text-black  text-xl-center accordion-header fw-bolder fs-30 fst-normal card-header' > About Us </h1>
            <section id="about">
                <div className="aboutContainer">
                    <div className="aboutContent">
                        <h1 className=' text-center'> Who we are ?  </h1>
                        <p className=' mx-lg-auto'>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quos temporibus exercitationem. Quibusdam ipsam, nam doloribus animi exercitationem quam nemo, expedita porro itaque qui enim delectus repellendus facilis, fuga reiciendis tempora quod. Placeat distinctio ab sunt quo corrupti amet id necessitatibus, est vero, quasi fugit repellat quod, aut laborum rem. </p>
                    </div>
                    {/* #################### About card ###################################### */}
                    <div className="aboutCards">
                        <div className="card">

                            {
                                AboutData.map((currele) => {
                                    const { name, description, id, image, price } = currele;
                                    return (
                                        <>
                                            <div className="card-body" key={id}>
                                                <h2 className='  card-header text-center fw-bold' > {name} </h2>
                                                <p className=' card-group'> {description}  </p>
                                                <small className='price text-center fs-22'> Price {price} 💲 </small>
                                                <div className="card-footer">
                                                    <img src={image} alt=" art image " />

                                                </div>

                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                    </div >
                </div >
            </section >

        </>
    )
}

export default About;