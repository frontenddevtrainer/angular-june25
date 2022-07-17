export interface Login {
    email : string,
    password : string, 
    remember : boolean
}

export default interface User {
    username?: string,
    email: string,
    timestamp?: Date
}