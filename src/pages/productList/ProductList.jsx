import React, { useState } from 'react'
import {
  FilterContainer,
  FilterText,
  Container,
  Select,
  Option,
  Filter,
  Title,
} from './ProductList'

import NavBar from '../../components/navbar/NavBar.jsx'
import Amountcement from '../../components/amountCement/Amountcement.jsx'
import Newsletter from '../../components/newsletter/Newsletter.jsx'
import Products from '../../components/products/Products.jsx'
import Footer from '../../components/footer/Footer.jsx'
import CopyRight from '../../components/copyright/CopyRight.jsx'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { publicRequest } from '../../requestMethods'


const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})
  const [categories, setCategories] = useState([])
  const [sort, setSort] = useState('newest')

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  useEffect(() => {
    const getCategories = async () => {
      const res = await publicRequest.get('products/categories')
      const category = res.data.map((categs) => (
        categs.categories.reduce((ac, cv) => ({ ac, cv }))
      ))
      console.log(category)


      // const NameCat = category.map(categN => categN)
      // const rest = NameCat.map((categ, i) => (
      //   console.log(categ[0], i),
      //   categ.map(oxe => oxe)
      // ))
      // console.log(rest[0])
      // for (let i = 0; i < NameCat.length; i++) {
      //   const element = NameCat[i];
      //   for (let z = 0; z < element.length; z++) {
      //     const res = element[z]
      //     arr.push(res)
      //   }
      // }

      // return arr


    }
    getCategories()
  }, [categories])
  return (
    <Container>
      <NavBar />
      <Amountcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>cimento</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value='newest' >Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
      <CopyRight />
    </Container>
  )
}

export default ProductList