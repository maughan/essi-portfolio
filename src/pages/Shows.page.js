import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Nav} from '../components';
import one from '../assets/images/shows/1.jpg';
import two from '../assets/images/shows/2.jpg';
import three from '../assets/images/shows/26.jpg';
import four from '../assets/images/shows/27.jpg';
import five from '../assets/images/shows/28.jpg';

const Shows = () => {
	return (
		<Container fluid>
			<Nav />
			<Row style={{marginTop: '100px'}}>
				<Col md={4}>
					<img class="img-fluid" src={one} alt="" />
					<img class="img-fluid" src={three} alt="" />
				</Col>
				<Col md={4}>
					<img class="img-fluid" src={four} alt="" />
					<img class="img-fluid" src={five} alt="" />
				</Col>
				<Col md={4}>
					<img class="img-fluid" src={two} alt="" />
				</Col>
			</Row>
		</Container>
	);
};

export default Shows;
