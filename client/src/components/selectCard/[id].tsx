/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react'
import m from "./SelectCard.module.css"
import NotFound from '../../../public/images/NotFound.svg'
import Image from 'next/image';
import Link from 'next/link';


const Card: FC = () => {
  const data: any = []
  const router = useRouter();
  const { id } = router.query;
  const findCurrentCard = data.find((items: any) => items.id === Number(id))
  const [count, setCount] = useState<number>(0)
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count !== 0) {
      setCount(count - 1);
    }
  };


  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <Link className={m.backLink} href="/home">{"<"} Назад</Link>
        <h1 className={m.title}>{findCurrentCard?.title}</h1>
        <div className={m.firstInfo}>
          <img
            className={findCurrentCard?.mainImage === "" ? m.notFound : m.image}
            src={findCurrentCard?.mainImage === "" ? NotFound.src : findCurrentCard?.mainImage} alt=""
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
              <div className={m.priceWrapper}>
                <div className={m.priceTitleWrapper}>
                  <h3 className={m.priceTitle}>Цена:</h3>
                  <span className={m.priceText}>{findCurrentCard?.price}</span>
                </div>
                <div className={m.purchaseWrapper}>
                    <div className={m.buttonWrapper}>
                        <button className={m.button} onClick={decrement}>{"-"}</button>
                        { count }
                        <button className={m.button} onClick={increment}>{"+"}</button>
                    </div>

                    <button className={m.payButton}>В корзину</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card