<template>
  <main class="wrapperc">
    <h1 class="title">Our Products</h1>
    <div class="wrappex">
      <div class="card-container">
        <ShirtBlock
          v-for="(item, ind) in shirts"
          :key="item.id"
          :ind="ind"
          :item="item"
          :addToCart="addToCart"
          :getShirtImgUrl="getShirtImgUrl"
          :findpercent="findpercent"
        />
      </div>
      <div class="card-container">
        <ProductCard
          v-for="(product, index) in inventory"
          :key="product.id"
          :index="index"
          :product="product"
          :addToCart="addToCart"
          :getImgUrl="getImgUrl"
          :findpercent="findpercent"
        />
      </div>
    </div>
  </main>
  <footer>
    <FooterBlock />
  </footer>

</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import ShirtBlock from '@/components/ShirtBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  props: ['inventory', 'shirts', 'addToCart', 'getImgUrl', 'getShirtImgUrl', 'search', 'findpercent'],
  components: {
    ProductCard,
    ShirtBlock,
    FooterBlock,
  },
};
</script>

<style lang="scss">
.wrapper {
  position: relative;
  padding-top: 1rem;
}

.title {
  text-align: center;
  margin: 2% auto 0 auto;
  font-size: 1.6em;
}

.wrappex {
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
</style>
