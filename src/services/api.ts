import axios from 'axios'

export const github = axios.create({
  baseURL: 'https://api.github.com/users/'
})

export const githubRepos = axios.create({
  baseURL: ''
})

export const WeatherServiceLocation = axios.create({
  baseURL: 'https://api.weather.com/v3/location/',

})

export const WeatherServiceTemperature = axios.create({
  baseURL: 'https://api.weather.com/v3/wx/forecast/'
})