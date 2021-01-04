export const Types = {
    LOGIN: '@AUTH/LOGIN',
    LOGOUT: '@AUTH/LOGOUT',
}

export interface LoginDTO {
    email: string;
    password: string;
}

interface DefaultAction {
    type: string;
}

interface IResponse {
    data: any;
}

interface ILoginRequest extends DefaultAction {
    request: {
        method: string;
        url: string;
        data: LoginDTO;
    }
}

interface ILoginResponse extends ILoginRequest {
    response: IResponse;
}

export type AuthActionTypes = ILoginRequest | DefaultAction;
export type AuthReducerActionTypes = ILoginResponse & DefaultAction;