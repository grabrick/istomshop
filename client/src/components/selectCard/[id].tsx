/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react'
import m from "./SelectCard.module.css"
import NotFound from '../../../public/images/NotFound.svg'
import Image from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux.hook';
import { addItem } from '@/redux/slices/basketSlice';
import { ICard } from '@/types/types';

const Card: FC<ICard> = () => {
  const data = useAppSelector(state => state.cardSlice.card)
  const stateCount = useAppSelector(state => state.basketSlice.basket)
  const dispatch = useAppDispatch()

  const router = useRouter();
  const { id } = router.query;
  const findCurrentCard = data.find((items: ICard) => items?._id === id) as unknown as ICard
  const findCurrentCount = stateCount.find((i: any) => i?.id === findCurrentCard?._id) as any
  const [count, setCount] = useState<number>(1)
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (findCurrentCount?.count !== undefined) {
      setCount(findCurrentCount?.count)
    } else {
      setCount(count)
    }
  }, [count])

  const handleAddItem = (items: any) => {
    dispatch(addItem({ id: items._id, image: items.mainImage, title: items.title, price: items.price, count: count }))

  }

  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.titleWrapper}>
          <Link className={m.backLink} href="/shop">{"<"} Назад</Link>
        </div>
        <h1 className={m.title}>{findCurrentCard?.title}</h1>
        <div className={m.firstInfo}>
          <img
            className={findCurrentCard?.mainImage === "" ? m.notFound : m.image}
            src={findCurrentCard?.mainImage === '' ? NotFound.src : findCurrentCard?.mainImage} alt=""
          />

          {findCurrentCard?.description === "" ? (
            <div className={m.warningInfo}>
              <p className={m.warningText}>В описании товара ничего не написано.</p>
            </div>
          ) : (
            <div className={m.moreInfo}>
              <div className={m.descriptionWrapper}>
                <h3 className={m.descriptionTitle}>Описание</h3>
                <p className={m.descriptionText}>{findCurrentCard?.description}</p>
              </div>
              <div className={m.characteristic}>
                {findCurrentCard?.characteristics?.structure ? (
                  <>
                    <h3 className={m.descriptionTitle}>Характеристика</h3>
                    <p className={m.descriptionText} id={m.Text}>{findCurrentCard?.characteristics?.structure}</p>
                  </>
                ) : (
                  <>
                    <h3 className={m.descriptionTitle}>Характеристика</h3>
                    <p className={m.descriptionText} id={m.Text}>Не указан</p>
                  </>
                )}
                {findCurrentCard?.characteristics?.size ? (
                  <>
                    <h3 className={m.descriptionTitle}>Размер</h3>
                    <p className={m.descriptionText}>{findCurrentCard?.characteristics?.structure}</p>
                  </>
                ) : (
                  <>
                    <h3 className={m.descriptionTitle}>Размер</h3>
                    <p className={m.descriptionText}>Не указан</p>
                  </>
                )}
              </div>
              <div className={m.priceWrapper}>
                <div className={m.priceTitleWrapper}>
                  <h3 className={m.priceTitle}>Цена:</h3>
                  <span className={m.priceText}>{findCurrentCard?.price} ₽</span>
                </div>
                <div className={m.purchaseWrapper}>
                  <div className={m.buttonWrapper}>
                    <button className={findCurrentCount?.count > 0 ? m.notActiveBtn : m.button} disabled={findCurrentCount?.count > 0 ? true : false} onClick={decrement}>{"-"}</button>
                    {count}
                    <button className={findCurrentCount?.count > 0 ? m.notActiveBtn : m.button} disabled={findCurrentCount?.count > 0 ? true : false} onClick={increment}>{"+"}</button>
                  </div>

                  <button className={findCurrentCount?.count > 0 ? m.notActive : m.payButton} disabled={findCurrentCount?.count > 0 ? true : false} onClick={() => handleAddItem(findCurrentCard)}>В корзину</button>
                </div>
                {findCurrentCount?.count > 0 && (
                  <div className={m.infoWrapper}>
                    <p className={m.infoText}>Товар уже добавлен в <Link className={m.backLink} href='/basket'>Корзину</Link></p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card