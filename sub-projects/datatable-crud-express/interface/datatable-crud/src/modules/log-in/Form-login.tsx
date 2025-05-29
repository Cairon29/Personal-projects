export const FormLogin = () => {
    return (
        <form action="" className="user-form">
        <label htmlFor="email">Email</label>
        <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="example@email.com"
            className="input-form"
        />
        <br />
        <label htmlFor="password">Password</label>
        <input 
            type="password" 
            name="password" 
            id="password" 
            placeholder="your password"
            className="input-form"
        />
        </form>
    )
}
