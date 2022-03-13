<template>
  <main class="wrap-women">
    <h1 class="title">Women Outfits</h1>
     <div class="card-container">
      <ProductCard
        v-for="(product, index) in inventory"
        :key="product.id"
        class="card"
        :index="index"
        :product="product"
        :addToCart="addToCart"
        :getImgUrl="getImgUrl"
        :findpercent="findpercent"
      />
    </div>
    <div class="card-container">
      <WomenShoes
        v-for="(women, num) in shoes"
        :key="women.id"
        class="card"
        :num="num"
        :women="women"
        :addToCart="addToCart"
        :getWomenImgUrl="getWomenImgUrl"
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
import WomenShoes from '@/components/WomenShoes.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  props: ['inventory', 'shoes', 'addToCart', 'getWomenImgUrl', 'getImgUrl', 'findpercent', 'search'],
  components: {
    ProductCard,
    WomenShoes,
    FooterBlock,
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
    margin: 0 0 0 2%;
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
