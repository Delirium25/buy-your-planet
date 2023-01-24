export default class CartContext {

    constructor(cart, setCart) {
        this.cart = cart;
        this.setCart = setCart;
    }

    addToCart(planet) {
        this.cart.push(planet);
        this.setCart(this.cart);
    }

    removeFromCart(planet) {
        const newCart = this.cart.filter(p => p.id !== planet.id);
        this.setCart(newCart);
    }

    resetCart() {
        this.setCart([]);
    }

    itemCount() {
        return this.cart.length;
    }
}
