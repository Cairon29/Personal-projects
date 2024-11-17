import axios from 'axios';
const baseUrl = 'http://localhost:3001/lost-items'

const getLostItems = () => {
    const request = axios.get(baseUrl)
    return request.then(response => (response.data))
}

const addLostItem = newLostItem => {
    const request = axios.post(baseUrl, newLostItem)
    return request.then(response => (response.data))
}

const  deleteLostItem = id => { 
    const request =  axios.delete(`${baseUrl}/${id}`)
    return request.then(response => (response.data))
}

export default { getLostItems, addLostItem, deleteLostItem }