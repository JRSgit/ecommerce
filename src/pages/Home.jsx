import React from 'react'
import Amountcement from '../components/amountCement/Amountcement'
import Categories from '../components/categories/Categories.jsx'
import Footer from '../components/footer/Footer.jsx'
import NavBar from '../components/navbar/NavBar.jsx'
import Newsletter from '../components/newsletter/Newsletter.jsx'
import Products from '../components/products/Products.jsx'
import Slider from '../components/slider/Slider.jsx'

const Home = () => {
  return (
    <>
      <Amountcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
