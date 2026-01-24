// export default function ToDo({task,isDone}){
//    if(isDone===true){
//     return (<h3>done: {task}</h3>)
//    }
//    else{
//     return (<h3> do now : {task}</h3>)
//    }
// } 



// export default function Food({task, energy}){
//     if(energy===true){
//         return (<p>reach man: {task}</p>)
//     }
//     else{
//         return (<p>poor man: {task}</p>)
//     }
// }
        
// export default function ToDo({hay , status, time=0}){
//     if(status===true){
//         return  (<p>yes {hay} duration {time}</p>)
//     }
//     else{
//         return (<p>it {hay}</p>)
//     }
// }


// conditional rendering option 3: ternary 
// condition? if true: false 

// export default function ToDo({hay, status, time=0}){
//     return status?<li> done: {hay} {time}</li>: <li>not done: {hay} </li>
// }

// conditional rendering option 4: ternary //if condition true so, show it &&.

// export default function ToDo({hay, status, time=0}){
//     return status && <li>done {hay} {time}</li>
// }


// conditional rendering option 5: ternary //if condition false so, show it ||.

// export default function ToDo({hay, status, time=0}){
//     return status || <li>not done {hay} {time}</li>
// }

// conditional rendering option 6:

// export default function ToDo({hay , status, time=0}){
//     if(status===true){
//         return  null
//     }
//     else{
//         return (<p>not done {hay}</p>)
//     }
// }

// conditional rendering option 7: use variable

//  export default function ToDo({hay , status, time=0}){

//     const displayTime= time ? time : 0   //use ternary

//     let listItem;

//     if(status===true){
//       listItem = (<p>yes {hay} duration {displayTime}</p>)
//     }
//     else{
//         listItem= (<p>not done {hay}</p>)
//     }
//     return listItem
// }


 export default function ToDo({hay , status, time=0}){

    // const displayTime= time ? time : 0   //use ternary

    let listItem;

    if(status===true){
      listItem = (<p>yes {hay} duration {time?"i am done this":"i am not done yet"}</p>)
    }
    else{
        listItem= (<p>not done {hay}</p>)
    }
    return listItem
}