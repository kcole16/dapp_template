import {fetchResponse, generateRequest, url_base} from './requestHandling'
import {push} from 'react-router-redux'

export const STORE_USER = 'STORE_USER'
export const REMOVE_USER = ' REMOVE_USER'
export const INCORRECT_LOGIN = 'INCORRECT_LOGIN'
export const LOGOUT = 'LOGOUT'

export function storeUser(json) {
  return {
    type: STORE_USER,
    token: json.access_token,
    user: json.user ? json.user : null
  }
}

export function removeUser() {
  return {
    type: REMOVE_USER
  }
}

export function incorrectLogin() {
  return {
    type: INCORRECT_LOGIN
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

export function fetchUser() {
  const route = '/user'
  const req = generateRequest('GET', route)
  return dispatch => {
    return fetchResponse(req, dispatch, route)
    .then(json => dispatch(storeUser(json)))
    .catch(err => console.log(err))
  }
}

export function fetchLogin(user) {
  let url = url_base + '/auth'
  // const auth = btoa(`${user.email}:${user.password}`)
  const obj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cache-Control': 'no-cache'
    },
    body: JSON.stringify(user)
  };
  return dispatch => {
    return fetch(url, obj)
    .then((res) => {
      if (res.status >= 400) {
        dispatch(incorrectLogin())
        throw new Error('Incorrect Password')
      } else {
        return res.json()
      }
    })
    .then(json => dispatch(storeUser(json)))
  }
}
