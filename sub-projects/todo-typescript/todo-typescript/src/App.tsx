import { useEffect, useState } from "react"

interface Task {
  id: number,
  title: string,
  description: string,
  done: boolean
}


function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [values, setValues] = useState<Task>({
    id: 0,
    title: '',
    description: '',
    done: false
  });

  useEffect(() => {
    fetch('http://localhost:3001/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error:', err));
  }, [])

  

  const hdlFunctions = {
    hdlTitle (e: React.ChangeEvent<HTMLInputElement>) {
      setValues((prev) => ({...prev, title: e.target.value}))
    },
    hdlDescription (e: React.ChangeEvent<HTMLInputElement>) {
      setValues((prev) => ({...prev, description: e.target.value}))
    },
    hdlSubmit(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      fetch('http://localhost:3001/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      .then(res => res.json())
      .then(data => setTasks([...tasks, data]))
      .catch(err => console.error('Error:', err));
    },
    hdlDelete(id: number) {
      fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(() => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);

      })
    }
  }

  return (
    <>
      <div>
        <h1>TODO in Typescript</h1>
        <section>
          <article id='todo-form'>
            <form onSubmit={hdlFunctions.hdlSubmit} action="">
              <label htmlFor="title">Title task</label>
              <input type="text" placeholder='title' name='title' value={values?.title} onChange={hdlFunctions.hdlTitle} />

              <label htmlFor="description">Description task</label>
              <input type="text" placeholder='description' name='description' value={values?.description} onChange={hdlFunctions.hdlDescription}/>

              <button type='submit'>Add task</button>
            </form>
          </article>

          <article id='tasks'>
            <table>
              <thead>
                <tr>
                  <td>ID</td>
                  <td>TITLE</td>
                  <td>DESCRIPTION</td>
                </tr>
              </thead>
              <tbody>
                {tasks?.map((task: Task)=> (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  )
}

export default App
