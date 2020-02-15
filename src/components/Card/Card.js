import React from 'react'
import './../../scss/components/_card.scss'
import { Link } from '@reach/router'

const Card = props => {
  const {img, type, name, address, stars, review, slug} = props
  // let urlName = name.split(' ').join('-')

  const getLoc = () => {
    if (type === 'Restaurant') return 'restaurants'
    else if (type === 'Hotel') return 'hotels'
  }

  const createRating = () => {
    if (stars !== null && stars !== undefined) {
      return (<img src={`/scores/${(Math.round(stars * 10) / 10).toFixed(1)}.svg`} />)
    } else {
      return (<img src={`/scores/0.0.svg`} />)
    }
  }

  return (
    <Link className='card' to={`/product/${getLoc()}/${slug}`}>
      <div className='card__img' style={{backgroundImage: "url(" + img + ")"}} alt={name} />
      <div className='card__info'>
        {type && <span className='card__type'>{type}</span>}
        <span className='card__name'>{name}</span>
        <span className='card__address'>{address}</span>
        <div className='card__info__reviews'>
          <span>{createRating()}</span>
          <span className='card__reviews'>{review} reviews</span>
        </div>
      </div>
    </Link>
  )
}

export default Card

