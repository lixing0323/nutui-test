import request from '../common/request'

export function login(username, password) {
  return request({ url: 'auth/login', method: 'post', data: { username, password } })
}

export function getUser(username, password) {
  return request({ url: 'auth/login', method: 'post', data: { username, password } })
}
