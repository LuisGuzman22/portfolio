import React from 'react'
import { CoursesList } from '../common/CoursesList'
import { coursesList } from './../../data/coursesList';

export const Home = () => {
    return (
        <>
            {coursesList.map(course => {
                return <CoursesList
                    key={course.id}
                    {...course} />
            })}
        </>
    )
}
