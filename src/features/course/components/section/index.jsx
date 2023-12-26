import React from 'react'
import Card from '../card'
import { Button } from '../../../../components'

const CourseSection = () => {
    return (
        <div className='mt-20 w-[90%] m-auto' >
            <h1 className="section-title">EduCourse</h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pr-3 pb-3 items-center">
                {
                    [...Array(4)].map((_,i) => {
                        return <Card key={i}/>
                    })
                }
            </div>
            <div className="flex justify-center items-center mt-4">
                <Button>Muat Lebih Banyak</Button>
            </div>
        </div>
    )
}

export default CourseSection