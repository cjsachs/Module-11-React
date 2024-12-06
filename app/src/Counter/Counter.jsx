import { useState } from "react"

const Counter = () => {
    // Hooks always at the top of component
    const [count, setCount] = useState(0)
    const [name, setName] = useState('christian')

    let count2 = 0
    console.log(count2)
  return (
    <>
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <h1>Name: {name}</h1>
            <button onClick={() => setName('Amilcar')}>Change Name</button>
            <img src="https://www.wvnstv.com/wp-content/uploads/sites/76/2022/04/bf059631432045f1b3d924a963b4242f.jpg?w=1280" alt="" />
        </div>
    </>
  )
}
export default Counter