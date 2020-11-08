import React from 'react'
import { NavLink } from 'react-router-dom';


export const CourseCard = (course: any) => {
    return (
        <div className='p-4'>
            <div className="card">
                <div className="card-body">
                    <h1 className='card-title'>
                        &#60;{course.titulo}
                        <span className='blink'> |</span>&#62;
                    </h1>
                    <p className="card-text">
                        {course.subtitulo}
                    </p>
                    <NavLink
                        key={course.id}
                        activeClassName='nav-link-active'
                        className='nav-link d-block mt-3 mb-3 category-service-label pointer'
                        exact
                        to={`blog/${course.path}`}
                    >
                        &#60;a href='' /&#62;
                       </NavLink>
                </div>
            </div>
        </div>
    )
}
