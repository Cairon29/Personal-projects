export const Form = ({ valueName, valueNumber, onSubmit, onName, onNumber }) => {
    return (
        <>
            <h2>Add a new</h2>
            <form onSubmit={onSubmit}>
                <div>
                    name: <input type='text'onChange={onName} value={valueName}/>
                </div>
                <div>
                    number: <input type='number' onChange={onNumber} value={valueNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </> 
    )
}