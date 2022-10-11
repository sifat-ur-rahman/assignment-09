import React, { useState } from 'react';
import QuizeOptAns from './QuizeOptAns';
import './quizoption.css'

const QuizOption = ({ opt }) => {
    const { correctAnswer, options, question } = opt
    const [ans, setAns] = useState([])

    console.log(ans);
    if (correctAnswer === ans) {
        alert("This is the correct answer");

    }


    return (
        <div className='quizoption'>
            <h2>Quiz:</h2>
            <h3> {question}</h3>

            {
                options.map(option => <QuizeOptAns
                    option={option}
                    setAns={setAns}
                ></QuizeOptAns>)
            }
        </div>
    );
};

export default QuizOption;