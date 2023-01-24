export default class CartContext {

    constructor(cart, setCart) {
        this.cart = cart;
        this.setCart = setCart;
    }

    addToCart(planet) { 
        this.setCart(oldArray => [...this.cart, planet]);
    }

    removeFromCart(planet) {
        const newCart = this.cart.filter(p => p.id !== planet.id);
        this.setCart(oldArray => newCart);
    }

    resetCart() {
        this.setCart([]);
    }

    itemCount() {
        return this.cart.length;
    }
}
