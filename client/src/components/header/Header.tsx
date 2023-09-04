import React, { FC, useState } from 'react'
import m from "@/components/header/Header.module.css"
import Logo from "../../../public/images/Logo.svg"
import Search from "../../../public/images/Search.svg"
import Basket from "../../../public/images/Basket.svg"
import Telegram from "../../../public/images/Telegram.svg"
import Whatsapp from "../../../public/images/Whats`app.svg"
import Facebook from "../../../public/images/Facebook.svg"
import Menu from "../../../public/images/list-unordered.svg"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter()

    
    return (
        <header className={m.container}>
            <div className={m.wrapper}>
                <Image className={m.logo} src={Logo} alt='' onClick={() => {router.push('/home')}} />

                <div className={m.linkWrapper}>
                    <Link className={router.asPath === '/shop' ? `${m.active}` : `${m.link}`} href="/shop">Магазин</Link>
                    <Link className={router.asPath === '/purchase' ? `${m.active}` : `${m.link}`} href="/purchase">Оплата и доставка</Link>
                    <Link className={router.asPath === '/about' ? `${m.active}` : `${m.link}`} href="/about">О нас</Link>
                    <Link className={router.asPath === '/contact' ? `${m.active}` : `${m.link}`} href="/contact">Контакты</Link>
                </div>

                {router.asPath === '/shop' ? (
                    <div className={m.inputWrapper}>
                        <input className={m.input} placeholder='Поиск товаров'></input>
                        <div className={m.imgWrapper}>
                            <Image className={m.img} src={Search} alt='' />
                        </div>
                    </div>
                ) : (
                    ""
                )}

                <div className={m.contantWrapper}>
                    <Image className={m.contactLink} src={Facebook} alt='' />
                    <Image className={m.contactLink} src={Telegram} alt='' />
                    <Image className={m.contactLink} src={Whatsapp} alt='' />

                    {router.asPath === '/shop' ? (
                        <div className={m.basketWrapper}>
                            <Image className={m.contactLink} src={Basket} alt='' />
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div className={m.burgerMenu}>
                    <Image
                        src={Menu}
                        className={m.burger}
                        onClick={() => setOpen(!open)}
                        alt=""
                    />
                </div>
            </div>
        </header>
    )
}

export default Header