import React, { FC } from 'react'
import m from './Purchase.module.css'

const Purchase: FC = () => {
  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <h1 className={m.title}>Оплата, доставка</h1>

        <div className={m.infoWrapper}>
          <div className={m.aboutInfo}>
            <span className={m.infoTitle}>Важная информация</span>
            <p className={m.text}>Все заказы отправляются на предварительную обработку и проверку менеджером Ormco.
              Менеджер свяжется с вами для подтверждения состава заказа и способов оплаты и
              доставки. Затем вам придет e-mail, содержащий ссылку на онлайн-оплату или
              платежные документы (счет/квитанция), если вы выбрали один из этих способов оплаты..
            </p>
            <ul className={m.ul}>
              <li className={m.li}>Если заказ оформлен после 17:00, он будет отправлен через 1 рабочий день.</li>
              <li className={m.li}>При доставке по России, оплата наличными, либо карточкой курьеру невозможны.</li>
              <li className={m.li}>Заказы обрабатываются и доставляются только по рабочим дням.</li>
              <li className={m.li}>Оплачивайте заказ только после того, как его подтвердил менеджер Ormco!</li>
              <li className={m.li}>Мы отправляем заказы <span className={m.bold}>только по территории РФ</span> (кроме Крыма).</li>
              <li className={m.li}>Мы принимаем оплаты только с банковских/кредитных карт, эмитированных<br />
                <span className={m.bold}>банками-резидентами РФ</span> (кроме Крыма)
                и только от юр.лиц, являющихся <span className={m.bold}>резидентами РФ</span> (кроме Крыма).
              </li>
            </ul>
          </div>
          <div className={m.taskContainer}>
            <div className={m.targetWrapper}>
              <span className={m.targetTitle}>Москва и Московская область</span>
              <ul className={m.ul}>
                <li className={m.li}>Стоимость доставки по Москве и Московской области — 500 р.</li>
                <li className={m.li}>При сумме заказа от 5 000 р. доставка по Москве бесплатная.</li>
                <li className={m.li}>При сумме заказа от 7 000 р.
                  доставка по Московской области
                  бесплатная.</li>
              </ul>
              <div className={m.disc}>
                По Москве и Московской области
                доставка осуществляется курьерской
                службой КС Логистик.
              </div>
            </div>
            <div className={m.targetWrapper}>
              <span className={m.targetTitle}>Санкт-Петербург и Ленинградская область</span>
              <ul className={m.ul}>
                <li className={m.li}>Стоимость доставки по Санкт-
                  Петербургу и Ленинградской
                  области — 300 р. При сумме заказа
                  более 3 000 р. доставка по Санкт-
                  Петербургу бесплатная.</li>
                <li className={m.li}>При сумме заказа более 5 000 р.
                  доставка по Ленинградской
                  области бесплатная.</li>
              </ul>
              <div className={m.disc}>
                По Санкт-Петербургу и Ленинградской
                области доставка осуществляется
                курьерской службой Контакт.
              </div>
            </div>
            <div className={m.targetWrapper}>
              <span className={m.targetTitle}>Другие регионы России</span>
              <ul className={m.ul}>
                <li className={m.li}>Стоимость доставки по
                  Российской Федерации — 700 р.</li>
                <li className={m.li}>При сумме заказа от 20 000 р.
                  доставка по Российской
                  Федерации бесплатная.</li>
              </ul>
              <div className={m.disc}>
                Доставка по Российской Федерации
                осуществляется службой экспресс-
                доставки Major Express.
              </div>
              <div className={m.disc}>
                Собранный заказ мы отправляем по
                адресу, указанному при оформлении
                заказа. В зависимости от региона, время
                в пути составляет 1-5 рабочих дней. Срок
                доставки зависит от региона —
                уточняйте подробности у наших
                менеджеров.
              </div>
            </div>
            <div className={m.targetWrapper}>
              <span className={m.targetTitle}>Самовывоз (бесплатно)</span>
              <div className={m.disc}>
                Покупки Интернет-магазина можно
                будет самостоятельно забрать только в
                офисе Ormco в Москве после окончания
                ограничительных мер, связанных с
                пандемией. В настощее время офисы
                закрыты для посещений. В офисе в
                Санкт-Петербурге опция самовывоза не
                предусмотрена.
              </div>
            </div>
          </div>


          <div className={m.purchaseContainer}>
            <h2 className={m.purchaseTitle}>Оплата</h2>
            <div className={m.purchaseWrapper}>
              <div className={m.purchaseTextWrapper}>
                <p className={m.purchaseText}>Получателем платежей является ООО «Ормко»<br />
                  ИНН 7806182285<br />
                  КПП 780601001<br />
                  Р/С 40702810303000085241 в филиале «Северная столица» АО «Райффайзенбанк»<br />
                  К/С 30101810100000000723<br />
                  БИК 044030723<br />
                  ОГРН 1157847236073<br />
                  Адрес регистрации – 195112, Россия, г. Санкт-Петербург, Малоохтинский проспект, д.64, литер В, пом. 26Н</p>
              </div>
              <div className={m.aboutPayment}>
                <h4 className={m.paymentTitle}>Способы оплаты</h4>
                <div className={m.ulWrapper}>
                  <ul className={m.ul}>
                    <li className={m.li}>Банковской/кредитной картой онлайн через систему Pay Any Way. Онлайн платежи совершаются на сайте платежной системы и защищаются протоколом HTTPS и двухфакторной
                      аутентификации пользователя 3D Secure. Ваши данные в безопасности;</li>
                    <li className={m.li}>Наличными или банковской/кредитной картой курьеру при получении заказа;</li>
                    <li className={m.li}>Наличными или банковской/кредитной картой в офисе Ormco в Москве с 9:30 до 17:00 с понедельника по пятницу. После снятия ограничительных мер, сейчас недоступно;</li>
                    <li className={m.li}>Наличными или банковской/кредитной картой по квитанции в любом городе в любом банке;</li>
                    <li className={m.li}>Переводом денежных средств на расчетный счет ООО «Ормко» по счету для юридического лица.</li>
                  </ul>
                </div>
                <h4 className={m.paymentTitle}>Как оплатить заказ онлайн</h4>
                <div className={m.ulWrapper}>
                  <ul className={m.ul}>
                    <li className={m.li}>Положите в корзину все нужные товары и оформите заказ.</li>
                    <li className={m.li}>При оформлении выберите нужный способ доставки и вариант оплаты «Онлайн оплата».</li>
                    <li className={m.li}>На ваш e-mail придет уведомление об успешном оформлении заказа.</li>
                    <li className={m.li}>Дождитесь звонка менеджера Ormco для подтверждения заказа.</li>
                    <li className={m.li}>После подтверждения заказа на ваш e-mail придет ссылка для онлайн оплаты. После перехода по ссылке откроется страница нашего сайта, на которой вам нужно подтвердить
                      онлайн оплату. После этого вы будете переадресованы на страницу ввода реквизитов банковской карты.</li>
                    <li className={m.li}>Введите реквизиты, проверочный код, полученный на телефон и завершите оплату.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase