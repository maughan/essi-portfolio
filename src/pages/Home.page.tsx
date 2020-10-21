import * as React from "react";
import styled from 'styled-components'
import { Container, Row } from "react-bootstrap";
import {commercialImages} from '../lib/commercial'
import {editorialImages} from "../lib/editorial";
import {showsImages} from "../lib/shows";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/pro-regular-svg-icons";

export function Home() {



	return (
		<Container fluid style={{ padding: "0" }}>
			<Name>Essi Karjalainen</Name>
			<Info>
				<InfoWrapper>
				<FontAwesomeIcon icon={faEnvelope} style={{fontSize: 20}}/>
				<InfoText onClick={() => window.open('mailto:essi.karj@icloud.com')}>essi.karj@icloud.com</InfoText>
				</InfoWrapper>
				<InfoWrapper>
				<i className='fa fa-instagram' style={{fontSize: 20}}/>
				<InfoText onClick={() => window.open('https://instagram.com/essikarj')}>@essikarj</InfoText>
				</InfoWrapper>
			</Info>
			<ColumnsWrapper noGutters>
				<Column>
					<Title>shows</Title>
					<ScrollWrapper>
					<InnerWrapper>
						{showsImages.map((image, index) => <img src={image} alt={'hi'} style={{width: '100%'}}/>)}
					</InnerWrapper>
					</ScrollWrapper>
				</Column>
				<Column style={{marginTop: "5vh"}}>
					<Title>editorials</Title>
					<ScrollWrapper>
				<InnerWrapper>
					{editorialImages.map((image, index) => <img src={image} alt={'hi'} style={{width: '100%'}}/>)}
				</InnerWrapper>
					</ScrollWrapper>
				</Column>
				<Column>
					<Title>commercial</Title>
					<ScrollWrapper>
					<InnerWrapper>
						{commercialImages.map((image, index) => <img src={image} alt={'hi'} style={{width: '100%'}}/>)}
					</InnerWrapper>
					</ScrollWrapper>
				</Column>
			</ColumnsWrapper>
		</Container>
	);
}

const Name = styled.p`
	font-family: Questrial;
	letter-spacing: 1px;
	position: absolute;
	left: 50px;
	top: 50px;
	font-size: 40px;
	
	@media screen and (max-width: 950px) {
		width: 100%;
		left: 0;
		right: 0;
		text-align: center;
	}
`;

const Info = styled.div`
	display: flex;
	position: absolute;
	right: 50px;
	top: 65px;
	
	@media screen and (max-width: 950px) {
		width: 100%;
		right: 0;
		top: 115px;
		justify-content: center;
	}
`;

const InfoWrapper = styled.div`
	display: flex;
	margin-right: 20px;
	align-items: center;
`;

const InfoText = styled.p`
	font-family: Questrial;
	margin-bottom: 0;
	margin-left: 5px;
	cursor: pointer;
	font-size: 20px;
	font-weight: 500;
`;

const Title = styled.p`
	font-family: Questrial;
	font-size: 28px;
	font-weight: 400;
	padding: 0;
	margin: 0;
`;

const Column = styled.div`
	width: 33%;
	height: 75vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	
	@media screen and (max-width: 700px) {
	width: 100%;
	}
`;

const ColumnsWrapper = styled(Row)`
	display: flex;
	justify-content: space-between;
	padding: 0 5%;
	overflow: hidden;
	margin-top: 15vh;
	margin-left: auto;
	margin-right: auto;
	
	@media screen and (min-width: 1400px) {
		width: 75%;
	}
`;

const ScrollWrapper = styled.div`
	scrollbar-track-color: rgba(0,0,0,0);
	::-webkit-scrollbar {
		display: none;
	}
	height: 100%;
	overflow-y: scroll;
`;

const InnerWrapper = styled.div`
	height: fit-content;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 100%;
`;

export default Home;
