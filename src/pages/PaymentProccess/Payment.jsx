import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Payment() {

    const navigate = useNavigate()

const checkout = async () => {
  await fetch("http://localhost:4000/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
        navigate(url)
    })
    .catch(e => {
      console.error(e.error)
    })
}

  return (
    <button onClick={()=>{checkout()}}>Payment</button>
  )
}
