import React, { FC } from 'react'
import m from '@/components/footer/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Telegram from "../../../public/images/Telegram.svg"
import Whatsapp from "../../../public/images/Whats`app.svg"
import Facebook from "../../../public/images/Facebook.svg"
import { useRouter } from 'next/router'

const Footer: FC = () => {
  const router = useRouter()

  
  return (
    <footer className={m.container}>
      <div className={m.wrapper}>
        <div className={m.linkWrapper}>
          <Link className={router.asPath === '/shop' ? `${m.active}` : `${m.link}`} href="/shop">Магазин</Link>
          <Link className={router.asPath === '/purchase' ? `${m.active}` : `${m.link}`} href="/purchase">Оплата и доставка</Link>
          <Link className={router.asPath === '/about' ? `${m.active}` : `${m.link}`} href="/about">О нас</Link>
          <Link className={router.asPath === '/contact' ? `${m.active}` : `${m.link}`} href="/contact">Контакты</Link>
        </div>

        {/* <div className={m.linkWrapper}>
          <Link className={m.link} href="/">Личный кабинет</Link>
          <Link className={m.link} href="/payment">Мои заказы</Link>
          <Link className={m.link} href="/about">Избранные товары</Link>
          <Link className={m.link} href="/contact">Акции</Link>
        </div>

        <div className={m.linkWrapper}>
          <Link className={m.link} href="/">Лицензии</Link>
          <Link className={m.link} href="/payment">Как оформить заказ</Link>
          <Link className={m.link} href="/about">Вопросы и ответы</Link>
          <Link className={m.link} href="/contact">Политика конфиденциальности</Link>
        </div> */}

        <div className={m.wrapperWrapp}>
          <div className={m.contantWrapper}>
            <p className={m.text}>Мы в социальных сетях</p>
            <div className={m.contact}>
              <Image className={m.contactLink} src={Facebook} alt='' />
              <Image className={m.contactLink} src={Telegram} alt='' />
              <Image className={m.contactLink} src={Whatsapp} alt='' />
            </div>
          </div>

          <div className={m.feedBack}>
            <button className={m.fbButton}>ОБРАТНАЯ СВЯЗЬ</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer