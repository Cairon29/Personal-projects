import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

/* 
    Destructuration of AXIOS methods to export and use them 
    in other files 
    notice how we already process the usfull data
*/

const getPersons = () => {
    const request = axios.get(baseUrl)
    return request.then(response => (response.data))
}

const addPerson = newPerson => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => (response.data))
}

const  deletePerson = id => { 
    const request =  axios.delete(`${baseUrl}/${id}`)
    return request.then(response => (response.data))
}

export default {  getPersons, addPerson, deletePerson }
