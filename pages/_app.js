import React from "react";
import Layout from "../components/Layout";
import { GlobalStyles } from "../global.styles";
function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<GlobalStyles />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
