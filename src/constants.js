const prod = {
  url: {
    API_URL: 'http://unimorph.ethz.ch/api'
  }
}

const dev = {
  url: {
    API_URL: 'http://127.0.0.1:8000/api'
  }
}

const devId = {
  id: {
    wordId: 5
  }
}

const prodId = {
  id: {
    wordId: Math.floor((Math.random()*1000) + 1)
  }
}

export default {
  url: process.env.NODE_ENV === 'development' ? dev: prod,
  wordId: process.env.NODE_ENV === 'development' ? devId: prodId
}