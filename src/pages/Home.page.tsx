import * as React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "../components";
import about from "../assets/images/about.jpg";

const Home: React.FC = (): JSX.Element => {
	const [drawer, setDrawer] = React.useState(false)
	return (
		<Container fluid style={{ padding: "0" }}>
			<Nav action={(isopen) => setDrawer(isopen)}/>
			<div
				style={{
					height: "95vh",
					width: "100vw",
					backgroundImage: `url(${about})`,
					backgroundPosition: "top",
					backgroundSize: "inherit",
					marginTop: '5vh',
					filter: `${drawer ? "blur(1.5px)" : "blur(0)"}`
				}}
			/>
		</Container>
	);
};

export default Home;
