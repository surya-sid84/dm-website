import styled, { ThemeProvider } from "styled-components";
import dynamic from "next/dynamic";
import Header from "../Header";

const LayoutContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;

	main {
		margin-top: 70px;
		width: 100%;
		/* height: 100%; */
	}

	@media screen and (max-width: 800px) {
		padding: 10px;
	}
`;

const Layout = ({ children }) => {
	return (
		<LayoutContainer>
			<Header />
			<main>{children}</main>
		</LayoutContainer>
	);
};

export default Layout;
