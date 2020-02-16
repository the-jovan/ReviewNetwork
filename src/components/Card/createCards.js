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
        slug={e.entity.slug}
        address={e.entity.address}
        stars={e.entity.review_stats.average_score}
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
        slug={e.slug}
        address={e.address}
        stars={e.review_stats.average_score}
        review={e.review_stats.reviews_total}
      />
    ))
  }
}