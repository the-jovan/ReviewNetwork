import React, { useEffect, useContext } from 'react'
import './../../../scss/components/_categorizedGrid.scss'
import { Link } from '@reach/router'
import { getAllRestaurants } from './../../../services/api/fetchRestaurants'
import { ReviewsNetworkContext } from './../../App'
import { createCards } from './../../Card/createCards'

const Restaurants = () => {
  const state = useContext(ReviewsNetworkContext)
  const { dinner, lunch, brunch } = state[0]

  useEffect( () => {
    if (!state[0].dinner && !state[0].lunch && !state[0].brunch) {
      getAllRestaurants().then(response => {
        state[1]({...state[0], dinner: response[0].data, lunch: response[1].data, brunch: response[2].data})
      })
    }
  }, [])

  return (
    <div className='review__wrapper'>
      <div className='review'>
        <h2 className='review__section'>Dinner <Link className='review__seeall' to='search?meals=Dinner&page=1'>See all</Link></h2>
        <div className='review__grid'>
          {createCards(dinner)}
        </div>

        <h2 className='review__section'>Lunch <Link className='review__seeall' to='search?meals=Lunch&page=1'>See all</Link></h2>
        <div className='review__grid'>
          {createCards(lunch)}
        </div>


        <h2 className='review__section'>Brunch <Link className='review__seeall' to='search?meals=Brunch&page=1'>See all</Link></h2>
        <div className='review__grid'>
          {createCards(brunch)}
        </div>
      </div>
    </div>
  )
}

export default Restaurants