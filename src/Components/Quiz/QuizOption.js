import React, { useState } from 'react';
import QuizeOptAns from './QuizeOptAns';
import './quizoption.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';

const QuizOption = ({ opt }) => {
    const { correctAnswer, options, question } = opt
    const [ans, setAns] = useState([])
    const [correctAns, setCorrectAns] = useState([])
    // console.log(correctAns);

    console.log(ans);
    if (correctAnswer === ans) {
        // alert();

        Swal.fire("This is the correct answer")

    }


    return (
        <div className='quizoption'>
            <div className='quizAns'>
                <h2>Quiz Answer: {correctAns}
                </h2>


                <button className='icon'

                    onClick={() => setCorrectAns(correctAnswer)}

                ><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
            </div>

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