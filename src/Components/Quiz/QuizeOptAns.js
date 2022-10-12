import React from 'react';
import './QuizeOptionAns.css'


const QuizeOptAns = ({ option, setAns }) => {
    return (
        <div>
            <button className='option-btn' onClick={() => setAns(option)}>{option}</button>
        </div>
    );
};

export default QuizeOptAns;