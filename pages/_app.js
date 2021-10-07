import React from "react";
import Layout from "../components/Layout";
import { GlobalStyles } from "../global.styles";
function MyApp({ Component, pageProps }) {
<<<<<<< HEAD
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}
export const getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps: pageProps };
};
=======
	return (
		<Layout>
			<GlobalStyles />
			<Component {...pageProps} />
		</Layout>
	);
}

>>>>>>> 64e13644ec416bb806c759a495f873ccc0286604
export default MyApp;
