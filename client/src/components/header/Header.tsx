import React, { FC, useEffect, useState } from 'react'
import m from "@/components/header/Header.module.css"
import Logo from "../../../public/images/Logo.svg"
import Search from "../../../public/images/Search.svg"
import DeleteResult from "../../../public/images/close-line.svg"
import Basket from "../../../public/images/Basket.svg"
import BasketActive from '../../../public/images/BasketActive.svg'
import Telegram from "../../../public/images/Telegram.svg"
import Whatsapp from "../../../public/images/Whats`app.svg"
import Facebook from "../../../public/images/Facebook.svg"
import Menu from "../../../public/images/list-unordered.svg"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux.hook'
import { searchCards } from '@/redux/slices/cardSlice'
import BurgerMenu from '@/components/Extra/burgerMenu/burgerMenu'

const Header: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [data, setData] = useState<any>([])
    const [searchInput, setSearchInput] = useState('')
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.basketSlice.basket)
    const searchResult = useAppSelector(state => state.cardSlice.searchResult)
    const router = useRouter()

    useEffect(() => {
        setData(state)
    }, [state])

    const handleChangeInput = (e: any) => {
        setSearchInput(e.target.value)
    }

    const handleKeyDown = (e: any) => {
        if (e.key !== "Enter") return;
        e.preventDefault();
        let value = e.target.value;
        dispatch(searchCards(value))
        if (!value.trim()) return;
    };

    const handleDelete = () => {
        dispatch(searchCards(''))
        setSearchInput('')
    }

    const handleClickSearch = () => {
        if (!searchInput.trim()) return;
        dispatch(searchCards(searchInput))
    }

    return (
        <header className={m.container}>
            <div className={m.wrapper}>
                <Image className={m.logo} src={Logo} alt='' onClick={() => { router.push('/home') }} />

                <div className={m.linkWrapper}>
                    <Link className={router.asPath === '/shop' ? `${m.active}` : `${m.link}`} href="/shop">Магазин</Link>
                    <Link className={router.asPath === '/purchase' ? `${m.active}` : `${m.link}`} href="/purchase">Оплата и доставка</Link>
                    <Link className={router.asPath === '/about' ? `${m.active}` : `${m.link}`} href="/about">О нас</Link>
                    <Link className={router.asPath === '/contact' ? `${m.active}` : `${m.link}`} href="/contact">Контакты</Link>
                </div>

                {router.asPath === '/shop' ? (
                    <div className={m.inputWrapper}>
                        <input className={m.input} value={searchInput} onChange={(e) => handleChangeInput(e)} onKeyDown={(e) => handleKeyDown(e)} placeholder='Поиск товаров'></input>
                        {searchResult.length > 0 ? (
                            <button className={m.imgWrapper} onClick={() => handleDelete()}>
                                <Image className={m.img} src={DeleteResult} alt='' />
                            </button>
                        ) : (
                            <button className={m.imgWrapper} onClick={() => handleClickSearch()}>
                                <Image className={m.img} src={Search} alt='' />
                            </button>
                        )}

                    </div>
                ) : (
                    ""
                )}

                <div className={m.contantWrapper}>
                    <Image className={m.contactLink} src={Facebook} alt='' />
                    <Image className={m.contactLink} src={Telegram} alt='' />
                    <Image className={m.contactLink} src={Whatsapp} alt='' />

                    <Link href="/basket" className={m.basketWrapper}>
                        <Image className={m.contactLink} src={router.asPath === '/basket' ? BasketActive : Basket} alt='' />
                        {data.length > 0 && (
                            <div className={m.count}>
                                <p>{data.length}</p>
                            </div>
                        )}
                    </Link>
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
            {open && <BurgerMenu isActiveMenu={open} setOpened={setOpen} />}
        </header>
    )
}

export default Header