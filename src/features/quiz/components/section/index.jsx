import React, { useEffect, useRef, useState } from 'react'
import Card from '../card'
import { useScrollPosition } from '../../hooks'
import { SlideControllerListener } from "../../utils";
import { Loader, SlideController, ViewAllLink } from '../../../../components'
import {QuizServices} from '../../services';

const Services = new QuizServices()

const QuizSection = () => {
    const cardLimit = 5
    const container = useRef(null)
    const [quizzes, setQuizzes] = useState(null)
    // const scrollPosition = useScrollPosition(container)
    // const isEndReached = container.current && scrollPosition + container.current.clientWidth === container.current.scrollWidth

    Services.handleSuccess = () => {
        setQuizzes(Services.responseBody.data)
    }

    useEffect(() => {
        Services.getAll()
    }, [])

    return (
        <Loader isLoading={quizzes === null} >
            {
                <div className='mt-20 w-[90%] m-auto' ref={container}>
                <h1 className="section-title">EduGames</h1>
                {
                    <div className="mt-6 flex gap-4 overflow-scroll pr-3 pb-3 items-center">
                    {
                        quizzes && (quizzes.map((quiz,i) => {
                            return <Card title={quiz.title} 
                            xp_reward={quiz.total_reward} 
                            questions_count={quiz.questions_count} 
                            id={quiz.id} key={quiz.id}/>
                        }))
                    }
                    {
                        quizzes && (quizzes.length > cardLimit && <ViewAllLink className='ml-4 w-max'/>)
                    }
                    </div>
                }
                {
                    quizzes && (quizzes.length > cardLimit &&
                    <SlideController className='mt-4'
                    onLeftClick={SlideControllerListener.handleLeftClick}
                    onRightClick={SlideControllerListener.handleRightClick}
                    />)
                }
                </div>
            }
        </Loader>
    )
}

export default QuizSection