import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from '../actionTypes'

const registerUserAction = (name, email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })

    const config = { headers: { 'Content-Type': 'application/json' } }

    const { data } = await axios.post(
      '/api/users/register',
      { name, email, password },
      config
    )

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })

    localStorage.setItem('userAuthData', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message
    })
  }
}

const loginUserAction = (email, password) => async dispatch => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = { headers: { 'Content-Type': 'application/json' } }

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: data
    })

    localStorage.setItem('userAuthData', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
    })
  }
}

export { registerUserAction, loginUserAction }
