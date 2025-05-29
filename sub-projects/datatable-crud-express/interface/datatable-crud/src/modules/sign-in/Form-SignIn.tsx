export const FormSignIn = () => {
    return (
        <form action="" className="user-form">
            <label htmlFor="nombres">Nombres</label>
            <input
                type="text"
                name="nombres"
                id="nombres"
                placeholder="your name"
                className="input-form"
            />
            <br />
            <label htmlFor="apellidos">Apellidos</label>
            <input
                type="text"
                name="apellidos"
                id="apellidos"
                placeholder="your last name"
                className="input-form"
            />
            <br />
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="example@email.com"
                className="input-form"
            />
            <br />
            <label htmlFor="password">Contraseña</label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                placeholder="your password"
                className="input-form"
            />
            <br />
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input 
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="confirm your password"
                className="input-form" 
            />
        </form>
    )
}


// CREATE TABLE usuarios (
//     id_usuario INT AUTO_INCREMENT PRIMARY KEY,
//     usuario VARCHAR(50) NOT NULL,
//     nombres VARCHAR(100) NOT NULL,
//     apellidos VARCHAR(100) NOT NULL,
//     email VARCHAR(100) NOT NULL UNIQUE,
//     password VARCHAR(255) NOT NULL,
//     rol TINYINT(1) NOT NULL CHECK (rol IN (1, 2))
// );
