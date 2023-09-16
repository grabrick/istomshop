import React, { FC, useEffect, useState } from 'react'
import m from './Basket.module.css'
import Image from 'next/image'
import BackIMG from '../../../public/images/arrow-left-s-line.svg'
import NotFound from "../../../public/images/NotFound.svg"
import Delete from "../../../public/images/delete-bin-7-line.svg"
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux.hook'
import { decrement, increment, removeItem } from '@/redux/slices/basketSlice'
import Link from 'next/link'

const Basket: FC = () => {
  const router = useRouter()
  const [data, setData] = useState<any>([])
  const [total, setTotal] = useState<any>([])
  const state = useAppSelector(state => state.basketSlice.basket)
  const totalCount = useAppSelector(state => state.basketSlice.totalPrice)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setData(state)
  }, [state])

  useEffect(() => {
    setTotal(totalCount)
  }, [totalCount])

  const onClickDeleteItem = (id: string) => {
    dispatch(removeItem(id))
  }
  
  const onClickAdd = (item: any) => {
    dispatch(increment(item.id))
  }

  const onClickDelete = (item: any) => {
    dispatch(decrement(item.id))
  }
  return (
    <section className={m.container}>
      <div className={m.wrapper}>
        <div className={m.basketSelector}>
          <div className={m.headerWrapper}>
            <button className={m.button} onClick={() => router.back()}>
              <Image className={m.img} src={BackIMG} alt='' />
            </button>
            <h2 className={m.title}>Корзина</h2>
          </div>
          <div className={m.basketContent}>
            {data.length > 0 ? (
              <>
                {data.map((items: any) => (
                  <div className={m.itemsWrapper} key={items.id}>
                    <div className={m.firstWrapper}>
                      <img
                        src={items?.image === '' ? NotFound.src : items?.image}
                        alt=''
                        className={items?.image === '' ? m.notFound : m.image}
                      />
                      <div className={m.infoWrapper}>
                        <h2>{items.title}</h2>
                        <div className={m.priceWrapper}>
                          <p>Цена:</p>
                          <p>{items.price}</p>
                        </div>
                        <div className={m.countWrapper}>
                          <p className={m.countTitle}>Количество: </p>
                          <p className={m.count}>{items.count}</p>
                        </div>
                      </div>
                    </div>
                    <div className={m.wrapperWrap}>
                      <div className={m.moreFuncWrapper}>
                        <button className={m.btn} onClick={() => onClickAdd(items)}>{'+'}</button>
                        <button className={m.btn} onClick={() => onClickDelete(items)}>{'-'}</button>
                      </div>
                      <button className={m.ClearBtn} onClick={() => onClickDeleteItem(items.id)}></button>
                    </div>
                  </div>
                ))}
                <div className={m.finalResult}>
                  <div className={m.priceWrapp}>
                    <p className={m.totalPrice}>Общая цена:</p>
                    <span className={m.price}>{total}</span>
                  </div>
                  <button className={m.buyBtn}>Купить</button>
                </div>
              </>
            ) : (
              <div className={m.warning}>
                <p className={m.warningText}>Корзина пуста, перейдите в <Link className={m.warningLink} href='/shop'>магазин</Link></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Basket