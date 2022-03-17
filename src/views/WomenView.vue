<template>
  <main class="wrap-women">
    <h1 class="title">Women Outfits</h1>
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
      <ProductCard
        v-for="(info, index) in searchItems"
        :key="info.id"
        class="card"
        :index="index"
        :info="info"
        :addToCart="addToCart"
        :getImgUrl="getImgUrl"
        :findpercent="findpercent"
      />
    </div>
  </main>
  <footer>
      <FooterBlock />
  </footer>

</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  props: ['women', 'addToCart', 'getWomenImgUrl', 'getImgUrl', 'findpercent'],
  components: {
    ProductCard,
    FooterBlock,
  },
  data() {
    return {
      search: '',
      invent: this.women,
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
.wrap-women {
  display: flex;
  flex-direction: column;
  @media only screen and (min-width:992px) {
    align-items: center;
    max-width: 100%;
  }
}

.title {
  margin-top: 3%;
}

.card-container {
  @media only screen and (min-width:992px) {
    display: grid;
    width: 80%;
    justify-content: center;
    grid-template-columns: 30% 30% 30%;
  }
}
</style>
