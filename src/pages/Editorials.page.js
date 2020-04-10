import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from '../components';
import one from '../assets/images/editorials/4.jpg';
import two from '../assets/images/editorials/5.jpg';
import three from '../assets/images/editorials/7.jpg';
import four from '../assets/images/editorials/13.jpg';
import five from '../assets/images/editorials/16.jpg';
import six from '../assets/images/editorials/17.jpg';
import seven from '../assets/images/editorials/19.jpg';
import eight from '../assets/images/editorials/20.jpg';
import nine from '../assets/images/editorials/21.jpg';
import ten from '../assets/images/editorials/22.jpg';
import eleven from '../assets/images/editorials/23.jpg';
import twelve from '../assets/images/editorials/24.jpg';
import thirteen from '../assets/images/editorials/25.jpg';
import fourteen from '../assets/images/editorials/29.jpg';
import fifteen from '../assets/images/editorials/33.jpg';
import sixteen from '../assets/images/editorials/34.jpg';
import seventeen from '../assets/images/editorials/35.jpg';
import eighteen from '../assets/images/editorials/36.jpg';
import nineteen from '../assets/images/editorials/37.jpg';

const Editorials = () => {
  const [drawer, setDrawer] = React.useState(false)

  return (
    <Container fluid>
      <Nav action={(isopen) => setDrawer(isopen)}/>
      <Row style={{marginTop: '100px', filter: `${drawer ? "blur(1.5px)" : "blur(0)"}`}}>
				<Col md={4}>
					<img class="img-fluid" src={one} alt="" />
					<img class="img-fluid" src={four} alt="" />
          <img class="img-fluid" src={seven} alt="" />
          <img class="img-fluid" src={ten} alt="" />
          <img class="img-fluid" src={thirteen} alt="" />
          <img class="img-fluid" src={sixteen} alt="" />
          <img class="img-fluid" src={nineteen} alt="" />

				</Col>
				<Col md={4}>
					<img class="img-fluid" src={two} alt="" />
					<img class="img-fluid" src={five} alt="" />
          <img class="img-fluid" src={eight} alt="" />
          <img class="img-fluid" src={eleven} alt="" />
          <img class="img-fluid" src={fourteen} alt="" />
          <img class="img-fluid" src={seventeen} alt="" />
				</Col>
				<Col md={4}>
					<img class="img-fluid" src={three} alt="" />
          <img class="img-fluid" src={six} alt="" />
          <img class="img-fluid" src={nine} alt="" />
          <img class="img-fluid" src={twelve} alt="" />
          <img class="img-fluid" src={fifteen} alt="" />
          <img class="img-fluid" src={eighteen} alt="" />
				</Col>
			</Row>
    </Container>
  )
};

export default Editorials;