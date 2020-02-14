import React from 'react'
import './../../../scss/components/product/_productGallery.scss'

const ProductGallery = ({images}) => {
  return (
    <div className='productGallery'>
      {images.map(e => <img className='productGallery__image' key={e} src={e}/>)}
    </div>
  )
}

export default ProductGallery