import React, { useState } from 'react'
import './../../../scss/components/product/_productGallery.scss'

const ProductGallery = ({images}) => {
  const [data, setData] = useState({
    images: images,
    toggle: false
  })

  const showCarousel = ({toggle, images, img}) => {
    if (toggle) {
      let index = images.indexOf(img)

      const getPrevious = () => {
        if (index > 0) {
          index -= 1
        } else {
          index = images.length - 1
        }
        console.log(index)
      }

      return (
        <div className='productGallery__slideshow'>
          <div className='productGallery__slideshow__before' onClick={() => getPrevious()}>Left</div>
          <img className='productGallery__slideshow__image' src={images[index]} />
          <span className='productGallery__slideshow__image__close' onClick={() => setData({...data, toggle: false})}>X</span>
          <div className='productGallery__slideshow__before'>Right</div>
        </div>
      )
    }
  }

  return (
    <div className='productGallery'>
      {showCarousel(data)}
      {images.map(e => <img className='productGallery__image' key={e} src={e} onClick={() => {
        setData({...data, toggle: true, img: e})
      }}/>)}
    </div>
  )
}

export default ProductGallery