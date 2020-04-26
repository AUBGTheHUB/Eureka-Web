import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api/words'

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
  const response = await axios(
    `${baseUrl}/${id}`, 
    word,
    {
      headers: headers
    }
    )
  return response.data
}

export default {
  getAll,
  add,
  update
}