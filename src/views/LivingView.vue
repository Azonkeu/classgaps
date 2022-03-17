<template>
  <main class="wrap">
    <h1 class="title">House Furniture</h1>
    <div class="search">
      <label for="search">
        <input
          class="inp"
          type="text"
          v-model="search"
          placeholder="Search..."
        >
      </label>
      <i class="fa-solid fa-magnifying-glass" style="color: gray"></i>
    </div>
    <div class="card-container">
      <HouseProduct
        v-for="(housing, index) in searchItems"
        :key="housing.id"
        class="card"
        :index="index"
        :housing="housing"
        :addToCart="addToCart"
        :getHouseImgUrl="getHouseImgUrl"
        :findpercent="findpercent"
      />
    </div>
  </main>
  <footer>
    <FooterBlock />
  </footer>

</template>

<script>
import HouseProduct from '@/components/HouseProduct.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  props: ['houses', 'addToCart', 'getHouseImgUrl', 'findpercent'],
  components: {
    HouseProduct,
    FooterBlock,
  },
  data() {
    return {
      search: '',
      invent: this.houses,
    };
  },
  computed: {
    searchItems() {
      let arr = [];
      if (this.search !== '') {
        arr = this.invent.filter((p) => p.name.toLowerCase().includes(this.search.toLowerCase())
          || p.category.toLowerCase().includes(this.search.toLowerCase())
          || p.price.USD === Number(this.search));
      } else {
        arr = this.invent;
      }
      return arr;
    },
  },
};
</script>

<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  @media only screen and (min-width:992px) {
    align-items: center;
    max-width: 100%;
    margin: 0;
  }
}

.title {
  margin-top: 3%;
}

.card-container {
  @media only screen and (min-width:992px) {
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: 30% 30% 30%;
  }
}
</style>
