import React from 'react'

const Course = ({ course, toggle, openId }) => (
    <div className="mt-3">
        <h3>{course.title}</h3>
        <button onClick={() => toggle(course._id)} className="btn btn-primary">
            {openId === course._id ? "Hide description" : "Show description"}
        </button>
        {openId === course._id ? <p>{course.description}</p> : null}
    </div>
)

export default Course;
