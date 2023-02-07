import React from 'react'
import { Container } from './Categories'

import { categories } from '../../data/Data'
import CategoryItem from '../categoryItem/CategoryItem.jsx'

const Categories = () => {
  return (
    <>
    <hr style={{width: '100%', marginTop: 20}}/>
      <Container>
        {categories.map(item => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  )
}

export default Categories