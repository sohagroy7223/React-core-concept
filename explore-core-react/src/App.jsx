
import './App.css'

function App() {
  return (
    <>
      <h1>React core concept</h1>
      <Student></Student>
      <Person></Person>
      <Dream></Dream>
      <Device></Device>
    </>
  )
}

function Person(){
  const age=20
  const name = "sohag roy"
  return(
    <h3 style={{
      color: "skyBlue",
      fontSize: "30px"
    }}>I am a person {name}  {age}</h3>
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

function Device(){
  return(
    <div>
      <h3>device:</h3>
      <p>price: </p>
    </div>
  )
}


function Dream(){
  const styleDream = {
    color: "blue",
   textAlign: "center",
   fontSize: "20px"
}
  return(
    <p style={styleDream}>I want to be a professional web developer </p>
  )
}

function Student(){
  return(
    <div className='student'>
      <p>name:</p>
      <p>dept:</p>
    </div>
  )
}

export default App
