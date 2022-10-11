import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizOption from './QuizOption';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData()
    // console.log(quiz.data.questions);


    return (
        <div className='quiz'>

            {
                quiz.data.questions.map(opt => <QuizOption
                    opt={opt}
                ></QuizOption>)
            }
        </div>
    );
};

export default Quiz;