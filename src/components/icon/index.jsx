import axios from 'axios';
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'

const Icon = ({
    src,
    width,
    ...rest
}) => {
    const [svgContent, setSvgContent] = useState('')

    useEffect(() => {
        const fetchSvg = async () => {
            try {
                const response = await axios.get(src)
                const modifiedSvg = response.data.replace(/width="[^"]*"/, `width="${width}"`).replace(/height="[^"]*"/, '')

                setSvgContent(modifiedSvg)

            } catch (error) {
                console.error('Error fetching SVG:', error)
            }
        }

        fetchSvg()
    }, [src])

    return (
        <div
        {...rest}
        >{parse(svgContent)}</div>
    )
}

export default Icon