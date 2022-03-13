<template>
  <main class="wrap">
    <h1 class="title">House Furniture</h1>
    <div class="card-container">
      <HouseProduct
        v-for="(housing, inx) in house"
        :key="housing.id"
        class="card"
        :in="inx"
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
  props: ['house', 'addToCart', 'getHouseImgUrl', 'findpercent', 'search'],
  components: {
    HouseProduct,
    FooterBlock,
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
