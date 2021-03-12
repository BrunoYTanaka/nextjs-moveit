import React, { ReactElement, ReactNode } from 'react'
import Sidebar from './Sidebar'
import styles from '../styles/components/Layout.module.css'

interface LayoutProps {
  children: ReactNode
}
function Layout({ children }: LayoutProps): ReactElement {
  return (
    <div className={styles.layoutContainer}>
      <Sidebar />
      {children}
    </div>
  )
}

export default Layout
