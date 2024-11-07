export const SearchInput = ({search, handleSearch}) => {
  return (
    <>
        <h2>Busca tus objetos</h2>
        <input type="text" placeholder="Ej: dignidad" value={search} onChange={handleSearch}/>
    </>
  )
}
