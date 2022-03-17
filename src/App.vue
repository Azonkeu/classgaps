<template>
  <div id="app">
    <DesktopNav
      :toggle="toggleSidebar"
      :totalQuantity="totalQuantity"
      :showSidebar="showSidebar"
      :cart="cart"
      :inventory="inventory"
      :removeItem="removeItem"
    />
  </div>
  <router-view
    :inventory="inventory"
    :men="menData"
    :women="womenData"
    :kids="kidData"
    :houses="houseData"
    :showSidebar="showSidebar"
    :addToCart="addToCart"
    :getImgUrl="getImgUrl"
    :getShirtImgUrl="getShirtImgUrl"
    :getKidImgUrl="getKidImgUrl"
    :getHouseImgUrl="getHouseImgUrl"
    :findpercent="findpercent"
    :removeItem="removeItem"
    :cart="cart"
  />
</template>

<script>
import DesktopNav from './components/DesktopNav.vue';
import men from './assets/men';
import women from './assets/women';
import kids from './assets/kids';
import house from './assets/house';
import data from './assets/data';

export default {
  components: {
    DesktopNav,
  },
  data() {
    return {
      mobileView: true,
      showNav: false,
      cart: {},
      inventory: data,
      menData: men,
      womenData: women,
      kidData: kids,
      houseData: house,
      showSidebar: false,
    };
  },
  computed: {
    totalQuantity() {
      return Object.values(this.cart).reduce((acc, curr) => acc + curr, 0);
    },
  },
  methods: {
    addToCart(name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0;
      this.cart[name] += quantity;
    },
    findpercent(num, number) {
      const dif = number - num;
      return Math.floor((dif * 100) / number);
    },
    getImgUrl(pet) {
      // eslint-disable-next-line import/no-dynamic-require
      return require(`./assets/images/bag/${pet}`);
    },
    getShirtImgUrl(pet) {
      // eslint-disable-next-line import/no-dynamic-require
      return require(`./assets/images/shirt/${pet}`);
    },
    getKidImgUrl(pet) {
      // eslint-disable-next-line import/no-dynamic-require
      return require(`./assets/images/kids/${pet}`);
    },
    getHouseImgUrl(pet) {
      // eslint-disable-next-line import/no-dynamic-require
      return require(`./assets/images/house/${pet}`);
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    removeItem(name) {
      delete this.cart[name];
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
}

body {
  max-width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  max-width: 100%;
  background-color: rgba(0,0,0,.3);
}

.int {
  margin-top: 6rem;
}

</style>
