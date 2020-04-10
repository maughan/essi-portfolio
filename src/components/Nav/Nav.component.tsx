import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { Icon } from "../../components";
import * as Styled from "./Nav.styles";

const Nav: React.FC = (): JSX.Element => {
	const [drawer, setDrawer] = React.useState(false);
	const [mobileDrawer, setMobileDrawer] = React.useState(false);

	return (
		<Styled.Wrapper>
			<Styled.MobileSpacer md={4} xs={3} />
			<Col md={4}>
				<p
					style={{
						fontFamily: "Raleway",
						textAlign: "center",
						cursor: "default",
					}}
				>
					<Styled.Name href="/">essi karjalainen</Styled.Name>
				</p>
			</Col>
			{/* <Styled.Spacer md={4} xs={4} /> */}
			<Styled.Column md={4}>
				<Styled.NavItem href="/about">about</Styled.NavItem>
				<Styled.NavItem href="/contact">contact</Styled.NavItem>
				<Styled.Portfolio>
					<div
						style={{
							width: "100%",
							height: "100%",
							backgroundColor: "white",
							zIndex: 200,
						}}
					>
						<Styled.NavItem onClick={() => setDrawer(!drawer)}>
							portfolio
						</Styled.NavItem>
					</div>
					<Styled.Drawer visible={drawer}>
						<Styled.NavItem href="/commercial">commercial</Styled.NavItem>
						<Styled.NavItem href="/editorials">editorial</Styled.NavItem>
						<Styled.NavItem href="/shows">shows</Styled.NavItem>
					</Styled.Drawer>
				</Styled.Portfolio>
			</Styled.Column>
			<Styled.IconWrapper onClick={() => setMobileDrawer(!mobileDrawer)}>
				<Styled.Hamburger>
					<Icon name="bars" iconColor="#999" />
				</Styled.Hamburger>
			</Styled.IconWrapper>
			<Styled.SideDrawer visible={mobileDrawer}>
				<div
					style={{ display: "flex", flexDirection: "column", height: "50%" }}
				>
					<Styled.MobileItem href="/commercial">commercial</Styled.MobileItem>
					<Styled.MobileItem href="/editorials">editorial</Styled.MobileItem>
					<Styled.MobileItem href="/shows">shows</Styled.MobileItem>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "50%",
						justifyContent: "flex-end",
					}}
				>
					<Styled.MobileItem href="/about">about</Styled.MobileItem>
					<Styled.MobileItem href="/contact">contact</Styled.MobileItem>
				</div>
			</Styled.SideDrawer>
		</Styled.Wrapper>
	);
};

export default Nav;
