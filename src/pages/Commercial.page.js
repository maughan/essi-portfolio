import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from '../components';
import one from '../assets/images/commercial/3.jpg';
import two from '../assets/images/commercial/6.jpg';
import three from '../assets/images/commercial/8.jpg';
import four from '../assets/images/commercial/9.jpg';
import five from '../assets/images/commercial/10.jpg';
import six from '../assets/images/commercial/11.jpg';
import seven from '../assets/images/commercial/12.jpg';
import eight from '../assets/images/commercial/14.jpg';
import nine from '../assets/images/commercial/15.jpg';
import ten from '../assets/images/commercial/18.jpg';
import eleven from '../assets/images/commercial/30.jpg';
import twelve from '../assets/images/commercial/31.jpg';
import thirteen from '../assets/images/commercial/32.jpg';
import fourteen from '../assets/images/commercial/38.jpg';
import fifteen from '../assets/images/commercial/39.jpg';
import sixteen from '../assets/images/commercial/40.jpg';


const Commercial = () => {
  return (
    <Container fluid>
      <Nav />
      <Row style={{marginTop: '50px'}}>
      <Col md={4}>
					<img class="img-fluid" src={one} alt="" />
					<img class="img-fluid" src={four} alt="" />
          <img class="img-fluid" src={seven} alt="" />
          <img class="img-fluid" src={ten} alt="" />
          <img class="img-fluid" src={thirteen} alt="" />
          <img class="img-fluid" src={sixteen} alt="" />
				</Col>
				<Col md={4}>
					<img class="img-fluid" src={two} alt="" />
					<img class="img-fluid" src={five} alt="" />
          <img class="img-fluid" src={eight} alt="" />
          <img class="img-fluid" src={eleven} alt="" />
          <img class="img-fluid" src={fourteen} alt="" />
				</Col>
				<Col md={4}>
					<img class="img-fluid" src={three} alt="" />
          <img class="img-fluid" src={six} alt="" />
          <img class="img-fluid" src={nine} alt="" />
          <img class="img-fluid" src={twelve} alt="" />
          <img class="img-fluid" src={fifteen} alt="" />
				</Col>
      </Row>
    </Container>
  )
}

export default Commercial;