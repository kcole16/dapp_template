import {
  STORE_USER,
  REMOVE_USER,
  INCORRECT_LOGIN,
  LOGOUT
} from '../actions/index'

const initialState = {
  token: null,
  isAuthenticated: false,
  incorrectLogin: false,
  reloaded: false,
}

export default function store(state = initialState, action = {}) {
  switch (action.type) {
    case STORE_USER:
      return {
        ...state,
        token: action.token ? action.token : state.token,
        isAuthenticated: true,
        incorrectLogin: false,
        id: action.user ? action.user.id : null,
        firstName: action.user ? action.user.firstName : null,
        lastName: action.user ? action.user.lastName : null,
        email: action.user ? action.user.email : null,
        location: action.user ? action.user.location : null,
      }
    case REMOVE_USER:
      return {
        ...state,
        token: null,
        isAuthenticated: false
      }
    case INCORRECT_LOGIN:
      return {
        ...state,
        incorrectLogin: true
      }
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false
      }
    default:
      return state
  }
}
