import React from 'react'
import { useEffect } from 'react'
import {  useLocation } from 'react-router-dom'
// import { userRequest } from '../../requestMethods'

const Success = (props) => {
  const location = useLocation()

  useEffect(() => {
    const getPayment = async () => {
      const dados = location.state

      //const res = await userRequest.post('payment/pay', { createdS: dados.created })
      console.log(dados.created);
    }
    location.state && getPayment()
  }, [location])
  return (
    <div>SuccessFull</div>
  )
}

export default Success


// const stripe = require('stripe')('sk_test_51MOQ7kEfqcFNrivWGqtTJPPek2wLq5jmllOVoxIN35K3gUwqz9kx6BYymmDjEtzlcYdUam3Uiw3rin6LsJKF18mb00SEk4mTzX');

// // To create a requires_capture PaymentIntent, see our guide at: https://stripe.com/docs/payments/capture-later
// const paymentIntent = await stripe.paymentIntents.capture(
//   'pi_1EUuaTJxRPM20N1wHXJFZHcJ'
// );