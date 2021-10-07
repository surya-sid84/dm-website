import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	// static async getInitialProps(ctx) {
	// 	const originalRenderPage = ctx.renderPage;

	// 	ctx.renderPage = () =>
	// 		originalRenderPage({
	// 			// useful for wrapping the whole react tree
	// 			enhanceApp: (App) => App,
	// 			// useful for wrapping in a per-page basis
	// 			enhanceComponent: (Component) => Component,
	// 		});

	// 	// Run the parent `getInitialProps`, it now includes the custom `renderPage`
	// 	const initialProps = await Document.getInitialProps(ctx);

	// 	return initialProps;
	// }
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;200;300;400;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
