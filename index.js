const shopping = new Vue({
    el: '#shopping_cart',
    data: {
        count: 1,
        cartItems: [],
        shopItems: [
            { id: 1, name: 'Angel Eye Headlight BMW 3er Limo', price: 350, url: '/product.html', photo: 'src/prod1.png', description: 'So, if you like listening to the sound of your engine, or if you like the smell of burning rubber of your wheels, you are in the right place.'},
            { id: 2, name: 'Mazda Gearbox Transmission', price: 400, url: '/product1.html', photo: 'src/prod2.png', description: 'So, if you like listening to the sound of your engine, or if you like the smell of burning rubber of your wheels, you are in the right place.' },
            { id: 3, name: 'Headlight Ford Focus Typ 6N', price: 175, url: '/product2.html', photo: 'src/prod3.png', description: 'So, if you like listening to the sound of your engine, or if you like the smell of burning rubber of your wheels, you are in the right place.' },
    ]},
    methods: {
        addToShoppingCart: function(id) {
           const findItem = this.shopItems.find(e => e.id === id);
            for (let i = 0; i < this.count; i++) {
                this.cartItems.push(findItem);
            }
            this.count = 1;
        },

        removeFromShoppingCart: function(id) {
            const itemIndex = this.cartItems.findIndex(e => e.id === id);
            if (this.cartItems[itemIndex].amount > 1) {
                const newItemIndex = this.cartItems[itemIndex];
                newItemIndex.amount -= 1;
                this.cartItems.splice(itemIndex, 1, newItemIndex);
            } else {
                this.cartItems.splice(itemIndex, 1);
            }
        },

        deleteCartItems: function (id) {
            const itemIndex = this.cartItems.findIndex(e => e.id === id);
            this.cartItems.splice(itemIndex, 1);
        },

        increaseQty: function() {
            this.count++;
        },

        decreaseQty: function() {
            if (this.count <= 1) {
                return;
            } else {
                this.count--;
            }
        },
    },
    watch: {
        cartItems: function() {
            window.localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        }
    },
    beforeMount: function() {
        const getItems = JSON.parse(window.localStorage.getItem('cartItems'));
        if (getItems) {
            this.cartItems = getItems;
        } 
    },
});

const header = new Vue ({
    el: '#header',
    computed: {
        quantity: function() {
            return shopping.cartItems.length;
        },
        sum: function() {
            let sum = 0;
            shopping.cartItems.forEach(i => sum += i.price);
            return sum;
        },
    },
});
