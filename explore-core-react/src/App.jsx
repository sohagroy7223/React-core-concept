
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Dream></Dream>
      <Sports></Sports>
      <Person></Person>
      <Sports></Sports>
    </>
  )
}

function Person(){
  const age=20
  const name = "sohag roy"
  return(
    <h3>I am a person {name}  {age}</h3>
  )
}

function Sports(){
  return(
    <div>
      <h1>game</h1>
      <h2>Cricket</h2>
      <p>we love to play cricket</p>
    </div>
  )
}

function Dream(){
  return(
    <p>I want to be a professional web developer </p>
  )
}

export default App
