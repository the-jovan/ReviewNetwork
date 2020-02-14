import React, { useContext } from 'react'
import './../../../scss/components/_categorizedGrid.scss'
import { Link } from '@reach/router'
import { ReviewsNetworkContext } from './../../App'
import { createTrendingCards, createCards } from './../../Card/createCards'

const Trending = () => {
  const state = useContext(ReviewsNetworkContext)
  const { trending, restaurants, hotels } = state[0]

  return (
    <div className='review__wrapper'>
      <div className='review'>
        <h2 className='review__section'>Trending <Link className='review__seeall' to='trending/search&page=1'>See all</Link></h2>
        <div className='review__grid'>
          {createTrendingCards(trending)}
        </div>

        <h2 className='review__section'>Restaurants <Link className='review__seeall' to='restaurants'>See all</Link></h2>
        <div className='review__grid'>
          {createCards(restaurants)}
        </div>


        <h2 className='review__section'>Hotels <Link className='review__seeall' to='hotels'>See all</Link></h2>
        <div className='review__grid'>
          {createCards(hotels)}
        </div>
      </div>
    </div>
  )
}

export default Trending