import axios from 'axios'


export default () => {

    return axios.create({
        //baseURL: `https://webapi.aidspan.org/api/v1`,
        baseURL: `http://127.0.0.1:3331/api/v1`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })


}