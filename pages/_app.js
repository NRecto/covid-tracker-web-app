import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import {Container} from 'react-bootstrap';
import NaviBar from '../components/NaviBar';

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <NaviBar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  )
}

export default MyApp
