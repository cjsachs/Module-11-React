import { Carousel, Image } from "react-bootstrap"

const CarouselComp = () => {
  return (
    <>
        <Carousel>
      <Carousel.Item>
        <Image src="https://images7.alphacoders.com/698/698974.jpg" width={1280}/>
        <Carousel.Caption>
          <h3>American Psycho</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://images6.alphacoders.com/857/857752.png" width={1280} height={720} />
        <Carousel.Caption>
          <h3>Black Panther</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/07/paul-mescal-in-gladiator-2.jpg" width={1280} />
        <Carousel.Caption>
          <h3>Gladiator 2</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
export default CarouselComp