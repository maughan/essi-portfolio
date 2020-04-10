import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Nav} from '../components';
import one from '../assets/images/shows/1.jpg';
import two from '../assets/images/shows/2.jpg';
import three from '../assets/images/shows/26.jpg';
import four from '../assets/images/shows/27.jpg';
import five from '../assets/images/shows/28.jpg';

const Shows = () => {
	const [drawer, setDrawer] = React.useState(false)

	return (
		<Container fluid>
			<Nav action={(isopen) => setDrawer(isopen)}/>
			<Row style={{marginTop: '100px', filter: `${drawer ? "blur(1.5px)" : "blur(0)"}`}}>
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
