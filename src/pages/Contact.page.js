import * as React from 'react';
import {Container, Row} from 'react-bootstrap';
import {Nav} from '../components';

const Contact = () => {
	return (
		<Container fluid>
			<Nav tab=""/>
			<Row>
				<div
					style={{
						height: '95vh',
						margin: '0 auto',
						textAlign: 'center',
						paddingTop: '30vh',
						fontFamily: 'Raleway',
					}}
				>
					<p
						style={{
							fontWeight: 'bold',
							fontSize: '20px',
							marginBottom: '0.5rem',
						}}
					>
						email
					</p>
					<p>
						<a
							href="mailto:essi.karj@icloud.com"
							style={{
								textDecoration: 'none',
								color: 'black',
							}}
						>
							essi.karj@icloud.com
						</a>
					</p>
					<p
						style={{
							fontWeight: 'bold',
							fontSize: '20px',
							marginBottom: '0.5rem',
						}}
					>
						mobile
					</p>
					<p>(+44) 7492 986 761</p>
					<p
						style={{
							fontWeight: 'bold',
							fontSize: '20px',
							marginBottom: '0.5rem',
						}}
					>
						instagram
					</p>
					<p>
						<a
							href="https://instagram.com/essikarj"
							style={{textDecoration: 'none', color: 'black'}}
						>
							@essikarj
						</a>
					</p>
				</div>
			</Row>
		</Container>
	);
};

export default Contact;
