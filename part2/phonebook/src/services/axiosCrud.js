import axios from "axios";

const url = 'http://localhost:3001/persons'


const getPersonsData = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const createNewPersons = (newObj) => {
    const request = axios.post(url, newObj)
    return request.then(response => response.data)
}

const removePerson = (id) => {
    return axios.delete(`${url}/${id}`)
}

export default { getPersonsData, createNewPersons, removePerson }
