import React, { useContext, useEffect } from 'react'
import Hero from './Hero';
import { AppContext } from '../ReduxApp/Context';
import { useGloballyContext } from '../ReduxApp/Context';

const Home = () => {
    const {updateHomePage} = useGloballyContext();
    useEffect(()=>{updateHomePage()  }, [])
    return (
        <>
            <Hero  />   {/*this is called consumer which will get our data*/}

        </>
    )
}

export default Home;