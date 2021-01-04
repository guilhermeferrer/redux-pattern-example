import { Types, AuthActionTypes } from './types';

export function login(email: string, password: string): AuthActionTypes {
    return {
        type: Types.LOGIN,
        request: {
            method: '',
            url: ``,
            data: {
                email,
                password
            }
        }
    }
}

export function logout(): AuthActionTypes {
    return {
        type: Types.LOGOUT
    }
}