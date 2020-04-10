import * as React from "react";
import { Container, Row } from "react-bootstrap";
import { Nav } from "../components";

const Info = () => {
	const [drawer, setDrawer] = React.useState(false);
	return (
		<Container fluid>
			<Nav tab="" action={(isopen) => setDrawer(isopen)} />
			<Row>
				<div
					style={{
						height: "95vh",
						margin: "0 auto",
						textAlign: "center",
						paddingTop: "25vh",
						fontFamily: "Raleway",
						filter: `${drawer ? "blur(1.5px)" : "blur(0)"}`,
					}}
				>
					<p style={{ fontSize: "20px", fontFamily: "Raleway" }}>
						london based hair stylist
					</p>
					<p style={{ fontSize: "20px", fontFamily: "Raleway" }}>
						editorial, commercial and show experience
					</p>
					<p style={{ fontSize: "20px", fontFamily: "Raleway" }}>
						email for enquiries
					</p>
					<p
						style={{
							fontWeight: "bold",
							fontSize: "20px",
							marginBottom: "0.5rem",
							marginTop: "10vh",
						}}
					>
						email
					</p>
					<p>
						<a
							href="mailto:essi.karj@icloud.com"
							style={{
								textDecoration: "none",
								color: "black",
							}}
						>
							essi.karj@icloud.com
						</a>
					</p>
					<p
						style={{
							fontWeight: "bold",
							fontSize: "20px",
							marginBottom: "0.5rem",
						}}
					>
						mobile
					</p>
					<p>(+44) 7492 986 761</p>
					<p
						style={{
							fontWeight: "bold",
							fontSize: "20px",
							marginBottom: "0.5rem",
						}}
					>
						instagram
					</p>
					<p>
						<a
							href="https://instagram.com/essikarj"
							style={{ textDecoration: "none", color: "black" }}
						>
							@essikarj
						</a>
					</p>
				</div>
			</Row>
		</Container>
	);
};

export default Info;
