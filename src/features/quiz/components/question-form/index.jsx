import React, { useState } from 'react'
import Option from '../option'
import CoinIcon from '../../../../assets/coin-icon.png'
import QuestionTransition from '../question-transition'
import { useNavigate } from 'react-router'

const QuestionForm = () => {
    const options = [
        { value: 'Option 1', isCorrect: false },
        { value: 'Option 2', isCorrect: false },
        { value: 'Option 3', isCorrect: true },
        { value: 'Option 4', isCorrect: false },
    ]

    const questions = [
        { value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione deleniti soluta quisquam hic rem. Ut sed dolorum optio consectetur molestiae?', reward_xp: 20 },
        { value: 'Consectetur adipisicing elit. Quibusdam, laboriosam.', reward_xp: 40 },
        { value: 'Tenetur id doloribus saepe nemo voluptatem placeat expedita porro consequuntur velit praesentium dolore blanditiis maiores, sequi ipsa cum beatae omnis, odit cumque.', reward_xp: 10 },
        { value: 'Eligendi quos amet, voluptatum aliquam ipsum recusandae obcaecati iste, molestiae temporibus quisquam.', reward_xp: 30 },
        { value: 'Non delectus ducimus suscipit aperiam veniam officiis', reward_xp: 5 }
    ]

    const [pageNumber, setPageNumber] = useState(1)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [toggleTransition, setToggleTransition] = useState(false)
    const [userHasAnswered, setUserHasAnswered] = useState(false)
    const navigateTo = useNavigate()

    const changeQuestion = (resetSelection) => {
        setToggleTransition(true)
        setTimeout(() => {
            if (pageNumber == questions.length) {
                navigateTo('/app/quiz/end/2')
            } else {
                setPageNumber(pageNumber + 1)
                setCurrentQuestion(currentQuestion + 1)
                setToggleTransition(false)
                resetSelection()
            }
        }, 1500)
    }

    return ( 
        <QuestionTransition toggle={toggleTransition}>
            <div className="py-[26px] border-b border-[rgba(255,255,255,.5)] flex items-center justify-between mt-6">
                <h1 className="font-medium text-[rgba(255,255,255,.5)] text-3xl">Question {pageNumber}<span className='font-normal text-sm text-[rgba(255,255,255,.3)]'>/{questions.length}</span></h1>
                <div className="py-2 px-3 bg-gradient-to-l gradient-green flex items-center gap-[6px] rounded-md">
                    <p className="font-bold text-white text-xl">10</p>
                    <img src={CoinIcon} width={22}/>
                </div>
            </div>
            <div className="mt-4 rounded-xl bg-[rgba(0,0,0,.2)] px-6 py-7 overflow-y-scroll max-h-[30vh]">
                <h1 className="font-bold text-white text-2xl">{questions[currentQuestion].value}</h1>
            </div>
            <div className="mt-8 w-full grid grid-rows-4 gap-4 select-none">
                {
                    options.map((option, i) => <Option
                    key={i} 
                    value={option.value} 
                    isCorrect={option.isCorrect} 
                    changeQuestion={changeQuestion}
                    userHasAnswered={userHasAnswered}
                    setUserHasAnswered={setUserHasAnswered}
                    reward_xp={questions[currentQuestion].reward_xp}
                    />)
                }
            </div>
        </QuestionTransition>
    )
}

export default QuestionForm