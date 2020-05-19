const prod = {
  url: {
    API_URL: 'http://unimorph.ethz.ch/api/words'
  }
}

const dev = {
  url: {
    API_URL: 'http://127.0.0.1:8000/api/words'
  }
}
export default process.env.NODE_ENV === 'development' ? dev: prod