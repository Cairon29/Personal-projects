export const SearchInput = ({search, handleSearch}) => {
  return (
    <section id="searchInput">
      <h2 className="section-h2">Busca tus objetos</h2>
      <input type="text" name="search-bar" placeholder="Ej: dignidad" value={search} onChange={handleSearch}/>
    </section>
  )
}
