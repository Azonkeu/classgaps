<template>
  <div id="app">
    <DesktopNav
      :toggleSidebar="toggleSidebar"
      :totalQuantity="totalQuantity"
      :showSidebar="showSidebar"
      :cart="cart"
    />
  </div>
  <router-view
    :inventory="inventory"
    :shirts="shirts"
    :addToCart="addToCart"
    :getImgUrl="getImgUrl"
    :getShirtImgUrl="getShirtImgUrl"
    :getKidImgUrl="getKidImgUrl"
    :getMenImgUrl="getMenImgUrl"
    :getHouseImgUrl="getHouseImgUrl"
    :getWomenImgUrl="getWomenImgUrl"
    :house="house"
    :kids="kids"
    :items="items"
    :shoes="shoes"
    :findpercent="findpercent"
    :datax="datax"
    :removeItem="removeItem"
    :cart="cart"
  />
</template>

<script>
import DesktopNav from './components/DesktopNav.vue';
import data from './assets/data';

export default {
  components: {
    DesktopNav,
  },
  data() {
    return {
      mobileView: true,
      showNav: false,
      datax: data,
      cart: {},
      inventory: data[0],
      shirts: data[1],
      house: data[2],
      kids: data[3],
      items: data[4],
      shoes: data[5],
      showSidebar: false,
    };
  },
  computed: {
    totalQuantity() {
      return Object.values(this.cart).reduce((acc, curr) => acc + curr, 0);
    },
    filtered() {
      return this.datax.filter((dat) => {
        dat.map((da) => da.name.match(this.search));
      });
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
      return require(`./assets/images/bag/${pet}`);
    },
    getShirtImgUrl(pet) {
      return require(`./assets/images/shirt/${pet}`);
    },
    getKidImgUrl(pet) {
      return require(`./assets/images/kids/${pet}`);
    },
    getMenImgUrl(pet) {
      return require(`./assets/images/menshoes/${pet}`);
    },
    getHouseImgUrl(pet) {
      return require(`./assets/images/house/${pet}`);
    },
    getWomenImgUrl(pet) {
      return require(`./assets/images/shoes/${pet}`);
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
