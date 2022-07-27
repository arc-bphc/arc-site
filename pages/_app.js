import Header from '../components/Header'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='own-container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
