import './App.css'

function Person(Props) {
  return(
    <>
  <h1>Name is {Props.Name}</h1>
  <h2>My last name is {Props.lastName}</h2>
  <h3>I am {Props.Age}</h3>
    </>
  )
}

function App() {
  return (
    <>
    <div className="app">
      <Person Name= 'Favour' lastName='mwe' Age='18 years'/>
    </div>
    </>
  )
}


export default App
