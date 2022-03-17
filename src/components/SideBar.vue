<template>
  <div v-if="showSidebar" class="cart-containe">
    <div class="containe">
      <h1 class="cart-tile">
        Shopping Cart
      </h1>
      <button @click="toggle" class="cart-close">
        <i class="fa-solid fa-xmark fa-2x" style="color: white"></i>
      </button>
    </div>
    <div class="cat-body">
      <div class="styled-table tab">
        <p class="list-item first">Product</p>
        <p class="list-item sec">Price</p>
        <p class="list-item sec">Qty</p>
        <p class="list-item sec">Total</p>
      </div>
      <div>
        <div class="styled-table tablex" v-for="(quantity, key, i) in cart" :key="i">
          <p class="list-item first">{{ key }}</p>
          <p class="list-item">${{ getPrice(key) }}</p>
          <p class="list-item">{{ quantity }}</p>
          <p class="list-item">${{ quantity * getPrice(key) }}</p>
          <button @click="removeItem(key)" class="remove">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
    <p class="center no" v-if="!Object.keys(cart).length"><em>No items in cart</em></p>
    <div class="sprea">
      <span><strong>Total:</strong> ${{ calculateTotal() }}</span>
      <button class="btn-ligh">Checkout</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['toggle', 'cart', 'inventory', 'removeItem', 'showSidebar'],
  methods: {
    getPrice(name) {
      const product = this.inventory.find((p) => p.name === name);
      return product.price.USD;
    },
    calculateTotal() {
      const total = Object.entries(this.cart).reduce((
        acc,
        curr,
        // eslint-disable-next-line no-unused-vars
        index,
      ) => acc + (curr[1] * this.getPrice(curr[0])), 0);
      return Math.floor(total.toFixed(2));
    },
  },
};
</script>

<style lang="scss">
.cart-containe {
  background-color: #1a7bbc;
  display: flex;
  flex-direction: column;
  padding: 2%;
}

.containe {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.cart-close {
  background-color: transparent;
  border: none;
  margin-right: 0;
  margin-left: auto;
}

.cat-body {
  display: flex;
  flex-direction: column;
}

.styled-table {
  display: flex;
  flex-direction: row;
}

.tab {
  margin-top: 3%;
  font-size: 1.1em;
}

.tablex {
  margin-top: 1%;
}

.list-item {
  width: 21%;
}

.first {
  width: 30%;
  font-weight: 600;
  flex-wrap: wrap;
}

.sec {
  font-weight: 600;
}

.sprea {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6%;
}

.remove {
  background-color: transparent;
  border: none;
}

.btn-ligh {
  padding: 2%;
  width: 60%;
  font-size: 1.01em;
  margin-top: 2%;
  color: #fff;
  border-color: rgb(241, 33, 102);
  background-color: rgb(241, 33, 102);
  @media only screen and (min-width:992px) {
    padding: 1%;
    width: 25%;
  }
}
</style>
