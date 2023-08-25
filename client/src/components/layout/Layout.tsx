import React, { FC, PropsWithChildren, useEffect } from 'react'
import Header from '@/components/header/Header'
import Footer from '../footer/Footer'
import m from '@/styles/container.module.css'
import { useRouter } from 'next/router'
import { log } from 'console'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const router = useRouter()
  useEffect(() => {
    if (router.asPath === '/') {
      router.push('/home');
    }
  }, []);
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <Header />
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout