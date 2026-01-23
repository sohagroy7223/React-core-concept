
import './App.css'
import ToDo from './todo'
import Food from './todo'
function App() {
  return (
    <>
      <h1>React core concept</h1>

      <Food task ="he is okay" energy={true}></Food>
      <Food task ="he is hungry" energy={false}></Food>
      
      <ToDo hay = "we should visit new place" status ={true}></ToDo>
      <ToDo hay = "you should to take rest" status ={false}></ToDo>
      <ToDo hay = "we should read book" status ={true}></ToDo>
      {/* <ToDo task = ' learning react' isDone = {true}></ToDo>
      <ToDo task = ' revision js' isDone = {true}></ToDo>
      <ToDo task = ' going to home ' isDone = {false}></ToDo>
      <ToDo task = ' sleeping now' isDone = {false}></ToDo> */}
      
      {/* <Student name="sohag" dep="CSE"></Student>
      <Student name="sagor" dep="Marketing"></Student>
      <Person></Person>
      <Dream></Dream>
      <Device name=" laptop" price = "$500"></Device>
      <Device name=" tablet" price="$200"></Device>
      <Device name=" mobil" price="$300"></Device>
      <Phone name=" Redmi" price="$150"></Phone>
      <Phone name=" Samsung" price="$1050"></Phone>
      <Phone name=" Apple" price="$1250"></Phone> */}
      
    </>
  )
}




function Phone({name,price}){

  return(
    <div className='student'>
      <h2>Mobile brand : {name}</h2>
      <h4>brand:{name} </h4>
      <p>price: {price} </p> 
    </div>

  )
}


function Student(props){
  return(
    <div className='student'>
      <p>name: {props.name}</p>
      <p>dept: {props.dep}</p>
    </div>
  )
}



function Device(prop){
  // console.log(prop)
  return(
    <div style={{
      border:"2px solid green", 
      borderRadius: "20px",
      margin: "10px"
    }}>
      <h3>device: {prop.name}</h3>
      <p>price:{prop.price} </p>
    </div>
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



export default App
