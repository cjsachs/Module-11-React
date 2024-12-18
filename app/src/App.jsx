import CarouselComp from "./CarouselComp/CarouselComp"
import Footer from "./Footer/Footer"
import NavigationBar from "./NavigationBar/NavigationBar"
import Trending from "./Trending/Trending"

const App = () => {
  return (
    <div>
      <NavigationBar/>
      <CarouselComp/>
      <Trending/>
      <Footer/>
    </div>
  )
}
export default App