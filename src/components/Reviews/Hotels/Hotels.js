import React, { useContext, useEffect } from 'react'
import './../../../scss/components/_categorizedGrid.scss'
import { Link } from '@reach/router'
import { getAllHotels } from './../../../services/api/fetchHotels'
import { ReviewsNetworkContext } from './../../App'
import { createCards } from './../../Card/createCards'

const Hotels = () => {
  const state = useContext(ReviewsNetworkContext)
  const { fiveStars, fourStars, threeStars } = state[0]

  useEffect(() => {
    if (!state[0].fiveStars && !state[0].fourStars && !state[0].threeStars) {
      getAllHotels().then(response => {
        state[1]({...state[0], fiveStars: response[0].data, fourStars: response[1].data, threeStars: response[2].data})
      })
    }
  })

  return (
    <div className='review__wrapper'>
      <div className='review'>
        <h2 className='review__section'>Five stars <Link className='review__seeall' to='search?stars=5&page=1'>See all</Link></h2>
        <div className='review__grid'>
          {createCards(fiveStars)}
        </div>

        <h2 className='review__section'>Four stars <Link className='review__seeall' to='search?stars=4&page=1'>See all</Link></h2>
        <div className='review__grid'>
          {createCards(fourStars)}
        </div>


        <h2 className='review__section'>Three stars <Link className='review__seeall' to='search?stars=3&page=1'>See all</Link></h2>
        <div className='review__grid'>
          {createCards(threeStars)}
        </div>
      </div>
    </div>
  )
}

export default Hotels