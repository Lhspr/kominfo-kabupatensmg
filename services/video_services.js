// mengimport baseURL dari constant.js
import { baseUrl } from "@/utils/constants"
// mengimport library lain
import axios from "axios"

// membuat function untuk fetchdata video
export const fetchVideoDatas = async (endpoint) => {
    const res = await axios.get(`${baseUrl}/${endpoint}`, {
        headers: { Accept: 'application/json' }
    })
    return res.data.data
}

