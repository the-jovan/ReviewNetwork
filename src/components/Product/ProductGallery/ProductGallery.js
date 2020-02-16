import React, { useState } from 'react'
import './../../../scss/components/product/_productGallery.scss'

const ProductGallery = ({images}) => {
  const [slides, showSlides] = useState(false)

  const showCarousel = (show, img) => {
    console.log(show, img)
    return (
      <div style={{display: show}}>
        qwdokqwdok
      </div>
    )
  }

  return (
    <div className='productGallery'>
      {showCarousel()}
      {images.map(e => <img className='productGallery__image' key={e} src={e} onClick={() => {
        showCarousel('block', e)
      }}/>)}
    </div>
  )
}

export default ProductGallery