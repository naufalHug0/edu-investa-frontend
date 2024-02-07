import React, { useEffect } from 'react'
import Menu from '../menu'
import CoinIcon from '../../../../assets/coin-icon.png'
import { Icon } from '../../../../components'
import CheckIcon from '../../../../assets/check-circle-fill.svg'
import CloseIcon from '../../../../assets/x-circle-fill.svg'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { QuizReduxController, QuizServices } from '../../services'
import QuizCompletedGuard from '../completed-guard'
import { XpServices } from '../../../../services'

const XP = new XpServices()

const EndMenu = () => {
    const navigateTo = useNavigate()
    const {
        correct_answers,
        wrong_answers,
        earned_xp
    } = useSelector(state => state.quiz)

    XP.handleSuccess = () => {
        QuizReduxController.resetQuizStates()
        navigateTo('/app')
    }

    const onExit = () => {
        XP.update(earned_xp)
    }

    useEffect(() => {
        const onBeforeUnload = () => onExit()

        window.addEventListener("beforeunload", onBeforeUnload)
        
        return () => {
            window.removeEventListener("beforeunload", onBeforeUnload)
        }
    }, [])

    return (
        <QuizCompletedGuard>
            <div className="bg-[#475353]">
                <div className="animate-fade-in flex justify-center items-center h-screen w-full">
                <Menu buttonText='Kembali' onButtonClick={onExit} className='flex justify-center items-center flex-col'>
                    <h1 className='text-red-default text-stroke text-stroke-black font-bold text-4xl sm:text-6xl text-center'>GAME OVER!</h1>
                    <div className="py-2 px-3 bg-gradient-to-l gradient-green flex items-center gap-[6px] rounded-md mt-3">
                        <p className="font-bold text-white text-xl">{`${earned_xp >= 0 ? '+ ' : ''}${earned_xp}`}</p>
                        <img src={CoinIcon} width={22}/>
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                        <div className="flex items-center gap-2">
                            <Icon src={CheckIcon} width={25} className='text-green-contrast'/>
                            <p className="font-bold text-green-contrast">{correct_answers}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon src={CloseIcon} width={25} className='text-red-default'/>
                            <p className="font-bold text-red-default">{wrong_answers}</p>
                        </div>
                    </div>
                </Menu>
                </div>
            </div>
        </QuizCompletedGuard>
    )
}

export default EndMenu