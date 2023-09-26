import type { AppProps } from 'next/app'
import Script from "next/script";
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        strategy='afterInteractive'
        type='module'
        src='https://unpkg.com/@google/model-viewer@^2.1.1/dist/model-viewer.min.js'
      />
      <Component {...pageProps} />
    </>
  )
}
