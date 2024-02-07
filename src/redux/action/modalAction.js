const ModalAction = {
    setShowModal: () => {
        return { type: 'SHOW_MODAL' }
    },
    
    setHideModal: () => {
        return { type: 'HIDE_MODAL' }
    },
    
    setModalMessage: value => {
        return { type: 'SET_MODAL_MESSAGE', value }
    }
}

export default ModalAction