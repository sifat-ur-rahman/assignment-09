import React from 'react';

const QuizeOptAns = ({ option }) => {
    return (
        <div>
            {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <label for="vehicle1">{option}</label> */}
            <button>{option}</button>
        </div>
    );
};

export default QuizeOptAns;