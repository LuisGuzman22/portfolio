import React from 'react'
import { coursesList } from "./../../data/coursesList";
import { CourseCard } from './CourseCard';

export const CoursesList = () => {
    return (
        <div className=''>
            {coursesList.sort((a, b) => (new Date(a.fecha) > new Date(b.fecha) ? -1 : 1)).slice(0, 5).map(course => {
                return <CourseCard key={course.id} {...course} />
            })}
        </div>
    )
}
