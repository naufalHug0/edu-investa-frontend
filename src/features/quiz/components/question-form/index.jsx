import React, { useEffect, useState } from 'react'
import Option from '../option'
import CoinIcon from '../../../../assets/coin-icon.png'
import QuestionTransition from '../question-transition'
import { useNavigate, useOutletContext } from 'react-router'
import { QuizServices } from '../../services'
import { Loader } from '../../../../components'
import { useSelector } from 'react-redux'
import { QuizReduxController } from '../../services'
import QuestionLoader from '../question-loader'

const Services = new QuizServices()

const QuestionForm = () => {
    const questionFetchLimit = 5
    const navigateTo = useNavigate()
    const [quiz] = useOutletContext()
    const [offset, setOffset] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)
    const [questions, setQuestions] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const id = location.pathname.split('/').reverse()[0]
    const { earned_xp } = useSelector(state => state.quiz)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [userHasAnswered, setUserHasAnswered] = useState(false)
    const [toggleTransition, setToggleTransition] = useState(false)

    Services.handleSuccess = () => {
        setQuestions(Services.shuffleOptions())
        setIsLoading(false)
    }

    useEffect(() => {
        Services.getQuestion(id, offset)
    }, [offset, isLoading])
    
    const fetchNextQuestions = () => {
        setIsLoading(true)
        setCurrentQuestion(0)
        setOffset(offset + questionFetchLimit)
    }

    const incrementQuestionNumber = () => {
        setPageNumber(pageNumber + 1)
        setCurrentQuestion(currentQuestion + 1)
    }

    const changeQuestion = (resetSelection) => {
        setToggleTransition(true)
        setTimeout(() => {
            if (pageNumber == quiz.questions_count) {
                QuizReduxController.setHasCompleted(true)
                navigateTo(`/app/quiz/end/${id}`)
            } else {
                incrementQuestionNumber()
                setToggleTransition(false)
                resetSelection()
                
                if ((currentQuestion + 1) >= questionFetchLimit) {
                    fetchNextQuestions()
                }
            }
        }, 1500)
    }

    const handleCollectXp = (reward_xp) => {
        QuizReduxController.setEarnedXp(earned_xp + reward_xp)
    }

    return ( 
        <Loader isLoading={isLoading} loadingComponent={<QuestionLoader/>}>
            {
                questions && <QuestionTransition toggle={toggleTransition}>
                <div className="py-[26px] border-b border-[rgba(255,255,255,.5)] flex items-center justify-between mt-6">
                    <h1 className="font-medium text-[rgba(255,255,255,.5)] text-3xl">Question {pageNumber}<span className='font-normal text-sm text-[rgba(255,255,255,.3)]'>/{quiz.questions_count}</span></h1>
                    <div className="py-2 px-3 bg-gradient-to-l gradient-green flex items-center gap-[6px] rounded-md">
                        <p className="font-bold text-white text-xl">{earned_xp}</p>
                        <img src={CoinIcon} width={22}/>
                    </div>
                </div>
                <div className="mt-4 rounded-xl bg-[rgba(0,0,0,.2)] px-6 py-7 overflow-y-scroll max-h-[30vh]">
                    <h1 className="font-bold text-white text-2xl">{questions[currentQuestion].text}</h1>
                </div>
                <div className="mt-8 w-full grid grid-rows-4 gap-4 select-none">
                    {
                        questions[currentQuestion].question_options.map((option, i) => <Option
                        key={i} 
                        value={option.text} 
                        isCorrect={option.isCorrect} 
                        changeQuestion={changeQuestion}
                        handleCollectXp={handleCollectXp}
                        userHasAnswered={userHasAnswered}
                        setUserHasAnswered={setUserHasAnswered}
                        reward_xp={questions[currentQuestion].question_levels.reward_xp}
                        />)
                    }
                </div>
            </QuestionTransition>
            }
        </Loader>
    )
}

export default QuestionForm