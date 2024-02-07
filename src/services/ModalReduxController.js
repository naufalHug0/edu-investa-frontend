import { ModalAction } from "../redux/action";
import store from "../redux/store";

export default class ModalReduxController {
    static show (message) {
        this.setMessage(message)
        return store.dispatch(ModalAction.setShowModal())
    }

    static hide () {
        this.setMessage(null)
        return store.dispatch(ModalAction.setHideModal())
    }

    static setMessage (message) {
        return store.dispatch(ModalAction.setModalMessage(message))
    }
}