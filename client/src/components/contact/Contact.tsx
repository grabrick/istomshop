import React, { FC } from 'react'
import m from './Contact.module.css'
import Image from 'next/image'
import Map from '../../../public/images/map.svg'
import blackF from '../../../public/images/BlackF.svg'
import blackT from '../../../public/images/BlackT.svg'
import blackW from '../../../public/images/BlackW.svg'

const Contact: FC = () => {
  return (
    <div className={m.container}>
      <div className={m.mapContainer}>
        <div className={m.mapWrapper}>
          <Image className={m.images} src={Map} alt='' />
          <h4 className={m.title}>Петербургский офис ORMCO</h4>
          <div className={m.descWrapper}>
            <p className={m.text}>195112, СПб, Малоохтинский пр., д. 64, корп. 3, этаж 5, БЦ `Санкт-Петербург Плаза`</p>
            <p className={m.infoTitle}>Телефон:<span className={m.infoText}>+7 (812) 324-74-14</span></p>
            <p className={m.infoTitle}>Почта:<span className={m.infoText}>sales.stp@ormco.com</span></p>
            <p className={m.infoTitle}>Режим работы:<br /><span className={m.infoTextWork}>Понедельник - Пятница: 9:00 - 17:30
              Суббота - Воскресенье: выходные дни
            </span></p>
          </div>
        </div>
        <div className={m.mapWrapper}>
          <Image className={m.images} src={Map} alt='' />
          <h4 className={m.title}>Петербургский офис ORMCO</h4>
          <div className={m.descWrapper}>
            <p className={m.text}>195112, СПб, Малоохтинский пр., д. 64, корп. 3, этаж 5, БЦ `Санкт-Петербург Плаза`</p>
            <p className={m.infoTitle}>Телефон:<span className={m.infoText}>+7 (812) 324-74-14</span></p>
            <p className={m.infoTitle}>Почта:<span className={m.infoText}>sales.stp@ormco.com</span></p>
            <p className={m.infoTitle}>Режим работы:<br /><span className={m.infoTextWork}>Понедельник - Пятница: 9:00 - 17:30
              Суббота - Воскресенье: выходные дни
            </span></p>
          </div>
        </div>
        <div className={m.socWrapper}>
          <h2 className={m.socTitle}>Мы в социальных сетях</h2>
          <div className={m.socImageWrapper}>
            <Image className={m.contactLink} src={blackF} alt='' />
            <Image className={m.contactLink} src={blackT} alt='' />
            <Image className={m.contactLink} src={blackW} alt='' />
          </div>
          <button className={m.button}>СВЯЗАТЬСЯ С НАМИ</button>
        </div>
      </div>
    </div>
  )
}

export default Contact