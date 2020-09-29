export interface Todo {
    title?: string,
    completed: boolean
}

export interface TodoState {
    error: boolean,
    results: Todo[]
}
export interface Payload {
    error: boolean,
    data:  Todo[]
}
export const initialState = {
    error: false,
    results: []
};

export interface Actions {
    index?: number
    type?: string,
    title?: string,
    error?: boolean,
    payload?: Payload
}




