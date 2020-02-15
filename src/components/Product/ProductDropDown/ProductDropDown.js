import React, { useState } from 'react'
import './../../../scss/components/product/_productDropDown.scss'

const ProductDropDown = ({info}) => {
  const [show, toggle] = useState(false)
  const {type, facilities} = info

  return (
    <div className='dropdown__element' onClick={() => toggle(!show)}>
      <h2>{type}</h2>
      <ul className='dropdown__element__list' style={{display: show ? 'block' : 'none'}}>
        {facilities.map(e => <li key={e}>{e}</li>)}
      </ul>
    </div>
  )
}

export default ProductDropDown