import React from 'react'
import Layout from '../Layout'
import { useContext } from 'react';
import { CartContextContainer } from '../../App';
import Grid from '@mui/material/Grid';
import CartItem from './CartItem';



function Cart() {

    const cartClass = useContext(CartContextContainer);

    return (
        <Layout>
            <Grid container spacing={1}>
                {cartClass.cart.map(planet => (
                    <Grid item xs={5}>
                        <CartItem planet={planet} key={planet.id} />
                    </Grid>
                ))}
            </Grid>
        </Layout>
    )
}

export default Cart