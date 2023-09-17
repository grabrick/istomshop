import React, { FC, useEffect, useState } from 'react'
import m from './Shop.module.css'
import CardComponent from './cardComponent/CardComponent'
import Pagination from '@/components/extra/Paginate/Pagination'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '@/redux/hooks/redux.hook'
import { setCards } from '@/redux/slices/cardSlice'


const Home: FC = () => {
  const [data, setData] = useState([]);
  const searchData = useAppSelector(state => state.cardSlice.searchResult)
  const cardData = useAppSelector(state => state.cardSlice.card)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   axios.get('http://31.129.102.16:5000/card').then(res => {
  //     setData(res.data)
  //     dispatch(setCards(res.data))
  //   })
  // }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/card').then(res => {
      setData(res.data)
      dispatch(setCards(res.data))
    })
  }, []);

  const itemsPerPage = 21;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const slicedData = data.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {    
    if(searchData?.length > 0) {
      setData(searchData)
    } else {
      setData(cardData)
    }
  }, [cardData, searchData])

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
                  data?.length / itemsPerPage
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