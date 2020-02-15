import React, { useEffect, useState } from 'react'
import './../../../scss/components/_searchResults.scss'
import { searchByCity } from './../../../services/searchEntity'

import { createCards } from './../../Card/createCards'

const SearchResults = ({term}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    searchByCity(term).then(response => setData(response.data))
  }, [term])

  console.log(data)

  return (
    <div className='searchResults__wrapper'>
      <div className='searchResults'>
        {createCards(data)}
      </div>
    </div>
  )
}

export default SearchResults