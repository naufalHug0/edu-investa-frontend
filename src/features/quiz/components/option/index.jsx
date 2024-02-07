import React, { useState } from 'react'
import CoinIcon from '../../../../assets/coin-icon.png'
import { QuizReduxController } from '../../services'
import { useSelector } from 'react-redux'

const Option = ({ value, isCorrect, reward_xp, userHasAnswered, setUserHasAnswered, changeQuestion, handleCollectXp }) => {
    const [isSelected, setIsSelected] = useState(false)
    const {
        correct_answers,
        wrong_answers
    } = useSelector(state => state.quiz)

    const resetSelection = () => {
        setIsSelected(false)
        setUserHasAnswered(false)
    }

    const handleCorrectOption = () => {
        if (!userHasAnswered) {
            handleCollectXp(
                reward_xp * (isCorrect ? 1 : -1)
            )
            setIsSelected(true)
            setUserHasAnswered(true)

            if (isCorrect) {
                QuizReduxController.setCorrectAnswers(correct_answers + 1)
            } else {
                QuizReduxController.setWrongAnswers(wrong_answers + 1)
            }

            setTimeout(() => changeQuestion(resetSelection), 1800)
        }
    }

    const getOptionType = () => {
        if (userHasAnswered) {
            return isCorrect ? 'correct-option' : isSelected ? 'wrong-option' : 'option-bg';
        }
        
        return 'option-bg';
    }

    return (
        <div 
        className={`flex items-center justify-between rounded-3xl border-2 text-white px-6 h-[68px] transition cursor-pointer ${getOptionType()}`}
        onClick={handleCorrectOption}
        >
            {value}
            {
                isSelected && 
                <div className="py-2 px-3 bg-white flex items-center gap-[6px] rounded-md">
                    <p className={`font-bold text-xl ${isCorrect ? 'text-green-contrast':'text-red-default'}`}>{isCorrect ? '+':'-'} {reward_xp}</p>
                    <img src={CoinIcon} width={22}/>
                </div>
            }
        </div>
    )
}

export default Option