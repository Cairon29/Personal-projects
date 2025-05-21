import { type PersonAge, type Person2 } from "./types/type1";
type isFalse = boolean;

// ↓ the interface is defining the props that are going to be used in the component, it has always to be an interface
interface Props {
  working: isFalse;
  person: PersonAge;
  person2: Person2;
}
//                   ↓ this are the props that are using the interface

// const App = ({working, person, person2}: Props): React.ReactNode => {
const App: React.FC<Props> = ({ working, /* noProp */ person, person2 }) => {
  //                                           ↑
  // this prop passed to the component does not work because it is not defined in the interface
  return (
    <>
      the thing is that newer versions of vite are not generating the eslintrc file
      {working ? 'working' : 'not working' }
      <p>person 1 age: {person}</p>
      <p>person 2 age: {person2.age}</p>
      <p>person 2 name: {person2.name}</p>
      {
        person2.hobbies.map((hobby, index) => {
          return <p key={index}>{hobby}</p>
        })
      }
    </>
  )
}

export default App
