import React from 'react'
import { useState } from 'react'
import { StyledQuantityBtn } from './Styles/QuantityBtn.styled'

const QuantityBtn = () => {

 const [quantity, setQuantity] = useState(1)
  return (
    <StyledQuantityBtn>
     <button onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}>-</button>
     <div className="quantity">{quantity}</div>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </StyledQuantityBtn>
  )
}

export default QuantityBtn
