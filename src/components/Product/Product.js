import React, { useState, useEffect } from 'react'
import './../../scss/components/product/_product.scss'
import { getSingleRestaurant, getSingleHotel } from './../../services/api/fetchAll'
import { Link } from '@reach/router'

import Score from './Score/Score'
import ProductGallery from './ProductGallery/ProductGallery'
import ProductOverview from './ProductOverview/ProductOverview'
import ProductDropDown from './ProductDropDown/ProductDropDown'

const Product = ({type, name}) => {
  const [data, setData] = useState()

  useEffect(() => {
    switch(type) {
      case 'restaurants':
        getSingleRestaurant(name).then(response => {
          console.log('name')
          setData(response.data)
        })
      break
      case 'hotels':
        getSingleHotel(name).then(response => {
          setData(response.data)
        })
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

  const createDropDown = () => {
    if (data) {
      if (type === 'restaurants') {
        const info = [{type: 'Cuisine', facilities: data.cuisine}, {type: 'Meals', facilities: data.meals},
        {type: 'Features', facilities: data.features}, {type: 'Good For', facilities: data.good_for}]
        return info.map(e => <ProductDropDown info={e} />)
      } else if (type='hotels') {
        return data.facilities.map(e => <ProductDropDown info={e} />)
      }
    }
  }

  return (
    <div className='product__wrapper'>
      <div className='product__container'>
        {createMainImage()}
        <div className='product__sides'>
          <div className='product__side'>
            <Link className='product__return' to='/'>&lt;</Link>
            <h2>{name.split('-').join(' ')} <span>9</span></h2>
            {createScore()}
            {createGallery()}
            {data && data.summary && <p className='product__summary'>{data.summary}</p>}
          </div>
          <div className='product__side'>
            <Link className='product__addReview' to=''>Write Review</Link>
            {createOverview()}
            <div>
              {createDropDown()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product