import { Col, Container, Image, Row } from "react-bootstrap"

const Trending = () => {
  return (
    <>
        <h3 className="text-center m-5">Trending Movies</h3>
        <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://upload.wikimedia.org/wikipedia/en/3/32/We_live_in_time_poster.jpg" rounded width={'100%'} />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://m.media-amazon.com/images/M/MV5BNzc2MWUyYzctY2E4Ny00ZTlmLThjNTMtMTViZGI5NjcyN2EzXkEyXkFqcGc@._V1_.jpg" rounded width={'100%'} />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://m.media-amazon.com/images/M/MV5BZDUxNThhYTUtYjgxNy00MGQ4LTgzOTEtZjg1YTU5NTcwNThlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" rounded width={'100%'} />
        </Col>
      </Row>
    </Container>
    </>
  )
}
export default Trending