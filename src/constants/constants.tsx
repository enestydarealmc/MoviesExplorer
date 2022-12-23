import {getConfig} from '@ijl/cli'

export const server = 'https://tmdbproxy.herokuapp.com/3'
export const image_server = 'https://image-tmdbproxy.herokuapp.com'
export const API_KEY = getConfig()['apiKey']