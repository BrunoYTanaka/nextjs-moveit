import { useState, ReactElement, ChangeEvent, useContext } from 'react'
import Image from 'next/image'
import { ImSpinner2 } from 'react-icons/im'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import { AuthContext } from '../contexts/AuthContext'
import styles from '../styles/pages/Login.module.css'
import api from '../services/api'

function Login(): ReactElement {
  const { saveUser } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [login, setLogin] = useState(null)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setError('')
    setLogin(e.target.value)
  }

  const handleClick = () => {
    if (!login) {
      setError('user name is required!')
    }
    setIsLoading(true)
    api
      .get(`/users/${login}`)
      .then(response => {
        const { data } = response
        const user = {
          name: data.name,
          avatarUrl: data.avatar_url,
        }
        saveUser(user)
        router.push('/')
      })
      .catch(err => {
        const { status } = err.response
        if (status === 404) {
          setError('User not founded!')
          toast.error('User not founded!')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <div className={styles.loginContainer}>
      <div className={styles.background} />
      <div className={styles.content}>
        <header>
          <Image src="/logo.svg" alt="logo" width={360} height={76} />
        </header>
        <div className={styles.contentInfo}>
          <div>Bem-vindo</div>
          <div className={styles.githubLabel}>
            <img src="/icons/github.svg" alt="github" />
            <span>Faça login com seu Github para começar</span>
          </div>
          <div
            className={`${styles.contentInput} ${
              error ? styles.withError : null
            }`}
          >
            <input
              type="text"
              placeholder="Digite seu username"
              onChange={handleChange}
            />
            {isLoading ? (
              <div className={styles.loadingContent}>
                <ImSpinner2 className={styles.spinner} />
              </div>
            ) : (
              <button
                onClick={handleClick}
                type="button"
                className={login ? styles.buttonGreen : null}
              >
                <img src="/icons/right-arrow.svg" alt="Submit" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
