import Image from 'next/image'
import React, { ReactElement, useContext, useState } from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { AuthContext } from '../contexts/AuthContext'
import styles from '../styles/components/Sidebar.module.css'

function Sidebar(): ReactElement {
  const { logout } = useContext(AuthContext)
  const [selected, setSelected] = useState(0)

  const handleSelectMenu = (index: number) => {
    setSelected(index)
  }

  return (
    <div className={styles.sideBarContainer}>
      <header>
        <Image src="/logo2.svg" alt="logo" width={360} height={76} />
      </header>
      <div className={styles.sideBarButtons}>
        <div className={selected === 0 ? styles.buttonWrapper : null}>
          <button type="button" onClick={() => handleSelectMenu(0)}>
            <Image
              src={`/icons/home${selected === 0 ? '-selected.svg' : '.svg'}`}
              alt="home"
              width={30}
              height={30}
            />
          </button>
        </div>
        <div className={selected === 1 ? styles.buttonWrapper : null}>
          <button type="button" onClick={() => handleSelectMenu(1)}>
            <Image
              src={`/icons/ranking${selected === 1 ? '-selected.svg' : '.svg'}`}
              alt="ranking_leaders"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
      <footer className={styles.footer}>
        <button type="button" onClick={logout}>
          <RiLogoutBoxLine size={30} style={{ color: '#5965E0' }} />
        </button>
      </footer>
    </div>
  )
}

export default Sidebar