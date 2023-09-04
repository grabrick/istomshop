import React, { FC, useEffect, useState } from 'react'
import m from './Shop.module.css'
import CardComponent from './cardComponent/CardComponent'
import Image from 'next/image'
import leftArrow from '../../../public/images/arrow-left-s-line.svg'
import rightArrow from '../../../public/images/arrow-right-s-line.svg'
import Pagination from '@/components/extra/Paginate/Pagination'
import axios from 'axios'


const Home: FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/card').then(res => {
      setData(res.data)
    })
  }, []);
  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/card').then(res => {
  //     setData(res.data)
  //   })
  // }, []);
  const itemsPerPage = 21;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Вычисляем индексы начала и конца данных для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Отображаем только необходимые элементы для текущей страницы
  const slicedData = data.slice(startIndex, endIndex);

  // Обработчик смены страницы
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={m.container}>
      <div className={m.wrapper}>
        <div className={m.marketWrapper}>
          <div className={m.catalog}></div>
          <div className={m.cardWrapper}>
            {slicedData.map((items: any) => (
              <CardComponent items={items} key={items._id} />
            ))}
          </div>
          <div className={m.paginate}>
            {data.length > itemsPerPage && (
              <Pagination
                totalPages={Math.ceil(
                  data.length / itemsPerPage
                )}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home