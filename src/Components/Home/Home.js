import React from 'react';
import img from './quiz-img.png';
import './Home.css'
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData()

    console.log(categories);
    return (
        <div>
            <div className='header'>
                <div className='header-img'>
                    <img src={img} alt="" />
                </div>
                <div className='header-text'>
                    <h2>Quiz Time</h2>
                    <h4>Give this quiz a try and check your knowledge of articles. Let's see if you have been practicing well on your programming. </h4>
                </div>
            </div>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default Home;