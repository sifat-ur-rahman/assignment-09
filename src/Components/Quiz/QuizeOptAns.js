import React from 'react';
import './QuizeOptionAns.css'


const QuizeOptAns = ({ option, setAns }) => {
    return (
        <div>
            {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1">{option}</label> */}
            <button className='option-btn' onClick={() => setAns(option)}>{option}</button>
        </div>
    );
};

export default QuizeOptAns;