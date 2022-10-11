import React from 'react';
import './categorie.css'

const categories = ({ categorie }) => {
    const { logo, name, total } = categorie
    return (
        <div className='categorie'>
            <img src={logo} alt="" srcset="" />
            <h5> Quiz Name: {name}</h5>
            <p>Total Quiz: {total}</p>
            <button className='stat-quiz-btn'>Start Quiz</button>
        </div>
    );
};

export default categories;