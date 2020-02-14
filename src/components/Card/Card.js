import React from 'react'
import './../../scss/components/_card.scss'
import { Link } from '@reach/router'

const Card = props => {
  const {img, type, name, address, stars, review} = props
  let urlName = name.split(' ').join('-')

  const getLoc = () => {
    if (type === 'Restaurant') return 'restaurants'
    else if (type === 'Hotel') return 'hotels'
  }

  return (
    <Link className='card' to={`/product/${getLoc()}/${urlName}`}>
      <div className='card__img' style={{backgroundImage: "url(" + img + ")"}} alt={name} />
      <div className='card__info'>
        {type && <span className='card__type'>{type}</span>}
        <span className='card__name'>{name}</span>
        <span className='card__address'>{address}</span>
        <div className='card__info__reviews'>
          <span>{stars}</span>
          <span className='card__reviews'>{review} reviews</span>
        </div>
      </div>
    </Link>
  )
}

export default Card