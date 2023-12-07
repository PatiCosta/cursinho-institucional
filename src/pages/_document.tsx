import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <meta name="description" content="Há mais de duas décadas trabalhando em prol da democratização do acesso ao ensino superior no Brasil" />
        <meta name="keywords" content="cursinho, vestibular, estudar, escola, faculdade, pré-vestibular, estudante, usp, universidade de são paulo, fuvest, enem, unicamp, unifesp, prouni, sisu, provão, redação" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://site-cursinho.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cursinho FEAUSP" />
        <meta property="og:description" content="Há mais de duas décadas trabalhando em prol da democratização do acesso ao ensino superior no Brasil" />
        <meta property="og:image" content="https://site-cursinho.vercel.app/img/logo_vertical.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://site-cursinho.vercel.app/" />
        <meta property="twitter:url" content="https://site-cursinho.vercel.app/" />
        <meta name="twitter:title" content="Cursinho FEAUSP" />
        <meta name="twitter:description" content="Há mais de duas décadas trabalhando em prol da democratização do acesso ao ensino superior no Brasil" />
        <meta name="twitter:image" content="https://site-cursinho.vercel.app/img/logo_vertical.png" />
      
        <link rel="icon" type="image/x-icon" href="/img/favicon.ico" />
        <title>Cursinho FEAUSP</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
