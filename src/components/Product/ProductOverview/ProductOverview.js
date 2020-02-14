import React from 'react'
import './../../../scss/components/product/_productOverview.scss'

const ProductOverview = ({ info }) => {
  const { address, city, country, phone, website, email, rooms } = info
  return (
    <div className='productOverview'>
      <h2>Overview</h2>
      <p><b>Address:</b> {address}, {city}, {country}</p>
      {phone && <p><b>Phone:</b> {phone}</p>}
      {website && <p><b>Website:</b> {website}</p>}
      {email && <p><b>Email:</b> {email}</p>}
      {rooms && <p><b>Rooms:</b> {rooms.join(', ')}</p>}
    </div>
  )
}

export default ProductOverview