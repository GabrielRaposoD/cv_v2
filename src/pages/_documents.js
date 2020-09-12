import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>
            <link rel="shortcut icon" href="/favicon-16x16.png" />
            <meta name="theme-color" content="#7D2D88"></meta>
            <meta
              name="google-site-verification"
              content="sQ1wS05xP3n4P-pjtm1Adu82IBzsK4eaborVV8qjmyM"
            />
          </title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
