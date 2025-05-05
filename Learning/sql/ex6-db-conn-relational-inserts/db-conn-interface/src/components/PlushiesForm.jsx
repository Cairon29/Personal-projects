export const PlushiesForm = ({ val, fnc }) => {
    return (
        <form onSubmit={fnc.hdlSubmit}>
            <label htmlFor="name">Name</label>
            <input value={val.name} onChange={fnc.hdlName} type="text" name='name'/>
            <br />
            <label htmlFor="cost">Cost</label>
            <input value={val.cost} onChange={fnc.hdlCost} type="number" name='cost' placeholder='193019'/>
            <br />
            <label htmlFor="stock">Stock</label>
            <input value={val.stock} onChange={fnc.hdlStock} type="number" name='stock' placeholder='32'/>
            <br />
            <button type='submit'>Register plushie</button>
        </form>
    )
}
