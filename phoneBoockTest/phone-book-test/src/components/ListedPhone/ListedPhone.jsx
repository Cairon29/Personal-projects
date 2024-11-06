export const ListedPhone = ({ person, deletePerson }) => {
  return (
    <p>
        {person.name}: {person.number}
        <button onClick={deletePerson}>Delete</button>
    </p>
  )
}