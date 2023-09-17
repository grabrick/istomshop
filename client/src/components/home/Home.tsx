import { FC } from "react";
import m from './Home.module.css'
import Medal from '../../../public/images/Medal.svg'
import Car from '../../../public/images/Car.svg'
import Earch from '../../../public/images/Earch.svg'
import Tooth from '../../../public/images/tooth.svg'
import Xtool from '../../../public/images/xtool.svg'
import Itool from '../../../public/images/itool.svg'
import Jaw from '../../../public/images/jaw.svg'
import BoldTool from '../../../public/images/boldTool.svg'
import Mask from '../../../public/images/mask.svg'
import Freeze from '../../../public/images/freeze.svg'
import brokenTooth from '../../../public/images/brokenTooth.svg'
import clearTooth from '../../../public/images/clearTooth.svg'
import clean from '../../../public/images/clean.svg'
import BlankImg from '../../../public/images/blankImg.svg'
import Image from "next/image";
import Slider from "../Extra/Slider/Slider";

const Home: FC = () => {
    const cardData = [
        { id: 0, img: Tooth, title: 'Стоматологические материалы' },
        { id: 1, img: Xtool, title: 'Стоматологическое оборудование' },
        { id: 2, img: Itool, title: 'Стоматологическое инструменты' },
        { id: 3, img: Jaw, title: 'Зуботехнические материалы' },
        { id: 4, img: BoldTool, title: 'Эндодонтические Инструменты' },
        { id: 5, img: Mask, title: 'Расходные материалы' },
        { id: 6, img: Freeze, title: 'Анестезия' },
        { id: 7, img: brokenTooth, title: 'Ортопедия' },
        { id: 8, img: clearTooth, title: 'Хирургия' },
        { id: 9, img: clean, title: 'Дизенфекция и стерилизация' },
    ]

    const images = [
        '/images/slider/Group67.jpg',
        '/images/slider/Group68.jpg',
        '/images/slider/inibsa1.jpg',
        '/images/slider/kristident1.jpg',
        '/images/slider/taifunn1.jpg',
      ];

    return (
        <section className={m.container}>
            <div className={m.wrapper}>
                <div className={m.introContainer}>
                    <div className={m.infoWrapperWrapp}>
                        <div className={m.infoWrapper}>
                            <h1 className={m.title}>Инструменты высочайшего качества для профессиональных <span className={m.span}>стоматологов</span></h1>
                            <p className={m.text}>Обеспечьте свою практику лучшими инструментами от ведущих производителей</p>
                            <button className={m.btn}>В каталог</button>
                        </div>
                    </div>
                </div>
                <div className={m.recContainer}>
                    <div className={m.recWrapper}>
                        <div className={m.rec}>
                            <Image className={m.recIcor} src={Medal} alt='' />
                            <h3 className={m.recTitle}>Качество</h3>
                            <span className={m.recSpan}>Высокое качество печати и ультратонкая эластичная пленка</span>
                        </div>
                        <div className={m.rec}>
                            <Image className={m.recIcor2} src={Car} alt="" />
                            <h3 className={m.recTitle}>Доставка</h3>
                            <span className={m.recSpan}>Отправляем заказы в течении 1−2 рабочих дней, бесплатная доставка  от 2000 ₽</span>
                        </div>
                        <div className={m.rec}>
                            <Image className={m.recIcor} src={Earch} alt="" />
                            <h3 className={m.recTitle}>Сотрудничество</h3>
                            <span className={m.recSpan}>Приглашаем к сотрудничеству партнёров по всему миру</span>
                        </div>
                    </div>
                </div>
                <div className={m.catalogContainer}>
                    <h1 className={m.title}> Наши <span className={m.span}>Услуги!</span></h1>
                    <div className={m.catalogWrapper}>
                        {cardData.map(items => (
                            <div key={items.id} className={m.card}>
                                <Image className={m.cardImg} src={items.img} alt="" />
                                <p className={m.cardText}>{items.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={m.blankContainer}>
                    <div className={m.blankWrapper}>
                        <div className={m.blankInfoWrapper}>
                            <h2 className={m.title}>Отбеливание <span className={m.span}>зубов</span></h2>
                            <span className={m.desc}>Достигните белоснежной улыбки с нашей линейкой инструментов от ведущих производителей</span>
                            <button className={m.button}>Подробнее</button>
                        </div>
                        <Image className={m.img} style={{ height: 440 }} src={BlankImg} alt="" />
                    </div>
                </div>
                <div className={m.partnerContainer}>
                    <h2 className={m.title}>Наши <span className={m.span}>партнеры</span></h2>
                        <Slider images={images} />
                </div>
            </div>
        </section>
    )
}

export default Home