import { AUTH_REQUESTING } from '../constants'
export function authorizeUser(login, password) {
    return {
      type: AUTH_REQUESTING,
      payload: { login, password },
    };
  }