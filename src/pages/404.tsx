import Image from 'next/image'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { RiErrorWarningLine, RiArrowGoBackFill } from 'react-icons/ri'
import styles from '../styles/pages/NotFounded.module.css'

function NotFounded(): ReactElement {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <Image src="/logo.svg" alt="logo" width={360} height={76} />
        </header>
        <div className={styles.contentInfo}>
          <div>Página não encontrada</div>
          <div className={styles.infoMessage}>
            <RiErrorWarningLine size={40} />
            <span>A página que você tentou acessar não existe</span>
          </div>
          <div
            className={styles.backContent}
            onClick={handleBack}
            onKeyDown={handleBack}
            tabIndex={-1}
            role="button"
          >
            <RiArrowGoBackFill />
            <span>Clique aqui para voltar</span>
          </div>
        </div>
      </div>
      <div className={styles.background} />
    </div>
  )
}
export default NotFounded
