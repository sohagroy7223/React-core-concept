// export default function ToDo({task,isDone}){
//    if(isDone===true){
//     return (<h3>done: {task}</h3>)
//    }
//    else{
//     return (<h3> do now : {task}</h3>)
//    }
// }

export default function Food({task, energy}){
    if(energy===true){
        return (<p>reach man: {task}</p>)
    }
    else{
        return (<p>poor man: {task}</p>)
    }
}