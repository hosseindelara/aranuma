import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container } from '@material-ui/core'
function MyApp({ Component, pageProps }: AppProps) {
  return <Container ><Component {...pageProps} /></Container>
}
export default MyApp
