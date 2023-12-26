import { useEffect, useMemo } from "react"

const useTimer = (seconds, setSeconds) => {
    const interval = useMemo(() => {
        return setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1)
        }, 1000)
    }, [])

    const clearTimer = () => {
        clearInterval(interval)
    }

    useEffect(() => {
        if (seconds == 0) clearTimer()
    }, [seconds])
}

export default useTimer