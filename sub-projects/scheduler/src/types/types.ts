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

interface CreateEventData {
    name: string,
    created_by: string,
    selected_date: string,
    description?: string,
    will_repeat?: boolean,
    repeat_rate?: number,
    
    invitations?: Invitations,
    labels?: Labels,
}

type Labels = string[]

interface Invitations {
    user_id: string | string[],
    invited_by: string,
    title: string,
    description?: string,
    is_closed?: boolean,
}

export { Res, User, CreateEventData, Invitations, Labels }
