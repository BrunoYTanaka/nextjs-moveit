import React, { ReactElement, ReactNode, useState } from 'react'
import Head from 'next/head'
import Sidebar from './Sidebar'
import styles from '../styles/components/Layout.module.css'
import TopBar from './TopBar'

interface LayoutProps {
  children: ReactNode
}
function Layout({ children }: LayoutProps): ReactElement {
  return (
    <div className={styles.layoutContainer}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <TopBar />
      <section>
        <Sidebar />
        {children}
      </section>
    </div>
  )
}

export default Layout
