import React, { useState, useEffect } from 'react'
import './../../scss/components/product/_product.scss'
import { getSingleRestaurant, getSingleHotel } from './../../services/api/fetchAll'

import Score from './Score/Score'
import ProductGallery from './ProductGallery/ProductGallery'
import ProductOverview from './ProductOverview/ProductOverview'

const Product = ({type, name}) => {
  const [data, setData] = useState()
  console.log(data)

  useEffect(() => {
    switch(type) {
      case 'restaurants':
        getSingleRestaurant(name).then(response => setData(response.data))
      break
      case 'hotels':
        getSingleHotel(name).then(response => setData(response.data))
      break
    }
  }, [])

  const createMainImage = () => {
    if (data) {
      return <div className='product__mainImg' style={{backgroundImage: "url(" + data.images[0] + ")"}} />
    }
  }

  const createScore = () => {
    if (data) {
      const opts = {stars: data.stars, review: data.review_stats}
      return <Score opts={opts}/>
    }
  }

  const createGallery = () => {
    if (data) {
      return <ProductGallery images={data.images} />
    }
  }

  const createOverview = () => {
    if (data) {
      const info = {address: data.address, phone: data.phone, website: data.website, 
        email: data.email, rooms: data.room_info, country: data.country_name, city: data.city_name}
      return <ProductOverview info={info}/>
    }
  }

  return (
    <div className='product__wrapper'>
      <div className='product__container'>
        {createMainImage()}
        <div className='product__sides'>
          <div className='product__side'>
            <h2>{name.split('-').join(' ')} <span>stars</span></h2>
            {createScore()}
            {createGallery()}
          </div>
          <div className='product__side'>
            {createOverview()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product