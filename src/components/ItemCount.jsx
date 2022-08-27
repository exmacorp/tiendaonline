import React, {useState} from 'react'

const ItemCount = ({ stock }) => {
    const [cuenta, setCuenta] = useState(1)

    const sumar = () => {
        if (cuenta < stock) {
            setCuenta(cuenta + 1)
        } else{
            alert("no se puede sumar mas")
        }
    }

    const restar = () => {
        setCuenta(Math.max(cuenta -1, 1))
    }


    return (
        <>
            <div className='flex gap-6 py-6 px-10'>
                <button className='text-xl' onClick={restar}>-</button>
                <p className='text-xl font-bold'>{cuenta}</p>
                <button className='text-xl' onClick={sumar}>+</button>
            </div>
            <button>Agregar al Carrito</button>

        </>
    )
}

export default ItemCount