export interface Login {
    email : string,
    password : string, 
    remember : boolean
}

export interface RegisterForm {
    firstName : string,
    lastName : string,
    email : string,
    password : string,
    city : string,
    pincode : string
}

export default interface User {
    username?: string,
    email: string,
    timestamp?: Date
}