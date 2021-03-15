import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ReactElement, useContext, useState } from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { AuthContext } from '../contexts/AuthContext'
import styles from '../styles/components/Sidebar.module.css'

function Sidebar(): ReactElement {
  const { logout } = useContext(AuthContext)
  const [selected, setSelected] = useState(0)
  const router = useRouter()
  const handleSelectMenu = (index: number) => {
    setSelected(index)
    switch (index) {
      case 0:
        router.push('/')
        break
      case 1:
        router.push('/leaderboard')
        break
      default:
        router.push('/')
    }
  }

  const menuItem = [
    {
      imageSrc: '/icons/home',
      alt: 'home',
    },
    {
      imageSrc: '/icons/ranking',
      alt: 'ranking_leaders',
    },
  ]

  return (
    <div className={styles.sideBarContainer}>
      <header>
        <Image src="/logo2.svg" alt="logo" width={360} height={180} />
      </header>
      <div className={styles.sideBarButtons}>
        {menuItem.map((item, index) => (
          <div
            key={item.imageSrc}
            className={selected === index ? styles.buttonWrapper : null}
          >
            <button type="button" onClick={() => handleSelectMenu(index)}>
              <Image
                src={`${item.imageSrc}${
                  selected === index ? '-selected.svg' : '.svg'
                }`}
                alt={item.alt}
                width={30}
                height={30}
              />
            </button>
          </div>
        ))}
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
