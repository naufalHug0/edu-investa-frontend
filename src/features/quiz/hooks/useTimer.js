import { useMemo } from "react"

const useTimer = (setSeconds) => {
    const interval = useMemo(() => {
        return setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1)
        }, 1000)
    }, [])

    const clearTimer = () => {
        clearInterval(interval)
    }

    return [clearTimer]
}

export default useTimer