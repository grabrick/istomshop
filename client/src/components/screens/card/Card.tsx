import Card from '@/components/selectCard/[id]'
import React, { FC } from 'react'

const CardPage: FC = () => {
  return (
    <Card _id={''} title={''} mainImage={''} description={''} category={''} price={0} characteristics={{
      size: '',
      structure: '',
      moreImage: []
    }} />
  )
}

export default CardPage