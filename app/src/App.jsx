import { useState } from "react"
import Counter from "./Counter/Counter"
import Nav from "./Nav/Nav"
import PokemonList from "./PokemonList/PokemonList"

const App = () => {
  const [name, setName] = useState('christian')
  return (
    <div>
      <Nav name={name} age={99} location={'USA'}/>
      <h1>React</h1>
      <h2>Learning about the useEffect Hook</h2>
      <PokemonList/>
      <Counter/>
    </div>
  )
}
export default App