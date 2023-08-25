/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'
import m from './CardComponent.module.css'
import NotFound from "../../../../public/images/NotFound.svg"
import Link from 'next/link'

// Нужно будет поменять price: string, на price: number 
// interface IcardItems {
//     title: string,
//     description: string,
//     image: string,
//     price: string, 
//     characteristics: {}
// }

// interface IcardItems {
//   _id: number,
//   title: string,
//   description: string,
//   mainImage: string,
//   price: number,
//   category: string,
//   rating: number,
// }

const CardComponent: FC<{ items: any }> = ({ items }) => {

  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <Link href={`/card/${items._id}`}>
        <img
          src={items.mainImage.length >= 0 ? NotFound.src : items.mainImage}
          alt='' className={items.mainImage.length >= 0 ? m.notFound : m.image} />
        </Link>
        <p className={m.title}>{items.title}</p>
        <button className={m.button}>Корзина</button>
      </div>
    </div>
  )
}

export default CardComponent