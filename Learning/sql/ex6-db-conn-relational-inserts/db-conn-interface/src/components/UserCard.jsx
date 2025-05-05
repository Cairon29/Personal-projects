export const UserCard = ({user}) => {
    return (
        <div className="user-card">
            <div className="card-header">
                <h2 className="user-name">{user.name} {user.surname}</h2>
                <span className="user-id">ID: {user.user_id}</span>
            </div>
            <div className="card-body">
                <div className="info-row">
                    <span className="label">Email:</span>
                    <span className="value">{user.email}</span>
                </div>
                <div className="info-row">
                    <span className="label">Name:</span>
                    <span className="value">{user.name}</span>
                </div>
                <div className="info-row">
                    <span className="label">Surname:</span>
                    <span className="value">{user.surname}</span>
                </div>
                <div className="info-row">
                    <span className="label">Password:</span>
                    <span className="value">{user.password}</span>
                </div>
            </div>
        </div>
    )
}
