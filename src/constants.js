const prod = {
  url: {
    API_URL: 'http://unimorph.ethz.ch/api/',
    ACCOUNTS_URL: 'http://unimorph.ethz.ch/accounts/'
  }
}

const dev = {
  url: {
    API_URL: 'http://127.0.0.1:8000/api/',
    ACCOUNTS_URL: 'http://127.0.0.1:8000/accounts/'
  }
}

export default {
  url: process.env.NODE_ENV === 'development' ? dev.url: prod.url
}