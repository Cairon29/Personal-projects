export const Filter = ({value, logic}) => {
    return (
        <p> Filter shown with: 
          <input type="text" value={value} onChange={logic} placeholder='Ej: Juan'/>
        </p>
    )
}