export interface User {
    id:number,
    'name': string,
    'email':string

}

export interface UserState {
    error: boolean,
   // results: Todo[]
}
export interface UserPayload {
    error: boolean,
    data:  User[]
}
export const initialState = {
    error: false,
    results: []
};

export interface Actions {
    id?: number
    name?: string,
    email?: string,
    error?: boolean,
    type?:string,
    payload?: UserPayload
}




