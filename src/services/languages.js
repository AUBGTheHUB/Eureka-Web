import axios from 'axios'

// baseUrl will be changed later to the correct address of the server
const baseUrl = 'http://127.0.0.1:8000/api/languages/'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const add = async newLang => {
  const headers = {
    "Content-Type": "application/json"
  }
  const response = await axios.post(
    baseUrl, 
    newLang,
    {
      headers: headers
    }
    )
  return response.data
}

const update = async lang => {
  const headers = {
    "Content-Type": "application/json"
  }
  const { id, ...updatedLang } = lang
  const response = await axios(
    `${baseUrl}/${id}`, 
    lang,
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