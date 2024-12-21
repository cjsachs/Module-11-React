import { Route, Routes } from "react-router"
import Home from "./Home/Home"
import Profile from './Profile/Profile'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  )
}
export default App