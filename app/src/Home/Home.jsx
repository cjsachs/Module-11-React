import CarouselComp from "../CarouselComp/CarouselComp"
import Footer from "../Footer/Footer"
import NavigationBar from "../NavigationBar/NavigationBar"
import Trending from "../Trending/Trending"

const Home = () => {
  return (
    <>
        <NavigationBar/>
        <CarouselComp/>
        <Trending/>
        <Footer/>
    </>
  )
}
export default Home