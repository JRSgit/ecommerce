import React from 'react'
import { Container } from './Categories'

import { categories } from '../../data/Data'
import CategoryItem from '../categoryItem/CategoryItem.jsx'

const Categories = () => {
  return (
    <>
      <h1 style={{
        margin: 10, padding: 10, fontSize: 43, color: 'gray', fontWeight: 600
      }}>Categorias</h1>
      <Container>
        {categories.map(item => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  )
}

export default Categories