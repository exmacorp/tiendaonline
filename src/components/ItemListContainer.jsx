import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({saludo}) => {
  return (
    <>   
        <h1 className='text-3xl font-bold'>{saludo}</h1>

        <ItemCount stock={5}/>
    </>

  )
}

export default ItemListContainer