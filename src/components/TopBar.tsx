import React, { ReactElement, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiLogoutBoxLine } from 'react-icons/ri'
import styles from '../styles/components/TopBar.module.css'
import { AuthContext } from '../contexts/AuthContext'
import MENU_ROUTES from '../constants/menuRoutes'

function TopBar(): ReactElement {
  const router = useRouter()
  const { logout } = useContext(AuthContext)
  const { pathname } = router

  return (
    <header className={styles.topBarContainer}>
      <Image src="/logo2.svg" alt="logo" width={35} height={35} />
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
      <div className={styles.logoutButton}>
        <button type="button" onClick={logout}>
          <RiLogoutBoxLine size={30} style={{ color: '#5965E0' }} />
        </button>
      </div>
    </header>
  )
}

export default TopBar
