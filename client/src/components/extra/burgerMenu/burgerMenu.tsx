import React, { FC } from 'react'
import m from './burgerMenu.module.css'
import Image from 'next/image'
import Logo from "../../../../public/images/Logo.svg"
import Close from "../../../../public/images/close-black.svg"
import Telegram from "../../../../public/images/Telegram.svg"
import Whatsapp from "../../../../public/images/Whats`app.svg"
import Facebook from "../../../../public/images/Facebook.svg"
import { useRouter } from 'next/router'
import Link from 'next/link'

type Tprops = {
  isActiveMenu: boolean,
  setOpened: (value: boolean) => void
}

const BurgerMenu: FC<Tprops> = ({ isActiveMenu, setOpened }) => {
  const router = useRouter()

  return (
    <div className={isActiveMenu === true ? m.containerActive : m.contauner} onClick={() => setOpened(false)}>
      <div className={m.wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={m.headWrapper}>
          <div className={m.headerWrapper}>
            <Image className={m.logo} src={Logo} alt='' onClick={() => { router.push('/home') }} />
            <Image className={m.exit} src={Close} alt='' onClick={() => setOpened(false)} />
          </div>

          <div className={m.navigateWrapper}>
            <Link className={router.asPath === '/shop' ? `${m.active}` : `${m.link}`} href="/shop">Магазин</Link>
            <Link className={router.asPath === '/purchase' ? `${m.active}` : `${m.link}`} href="/purchase">Оплата и доставка</Link>
            <Link className={router.asPath === '/about' ? `${m.active}` : `${m.link}`} href="/about">О нас</Link>
            <Link className={router.asPath === '/contact' ? `${m.active}` : `${m.link}`} href="/contact">Контакты</Link>
          </div>
        </div>

        <div className={m.footer}>
          <div className={m.socialWrapper}>
            <Image className={m.contactLink} src={Facebook} alt='' />
            <Image className={m.contactLink} src={Telegram} alt='' />
            <Image className={m.contactLink} src={Whatsapp} alt='' />
          </div>

          <div className={m.feedBack}>
            <button className={m.fbButton}>ОБРАТНАЯ СВЯЗЬ</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BurgerMenu