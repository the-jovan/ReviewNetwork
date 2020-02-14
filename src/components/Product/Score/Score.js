import React from 'react'
import './../../../scss/components/product/_score.scss'

const Score = ({opts}) => {
  return (
    <div className='score'>
      <p className='score__text'><span>boxes stuff</span> - {opts.review.reviews_total} Reviews</p>
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