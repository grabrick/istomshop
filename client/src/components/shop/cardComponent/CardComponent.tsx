/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect, useState } from 'react'
import m from './CardComponent.module.css'
import NotFound from "../../../../public/images/NotFound.svg"
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux.hook'
import { addItem } from '@/redux/slices/basketSlice'

const CardComponent: FC<{ items: any }> = ({ items }) => {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.basketSlice.basket)
  const [count, setCount] = useState<any>({})
  const handleAddItem = (items: any) => {
    dispatch(addItem({id: items?._id, image: items.mainImage, title: items?.title, price: items?.price, count: 1}))
  }

  useEffect(() => {
    const findItem = state.find(i => i.id === items._id)
    setCount(findItem)
  }, [state])
  
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <Link className={m.touchWrapper} href={`/card/${items?._id}`}>
        <img
          src={ items?.mainImage.length > 0 ? items?.mainImage : NotFound.src }
          alt='' className={ items?.mainImage.length > 0 ? m.image : m.notFound } />
        </Link>
        <p className={m.title}>{items?.title}</p>
        <button className={m.button} onClick={() => handleAddItem(items)}>
          Корзина
          {items._id === count?.id && (
            <span>{count.count}</span>
          )}
        </button>
      </div>
    </div>
  )
}

export default CardComponent