import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }}/>
        <script defer src="https://cdn.counter.dev/script.js" data-id="22668af5-0bdf-4cae-937b-83f9594dc79e" data-utcoffset="-3"></script>
      </Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  )
}