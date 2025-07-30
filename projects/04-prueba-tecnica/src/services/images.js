export const getImg = async (threeFirstWord) => {
    const response = await fetch(`https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`)
    const data = await response.json()
    const { url } = data
    return url
}