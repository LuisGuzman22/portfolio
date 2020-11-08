import React from 'react'
import { coursesList } from "./../../data/coursesList";
import { CourseCard } from './CourseCard';

export const CoursesList = () => {
    return (
        <div className=''>
            {coursesList.map(course => {
                return <CourseCard {...course} />
            })}
        </div>
    )
}
