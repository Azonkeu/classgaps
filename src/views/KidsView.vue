<template>
  <main class="wrapex">
    <h1 class="title">Kids Outfits</h1>
    <div class="card-container">
      <KidsProduct
        v-for="(kid, indx) in kids"
        :key="kid.id"
        class="card"
        :indx="indx"
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
  props: ['kids', 'addToCart', 'getKidImgUrl', 'findpercent', 'search'],
  components: {
    KidsProduct,
    FooterBlock,
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
