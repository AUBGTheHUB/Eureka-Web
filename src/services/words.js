import axios from 'axios'
import utils from './utilities'
const baseUrl = 'http://127.0.0.1:8000/api/words'

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const add = async newWord => {
  const headers = {
    "Content-Type": "application/json"
  }
  const response = await axios.post(
    baseUrl, 
    newWord,
    {
      headers: headers
    }
    )
  return response.data
}

const update = async word => {
  const headers = {
    "Content-Type": "application/json"
  }
  const { id, ...updatedWord } = word
  const response = await axios.put(
    `${baseUrl}/${id}`, 
    word,
    {
      headers: headers
    }
    )
  return response.data
}

const getWord = (id) => {
  axios
    .get(`${baseUrl}/${id}/`).then(response => {
      console.log(response)
      return response.data
    })
    .catch(error => {
      console.log(error.message)
    })
}

export default {
  getAll,
  add,
  update,
  getWord
}