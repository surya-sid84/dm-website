import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Head from "next/head";
import { ArrowRight } from "@mui/icons-material";
export default function Home() {
	React.useEffect(() => {
		import("@lottiefiles/lottie-player");
	}, []);
	const ref = React.useRef(null);
	return (
		<Container>
			<InnerContainer>
				<ContentContainer>
					<strong>
						<Title>The Digital Media Company</Title>
					</strong>
					<SubTitle>
						We are your digital partners who beleive in the creation and
						development of perfect digital journeys.
					</SubTitle>
					<Button placeholder="Know More" endIcon={ArrowRight}>
						Know More
					</Button>
				</ContentContainer>
				<LottieContainer>
					<lottie-player
						id="firstLottie"
						ref={ref}
						autoplay
						loop
						mode="normal"
						src="https://assets4.lottiefiles.com/packages/lf20_M9wchH.json"
						style={{ width: "400px", height: "400px" }}
					></lottie-player>
				</LottieContainer>
			</InnerContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const InnerContainer = styled.div`
	width: 80%;
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ContentContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;
const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 900;
`;
const SubTitle = styled.h3`
	font-weight: 500;
	font-size: 1.3rem;
	max-width: 60%;
	margin: 24px 0px;
`;
const LottieContainer = styled.div`
	width: 50%;
	height: 100%;
`;
