<template>
  <main class="wrap-menx">
    <h1 class="title">Men Outfits</h1>
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
    <div class="men-cards">
      <ShirtBlock
        v-for="(item, index) in searchItems"
        :key="item.id"
        class="card"
        :index="index"
        :item="item"
        :addToCart="addToCart"
        :getShirtImgUrl="getShirtImgUrl"
        :findpercent="findpercent"
      />
    </div>
  </main>
  <footer>
    <FooterBlock />
  </footer>

</template>

<script>
import ShirtBlock from '@/components/ShirtBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  props: ['men', 'addToCart', 'getShirtImgUrl', 'findpercent'],
  components: {
    ShirtBlock,
    FooterBlock,
  },
  data() {
    return {
      search: '',
      invent: this.men,
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
.wrap-menx {
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

.men-cards {
  @media only screen and (min-width:992px) {
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: 30% 30% 30%;
  }
}
</style>
