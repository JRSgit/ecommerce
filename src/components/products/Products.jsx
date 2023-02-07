import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from './Products'

//import { popularProducts } from '../../data/Data'
import Product from './Product.jsx'

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `http://192.168.1.104:3333/products/categories?category=${cat}`
            : 'http://192.168.1.104:3333/products', { method: "GET" })
        setProducts(res.data);
      } catch (err) {
        console.log(err.message)
      }
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
      ))
    )
  }, [products, filters, cat])

  useEffect(() => {
    if ((sort === 'newest')) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if ((sort === 'asc')) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      )
    }
  }, [sort])
  // console.log(products)
  return (
    <>

      <Container>
        {cat ? filteredProducts.map(item => (
          <Product item={item} key={item._id} />
        )) : products.slice(0, 8).map(item => (
          <Product item={item} key={item._id} />
        ))}
      </Container>
    </>
  )
}

export default Products