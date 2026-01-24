interface Res {
    status: number,
    error?: string,
    details?: string,
    data?: any
}

interface User {
    id?: string,
    full_name?: string,
    email?: string,
    phone?: string,
    password?: string
}

export { Res, User }