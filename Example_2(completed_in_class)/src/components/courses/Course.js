import React from 'react'
import TeachersList from '../TeachersList';
import showifVisible from '../../hoc/showIfVisible';

const Course = ({ course, toggle, openId }) => {

    const DetailsSection = showifVisible(
        ({description, teachers}) => (<>
            <p>{description}</p>
            <TeachersList teachers={teachers} />
        </>)
    );

    return (
        <div className="mt-3">
            <h3>{course.title}</h3>
            <button onClick={() => toggle(course._id)} className="btn btn-primary">
                {openId === course._id ? "Hide Details" : "Show Details"}
            </button>
            <DetailsSection visible={openId === course._id} teachers={course.teachers} description={course.description}/> 
        </div>
    )
}
    
export default Course;
