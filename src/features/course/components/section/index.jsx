import React, { useEffect, useState } from 'react'
import Card from '../card'
import { Button, Loader, LoadingSpinner } from '../../../../components'
import {CourseServices} from '../../services'
import { useNavigate } from 'react-router'

const Course = new CourseServices()

const CourseSection = () => {
    const [courses, setCourses] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const navigateTo = useNavigate()

    Course.handleSuccess = () => {
        setCourses(Course.responseBody.data)
        setIsLoading(false)
    }

    useEffect(() => {
        Course.getAll()
    }, [])

    return (
        <Loader isLoading={isLoading} loadingComponent={<LoadingSpinner/>}>
            <div className='mt-20 w-[90%] m-auto' >
                <h1 className="section-title">EduCourse</h1>
                {
                    courses && (courses.length > 0 ?
                    <>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pr-3 pb-3 items-center">
                        {
                            courses.map((course,i) => {
                                return <Card key={i}
                                onClick={() => navigateTo(`course/${course.id}`)}
                                title={course.title}
                                description={course.description}
                                total_episodes={course.videos_count}
                                course_level={course.course_levels.name}
                                reward_xp={course.course_levels.reward_xp}
                                />
                            })
                        }
                    </div>
                    {
                        courses.length > 4 && <div className="flex justify-center items-center mt-4">
                        <Button>Muat Lebih Banyak</Button>
                        </div>
                    }
                    </>
                    :
                    <p className="font-secondary">Belum ada Course</p>)
                }
            </div>
        </Loader>
    )
}

export default CourseSection