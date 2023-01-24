import React from 'react'

function CartItem({ planet }) {
    return (
        <div>
            {planet.name}
            {planet.id}
            {planet.price}
            {planet.distance}
        </div>
    )
}

export default CartItem
