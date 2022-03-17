<template>
  <main class="wrapperc">
    <h1 class="title">Our Products</h1>
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
        <HomeBlock
          v-for="(homes, inx) in searchProd"
          :key="homes.id"
          class="card"
          :in="inx"
          :homes="homes"
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
import HomeBlock from '@/components/HomeBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  props: ['inventory', 'addToCart', 'getImgUrl', 'findpercent'],
  components: {
    HomeBlock,
    FooterBlock,
  },
  data() {
    return {
      search: '',
      invent: this.inventory,
    };
  },
  computed: {
    searchProd() {
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
.title {
  text-align: center;
  margin: 4% auto 0 auto;
  font-size: 1.6em;
}

.wrapperc {
  display: flex;
  flex-direction: column;
  @media only screen and (min-width:992px) {
    align-items: center;
    max-width: 100%;
    margin: 0;
  }
}
.card-container {
  @media only screen and (min-width:992px) {
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: 30% 30% 30%;
  }
}

.search {
  background-color: #fff;
  margin: 4% 0 0 0;
  border-radius: 30px;
  @media only screen and (min-width:992px) {
    width: 40%;
    border: 1px solid gray;
    background-color: #fff;
    margin: 0 0 0 auto;
    border-radius: 30px;
  }
}

.inp {
  width: 90%;
  padding: 1%;
  border: none;
  margin-left: 2%;
}

</style>
