import React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";
import Helmet from "react-helmet";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	   html,
	   body {
		   width: 100%;
		   height: 100%;
			overflow: hidden;
			margin: 0;
	   }

	   #__next {
		position: relative;
		width: 100%;
		height: 100%;
	   }
`;

class MyDocument extends Document {
    static getInitialProps(context) {
        const sheet = new ServerStyleSheet(); // 서버사이드 렌더링 할 수 있게함.
        const page = context.renderPage(
            App => props =>
                sheet.collectStyles(
                    <>
                        <GlobalStyles />
                        <App {...props} />
                    </>,
                ),
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, helmet: Helmet.renderStatic(), styleTags };
    }
    render() {
        const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;
        const htmlAttrs = htmlAttributes.toComponent();
        const bodyAttrs = bodyAttributes.toComponent();
        return (
            <Html {...htmlAttrs}>
                <Head>
                    {this.props.styleTags}
                    {Object.values(helmet).map((el, key) => el.toComponent())}
                </Head>
                <body {...bodyAttrs}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
