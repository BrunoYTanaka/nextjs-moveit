import { Fragment, ReactElement } from 'react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from '../contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps, router }: AppProps): ReactElement {
  const canShowLayout = !router.pathname.startsWith('/login')

  const WrapperLayout = canShowLayout ? Layout : Fragment

  return (
    <AuthProvider>
      <WrapperLayout>
        <Component {...pageProps} />
      </WrapperLayout>
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </AuthProvider>
  )
}

export default MyApp
