import { useEffect, useState } from "react";

const useScrollPosition = (ref) => {
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

    const handleScroll = () => {
        setScrollPosition({ x: ref.current.scrollLeft, y: ref.current.scrollTop })
    };

    useEffect(() => {
        const element = ref.current

        element.addEventListener('scroll', handleScroll)
        return () => {
            element.removeEventListener('scroll', handleScroll);
        }
    }, [ref]);

    return scrollPosition;
}

export default useScrollPosition