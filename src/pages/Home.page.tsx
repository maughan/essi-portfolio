import * as React from 'react';
import {Container} from 'react-bootstrap';
import {Nav, Hero} from '../components';

const Home: React.FC = (): JSX.Element => {
	return (
		<Container fluid>
			<Nav />
			<Hero />
		</Container>
	);
};

export default Home;
