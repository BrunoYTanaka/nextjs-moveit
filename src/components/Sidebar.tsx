import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import { AuthContext } from '../contexts/AuthContext'

import styles from '../styles/components/Sidebar.module.css'
import MENU_ROUTES from '../constants/menuRoutes'

function Sidebar(): ReactElement {
  const { logout } = useContext(AuthContext)
  const router = useRouter()
  const { pathname } = router
  const [topAnimation, setTopAnimation] = useState(null)

  useEffect(() => {
    if (pathname === '/') {
      setTopAnimation('0%')
    } else {
      setTopAnimation(`${100 / MENU_ROUTES.length}%`)
    }
  }, [pathname])

  return (
    <div className={styles.navMenuContainer}>
      <header>
        <Image src="/logo2.svg" alt="logo" width={360} height={180} />
      </header>
      <div className={styles.menuItems}>
        <motion.div
          initial={false}
          className={styles.menuItemsBorder}
          animate={{
            top: topAnimation,
          }}
          transition={{ duration: 0.5 }}
        />
        {MENU_ROUTES.map(item => (
          <Link href={item.href} key={item.id}>
            <div className={styles.menuItem}>
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
