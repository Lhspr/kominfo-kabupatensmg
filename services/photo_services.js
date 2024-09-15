// mengimport baseURL dari constant.js
import { baseUrl } from "@/utils/constants"
// mengimport library yang diperlukan
import axios from "axios"

// membuat function untuk memanggil photo dari backendURL
export const fetchPhotoDatas = async (endpoint) => {
    const res = await axios.get(`${baseUrl}/${endpoint}`, {
        headers: { Accept: 'application/json' }
    })
    return res.data.data
}

