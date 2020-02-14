import React, { useState, useEffect } from 'react'
import './../../../scss/components/_search.scss'
import { createCards } from './../../Card/createCards'
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
  }, [])

  function getData() {
    if (type === 'restaurants') {
      switch (urlParams.get('meals')) {
        case 'Dinner':
          getDinner(page).then(response => setData({list: [...data.list, ...response.data], limit: response.meta.pagination.total}))
        break
        case 'Lunch':
          getLunch(page).then(response => setData({list: [...data.list, ...response.data], limit: response.meta.pagination.total}))
        break
        case 'Brunch':
          getBrunch(page).then(response => setData({list: [...data.list, ...response.data], limit: response.meta.pagination.total}))
        break
      }
    } else if (type === 'hotels') {
      switch (urlParams.get('stars')) {
        case '5':
          getFiveStars(page).then(response => setData({list: [...data.list, ...response.data], limit: response.meta.pagination.total}))
        break
        case '4':
          getFourStars(page).then(response => setData({list: [...data.list, ...response.data], limit: response.meta.pagination.total}))
        break
        case '3':
          getThreeStars(page).then(response => setData({list: [...data.list, ...response.data], limit: response.meta.pagination.total}))
        break
      }
    } else {
      // NE RADI TYPE ZA TRENDING?????????????
    }
  }

  return (
    <div className='search__wrapper'>
      <div className='search__grid'>
        {createCards(data.list)}
      </div>
    </div>
  )
}

export default Search