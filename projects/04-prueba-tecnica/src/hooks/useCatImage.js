import { useState, useEffect } from 'react'
import { getImg } from '../services/images.js'

export function useCatImage({ fact }) {
    const [img, setImg] = useState()

    useEffect(() => {
        if (!fact) return

        const threeFirstWord = fact.split(' ', 3).join(' ')

        getImg(threeFirstWord).then(newImg => setImg(newImg))
    }, [fact])

    return { img }
}