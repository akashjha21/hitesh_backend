import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  type Joke = {
    id: number,
    title: string,
    content: string
  }
  const [jokes, setJokes] = useState<Joke[]>([])

  // At First the request will be revoked due to the CORS safety feature. as it is for our safety so that not every url is allowed to access our data.
  // If your URL is different then also its CORS issue and even if your port number is different then also its CORS issue.
  // The first technique is to Whitelist the URL in the backend server like IP whitelisting or domain whitelisting.
  // EASIEST WAY IS TO USE/INSTALL CORS PACKAGE IN THE BACKEND SERVER.

  // Do standadisation of the URL i.e instead of using 'http://localhost:3000/api/jokes' use '/api/jokes'
    // but this will not give error that 404 url not found

    // if we have created our app with create-react-app then we can simply add proxy in package.json
    // "proxy": "http://localhost:3000"

    // Here GO AND CHECK THE vite.config.ts file.
    // After doing the change in vite.config.ts file the server will think that the request is coming from the same origin and it will not give CORS error.

  useEffect(() => {
    
    axios.get<Joke[]>('/api/jokes')
    .then(response => { setJokes(response.data) })
    .catch(error => { console.error('Error fetching jokes:', error) })
  }, [])

  return (
    <>
      <h1>Hello World</h1>
      <p>{`Jokes: ${jokes.length}`}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
        <h2>{joke.title}</h2>
        <h3>{joke.content}</h3>
        </div>
      ))}
    </>
  )
}

export default App
