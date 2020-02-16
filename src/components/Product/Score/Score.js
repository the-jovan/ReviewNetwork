import React from 'react'
import './../../../scss/components/product/_score.scss'

const Score = ({opts}) => {

  const createRating = () => {
    if (opts.stars !== null && opts.stars !== undefined) {
      return (<img src={`/scores/${(Math.round(opts.stars * 10) / 10).toFixed(1)}.svg`} />)
    } else {
      return (<img src={`/scores/0.0.svg`} />)
    }
  }

  return (
    <div className='score'>
      <p className='score__text'><span>{createRating()}</span> - {opts.review.reviews_total} Reviews</p>
      <div>
        <div className='score__table'>
          <span>Excellent</span>
          <div>some bar</div>
          <span>{opts.review.stars5}</span>
        </div>

        <div className='score__table'>
          <span>Above Average</span>
          <div>some bar</div>
          <span>{opts.review.stars4}</span>
        </div>

        <div className='score__table'>
          <span>Average</span>
          <div>some bar</div>
          <span>{opts.review.stars3}</span>
        </div>

        <div className='score__table'>
          <span>Below Average</span>
          <div>some bar</div>
          <span>{opts.review.stars2}</span>
        </div>

        <div className='score__table'>
          <span>Terrible</span>
          <div>some bar</div>
          <span>{opts.review.stars1}</span>
        </div>
      </div>
    </div>
  )
}

export default Score