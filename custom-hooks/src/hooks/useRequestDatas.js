import axios from "axios"
import { useEffect, useState } from "react"


export const useRequestDatas = ( url, initialState ) => {

    const [data, setData] = useState(initialState)
    const [ isLoading, setIsloading] = useState(true)
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setData(response.data)
            setIsloading(false)
        }).catch((error) => {
            console.log(error.response)
            setIsloading(false)
            setIsError(true)
        }) 
    }, [url])

    return [data, isLoading, isError]
}