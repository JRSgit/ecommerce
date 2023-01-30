import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Add from '@material-ui/icons/AddCircleOutlineOutlined'
import Remove from '@material-ui/icons/Remove'
import {
  FilterSizerOption,
  FilterContainer,
  AmountContainer,
  InfoContainer,
  ImgContainer,
  AddContainer,
  FilterTitle,
  FilterColor,
  FilterSize,
  Container,
  Amount,
  Filter,
  Wapper,
  Button,
  Title,
  Image,
  Price,
  Desc,
} from './Product'

import NavBar from '../../components/navbar/NavBar.jsx'
import Announcement from '../../components/amountCement/Amountcement.jsx'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer.jsx'
import { publicRequest } from '../../requestMethods'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux'



const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const dispatch = useDispatch()

  const handleQuatity = (type) => {
    if (type === 'des') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = async () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    )
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get('products/' + id)
        setProduct(res.data)
      } catch (err) {

      }
    }
    getProduct()
  }, [id])

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wapper >
        <ImgContainer >
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)}></FilterColor>

              ))}

            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product.size?.map((s) => (
                  <FilterSizerOption key={s} onClick={() => setSize()}>{s}</FilterSizerOption>


                ))}

              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: 'pointer' }} onClick={() => handleQuatity('des')} />
              <Amount>{quantity}</Amount>
              <Add style={{ cursor: 'pointer' }} onClick={() => handleQuatity('inc')} />
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product