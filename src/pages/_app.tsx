import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '../contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </AuthProvider>
  )
}

export default MyApp
