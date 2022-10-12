import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import './categorie.css'


const categories = ({ categorie }) => {
    const { id, logo, name, total } = categorie
    return (
        <div className='categorie'>
            <img src={logo} alt="" srcset="" />
            <h5> Quiz Name: {name}</h5>
            <p>Total Quiz: {total}</p>
            <Link to={`/categorie/${id}`}>
                <button className='stat-quiz-btn'>Start Quiz <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </Link>

        </div>
    );
};

export default categories;