import React from 'react';
import QuizeOptAns from './QuizeOptAns';
import './quizoption.css'

const QuizOption = ({ opt }) => {
    const { correctAnswer, options, question } = opt

    return (
        <div className='quizoption'>

            <h2>Quiz: {question}</h2>

            {
                options.map(option => <QuizeOptAns
                    option={option}
                ></QuizeOptAns>)
            }
        </div>
    );
};

export default QuizOption;