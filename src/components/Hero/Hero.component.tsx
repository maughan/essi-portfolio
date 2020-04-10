import * as React from "react";
import * as Styled from "./Hero.styles";

const Hero: React.FC = (): JSX.Element => {
	return (
		<Styled.Wrapper onClick={() => window.location.replace("/about")}>
			<a href="/about">enter</a>
		</Styled.Wrapper>
	);
};

export default Hero;
