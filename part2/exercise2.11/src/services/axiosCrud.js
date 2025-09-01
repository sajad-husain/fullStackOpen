import axios from "axios";

const url = 'http://localhost:3001/persons'
const getPersonsData = (url, newObj) => {
    const request = axios.get(url, newobj)
    return request.then
}