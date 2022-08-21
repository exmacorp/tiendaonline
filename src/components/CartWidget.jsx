import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = () => {
  return (
    <>
        <button>
            <FaShoppingCart className='text-white' size={20} />
        </button>
    </>
  )
} 

export default CartWidget


