<template>
  <main class="wrapex">
    <h1 class="title">Kids Outfits</h1>
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
      <KidsProduct
        v-for="(kid, index) in searchItems"
        :key="kid.id"
        class="card"
        :index="index"
        :kid="kid"
        :addToCart="addToCart"
        :getKidImgUrl="getKidImgUrl"
        :findpercent="findpercent"
      />
    </div>
  </main>
  <footer>
    <FooterBlock />
  </footer>
</template>

<script>
import KidsProduct from '@/components/KidsProduct.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  props: ['kids', 'addToCart', 'getKidImgUrl', 'findpercent'],
  components: {
    KidsProduct,
    FooterBlock,
  },
  data() {
    return {
      search: '',
      invent: this.kids,
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
.wrapex {
  display: flex;
  flex-direction: column;
  @media only screen and (min-width:992px) {
    align-items: center;
    width: 100%;
  }
}

.title {
  font-size: 1.5em;
  font-weight: 600;
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
