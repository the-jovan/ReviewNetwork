import React from 'react'
import Card from './Card'

export const createTrendingCards = data => {
  if (!data) {
    return <div>Loading</div>
  } else {
    return data.map(e => (
      <Card key={e.id}
        img={e.entity.images[0]}
        type={e.entity.type}
        name={e.entity.name}
        address={e.entity.address}
        stars={e.entity.stars}
        review={e.entity.review_stats.reviews_total}
      />
    ))
  }
}

export const createCards = data => {
  if (!data) {
    return <div>Loading</div>
  } else {
    return data.map(e => (
      <Card key={e.id}
        img={e.images[0]}
        type={e.type}
        name={e.name}
        address={e.address}
        stars={e.stars}
        review={e.review_stats.reviews_total}
      />
    ))
  }
}