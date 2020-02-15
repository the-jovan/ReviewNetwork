import axios from 'axios'

export const searchByCity = (term = '') => {
  return axios.get('https://api.review.network/restaurants/search', {
    params: {
      city: term
    }
  })
  .then (response => {
    return response.data
  })
}

export const searchAll = () => {
  return axios.all([searchByCity()])
  .then(axios.spread((...args) => args))
}