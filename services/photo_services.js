import { baseUrl } from "@/utils/constants"
import axios from "axios"

export const fetchPhotoDatas = async (endpoint) => {
    const res = await axios.get(`${baseUrl}/${endpoint}`, {
        headers: { Accept: 'application/json' }
    })
    return res.data.data
}

