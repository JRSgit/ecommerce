import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, } from 'react-router-dom'
import Add from '@material-ui/icons/AddCircleOutlineOutlined'
import Remove from '@material-ui/icons/Remove'

import {
  ProductAmountContainer,
  SumaryItemPrice,
  SumaryItemText,
  ProductDetail,
  ProductAmount,
  SummaryTitle,
  ProductPrice,
  ProductColor,
  ProductSize,
  ProductName,
  PriceDetail,
  SumaryItem,
  Container,
  TopButton,
  ProductId,
  TopTexts,
  Summary,
  Product,
  Toptext,
  Details,
  Button,
  Bottom,
  Wapper,
  Image,
  Title,
  Info,
  Top,
  Hr

} from './Cart'
import NavBar from '../../components/navbar/NavBar.jsx'
import Amountcement from '../../components/amountCement/Amountcement.jsx'
import Footer from '../../components/footer/Footer.jsx'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from '../../requestMethods'


const Cart = () => {
  const navigate = useNavigate()
  const cart = useSelector(state => state.cart)
  const [stripeToken, setStripeToken] = useState(null)

  const KEY = process.env.REACT_APP_STRIPE

  const handleClick = () => {
    navigate()
  }

  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100
        })
        console.log(res.data)
        navigate("/success", { state: res.data })

      } catch (err) {
        console.log(err.message)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken, cart.total, navigate])


  return (
    <Container>
      <NavBar />
      <Amountcement />
      <Wapper>
        <Title>YOUR BAG</Title>
        <Top>

          <TopButton onClick={handleClick}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <Toptext>Shopping Bag(2)</Toptext>
            <Toptext>Your Wishlist (0)</Toptext>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>

            {cart.product.map(product => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName><b>Product:</b> {product.title} </ProductName>
                    <ProductId><b>ID:</b> {product._id}</ProductId>
                    <ProductColor color={product.color} />
                    {/* {product.size?.map(s => (
                      <ProductSize><b>Size:</b>{s}</ProductSize>
                      
                    ))} */}
                    <ProductSize><b>Size:</b>{product.size}</ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                </PriceDetail>
              </Product>
            ))
            }

            <Hr />


          </Info>
          <Summary>

            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SumaryItem>
              <SumaryItemText>Subtotal</SumaryItemText>
              <SumaryItemPrice>$ {cart.total}</SumaryItemPrice>
            </SumaryItem>

            <SumaryItem>
              <SumaryItemText>Estimated Shipping</SumaryItemText>
              <SumaryItemPrice>$ 5.90</SumaryItemPrice>
            </SumaryItem>

            <SumaryItem>
              <SumaryItemText>Shipping Discount</SumaryItemText>
              <SumaryItemPrice>$ -5.90</SumaryItemPrice>
            </SumaryItem>

            <SumaryItem type='total'>
              <SumaryItemText >Total</SumaryItemText>
              <SumaryItemPrice>$ {cart.total}</SumaryItemPrice>
            </SumaryItem>

            <StripeCheckout
              name='RSAS.'
              image=''
              billingAddress
              shippingAddress
              description={`You total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>


          </Summary>
        </Bottom>
      </Wapper>
      <Footer />

    </Container>
  )
}

export default Cart
