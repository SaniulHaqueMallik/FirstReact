import './App.css';

//1st video 


// function App() {
//   return (
//     <div className="App"> 
//     <User name="MIKE" age={21} email="s@g.com"/>
//     <User name="SANI" age={22} email="a@g.com"/>

//     </div>
//   );
// }

// 1

// const User = (props) => {
//   return  (
//   <div>
//      <h1>{props.name}</h1>
//      <h2>{props.age}</h2>
//      <h3>{props.email}</h3>
//     </div>);
// }
// 

// 1st ex.(2)

// function App() {
//   return(
//     <div className='App'>
//       <Job salary = {90000} position="Senior SDE" company="Netfix"/>
//       <Job salary = {120000} position="Junior SDE" company="Google"/>
//       <Job salary = {100000} position="Data Scientist" company="Amazon"/>

//     </div>
//   )
// }
// const Job=(props)=> {
//   return(
//     <div>
//       <h1 className="name">{props.company}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.salary}</h1>
//     </div>
//   )
// }

// if-else - ternary----3------------------------

// const age = 16;
// function App(){
//   if (age>=18) {
//     return <h1>Over age</h1>
//   }
//   else{
//     return <h1>Under age</h1>
//   }

// }

// 4. ternary

// function App() {
//   const age = 19;

//   return (
  // <div className='App'>{age>=18 ? <h1>Over age</h1> : <h1>under age</h1>}</div>)
// }

// 5. another ex.

// function App(){
//   const age = 19;
//   const isGreen = true;

//   return ( 
//     <div className='App'>
//       {isGreen ? <h1>color</h1> : <h1>not</h1>}
//     </div>
//   )
// }

// 6. ----------------------------------

// function App(){
  
//   const isGreen = false;

//   return ( 
//     <div className='App'>
//       <h1 style={{color: isGreen ? "green" : "red"}}>Color</h1>
//     </div>
//   )
// }

// 7. Working with LISTS---------------

// function App(){
//    const name = ["sani", "john", "Mike"]
//    return <div className='App'><h1>{name[0]}</h1>
//           <h1>{name[1]}</h1></div>
// }

// 8.-----------

// function App(){
//   const names = ["sani", "john", "Mike"]

//   return ( 
//   <div className='App'>
//     {names.map((name,key) => {
//       return <h1 key={key}>{name}</h1>;
//     })}
//   </div>
//   )
//   }


// 9.---------------------

// function App(){
//   const users = [
//     {name: 'sani' , age: 22},
//     {name: 'Mkie', age: 20},
//   ];
//   return (
//     <div className='App'>
//       {users.map((user, key) =>{

//         return (<div><h1 key={key}>{user.name}</h1>
//               <h1>{user.age}</h1></div>);
//       })}
//     </div>
//   )}



// 10.---------------------

// function App(){
//   const users = [
//     {name: 'sani' , age: 22},
//     {name: 'Mike', age: 20},
//   ];
//   return (
//     <div className='App'>
//       {users.map((user, key) =>{

//         return <User name={user.name} age={user.age} />
//       })}
//     </div>
//   )}

// const User = (props) => {
//   return (
//     <div>
//       {props.name} {props.age}
//     </div>
//   )
// }


// 11. EX ------------------

function App(){

  const planets = [
    { name: "Mars", isGasPlanet: false},
    { name: "jupiter", isGasPlanet: true},
    { name: "venus", isGasPlanet: false},
    { name: "Uranus", isGasPlanet: true},
  ]

  return (
    <div className='Apps'>
      {planets.map((planet,key) => {
        return (planet.isGasPlanet) ? <h1>{planet.name}</h1>  : <h1></h1>
      })}
    </div>
  )


  
}

export default App;
