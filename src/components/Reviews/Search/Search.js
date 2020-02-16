import React, { useState, useEffect } from 'react'
import './../../../scss/components/_search.scss'
import _ from 'lodash'
import { createCards, createTrendingCards } from './../../Card/createCards'
import { getDinner, getLunch, getBrunch } from './../../../services/api/fetchRestaurants'
import { getFiveStars, getFourStars, getThreeStars } from './../../../services/api/fetchHotels'
import { getTrending } from './../../../services/api/fetchAll'

const Search = ({type}) => {
  const [data, setData] = useState({
    list: [],
    limit: 0
  })

  const urlParams = new URLSearchParams(window.location.search)

  let page = urlParams.get('page')

  useEffect(() => {
    getData()
    // window.addEventListener('scroll', _.throttle(handleScroll, 100))

    // return () => {
    //   window.removeEventListener('scroll', _.throttle(handleScroll, 100))
    // }
  }, [])

  function getData(pages = page) {
    if (type === 'restaurants') {
      switch (urlParams.get('meals')) {
        case 'Dinner':
          getDinner(pages).then(response => setData({page: pages, list: [...data.list, ...response.data], limit: response.meta.pagination.total_pages}))
        break
        case 'Lunch':
          getLunch(pages).then(response => setData({page: pages, list: [...data.list, ...response.data], limit: response.meta.pagination.total_pages}))
        break
        case 'Brunch':
          getBrunch(pages).then(response => setData({page: pages, list: [...data.list, ...response.data], limit: response.meta.pagination.total_pages}))
        break
      }
    } else if (type === 'hotels') {
      switch (urlParams.get('stars')) {
        case '5':
          getFiveStars(pages).then(response => setData({page: pages, list: [...data.list, ...response.data], limit: response.meta.pagination.total_pages}))
        break
        case '4':
          getFourStars(pages).then(response => setData({page: pages, list: [...data.list, ...response.data], limit: response.meta.pagination.total_pages}))
        break
        case '3':
          getThreeStars(pages).then(response => setData({page: pages, list: [...data.list, ...response.data], limit: response.meta.pagination.total_pages}))
        break
      }
    } else if (type === 'trending') {
      getTrending(pages).then(response => setData({page: pages, list: [...data.list, ...response.data], limit: response.meta.pagination.total_pages}))
    }
  }

  // const handleScroll = () => {
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     console.log('bottom')
  //   }
  // }

  return (
    <div className='search__wrapper'>
      <div className='search__grid'>
        {type === 'trending' ? createTrendingCards(data.list) : createCards(data.list)}
      </div>
    </div>
  )
}

export default Search