import React from 'react';
import Teacher from './Teacher';
import withToggle from '../hoc/withToggle.js';
import showifVisible from '../hoc/showIfVisible';


const TeachersList = ({ teachers, isOpen, toggle}) => {

    const HidableTeachers = showifVisible(({teachersArr}) => (
        teachersArr.map(t => <Teacher key={t._id} {...t}/>)
    ));

    return (
        <div>
            <button onClick={toggle} className="btn btn-secondary">
                {isOpen ? "Hide teachers" : "Show teachers"}
            </button>
            <HidableTeachers visible={isOpen} teachersArr={teachers}/>
        </div>
    );
}

export default withToggle(TeachersList);