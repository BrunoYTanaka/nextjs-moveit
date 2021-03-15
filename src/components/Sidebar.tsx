import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement, useContext } from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { AuthContext } from '../contexts/AuthContext'
import styles from '../styles/components/Sidebar.module.css'
import MENU_ROUTES from '../constants/menuRoutes'

function Sidebar(): ReactElement {
  const { logout } = useContext(AuthContext)
  const router = useRouter()

  const { pathname } = router

  return (
    <div className={styles.navMenu}>
      <header>
        <Image src="/logo2.svg" alt="logo" width={360} height={180} />
      </header>
      <div className={styles.menuItems}>
        {MENU_ROUTES.map(item => (
          <Link href={item.href} key={item.id}>
            <div
              className={`${styles.menuItem} ${
                item.href === pathname ? styles.menuItemSelected : ''
              }`}
            >
              <a>
                <Image
                  src={`${item.img.imageSrc}${
                    item.href === pathname ? '-selected.svg' : '.svg'
                  }`}
                  alt={item.img.alt}
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </Link>
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
