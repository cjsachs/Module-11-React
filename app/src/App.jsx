import { useState } from "react"
import Counter from "./Counter/Counter"
import Nav from "./Nav/Nav"

const App = () => {
  const [name, setName] = useState('christian')
  return (
    <div>
      <Nav name={name} age={99} location={'USA'}/>
      <h1>React</h1>
      <h2>Learning State</h2>
      <Counter/>
    </div>
  )
}
export default App