import React, { useContext, useEffect } from 'react'
import Hero from './Hero'
import { AppContext } from '../ReduxApp/Context'
import { useGloballyContext } from '../ReduxApp/Context'
const About = () => {
   const {updateAboutPage} = useGloballyContext();
   useEffect(()=>{
    updateAboutPage();
   }, [])

    return (
        <>
            <Hero  />   {/* ... mean i am passing the whole data of the object data i have passed here at a time */}
        </>
    )
}

export default About