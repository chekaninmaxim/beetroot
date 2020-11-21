import React from 'react';

const Teacher = ({name, text}) => (
    <div className="mt-3">
        <h4>{name}</h4>
        <p> {text}</p>
    </div>    
);

export default Teacher;