import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {ModalReduxController} from '../../services'

export default function Modal() {
    let [isOpen, setIsOpen] = useState(true)
    const { showModal, message } = useSelector(state => state.modal)
    const navigateTo = useNavigate()

    function closeModal() {
        setIsOpen(false)
        ModalReduxController.hide()
    }

    function openModal() {
        setIsOpen(true)
    }

    const redirectOnClick = url => {
        navigateTo(url)
        ModalReduxController.hide()
    }

    return (
        showModal && <>
        <Transition appear show={showModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all max-h-[90vh]">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        {
                            message.title
                        }
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                        {
                            message.body
                        }
                        </p>
                    </div>

                    <div className="mt-4 flex gap-2 items-center">
                        {
                            message.options.map((option,i) => {
                                return <ModalButton key={i} type={option.type} title={option.title} onClick={
                                    option?.url ? () => redirectOnClick(option.url) : (
                                        option?.action ? option.action : closeModal
                                    )
                                } />
                            })
                        }
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
        </>
    )
}

const ModalButton = ({title, type = 'primary', ...rest}) => {
    return (
        <button
        className={`inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium shadow-hover focus:outline-none
        ${type == 'primary' ? 'btn-primary':''}
        ${type == 'danger' ? 'btn-danger border-none':''}
        ${type == 'secondary' ? 'btn-secondary':''}
        `}
        {...rest}
        >
        {title}
        </button>
    )
}
