interface Res {
    status: number,
    success: boolean,
    error?: string,
    details?: string,
    data?: {} | null | any[]
}

interface User {
    id?: string,
    full_name?: string,
    email?: string,
    phone?: string,
    password?: string
}

export { Res, User }