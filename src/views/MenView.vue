<template>
  <main class="wrap-menx">
    <h1 class="title">Men Outfits</h1>
    <div class="men-cards">
      <ShirtBlock
        v-for="(item, ind) in shirts"
        :key="item.id"
        class="card"
        :ind="ind"
        :item="item"
        :addToCart="addToCart"
        :getShirtImgUrl="getShirtImgUrl"
        :findpercent="findpercent"
      />
    </div>
    <div class="men-cards">
      <MenShoes
        v-for="(menshoe, enshoe) in items"
        :key="menshoe.id"
        class="men"
        :enshoe="enshoe"
        :menshoe="menshoe"
        :addToCart="addToCart"
        :getMenImgUrl="getMenImgUrl"
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
import MenShoes from '@/components/MenShoes.vue';
import FooterBlock from '@/components/FooterBlock.vue';

export default {
  props: ['items', 'shirts', 'addToCart', 'getMenImgUrl', 'getShirtImgUrl', 'findpercent', 'search'],
  components: {
    ShirtBlock,
    MenShoes,
    FooterBlock,
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
    margin: 0 0 0 2%;
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
