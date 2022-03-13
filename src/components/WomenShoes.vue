<template>
 <div class="card-shirt">
    <div class="card-bodyshirt">
      <div class="card-img">
        <img :src="getWomenImgUrl(women.image)" alt="shirt" class="product-img">
      </div>
      <form class="form">
        <p class="title">{{ women.name }}</p>
        <p class="descript">{{ women.description }}</p>
        <div class="row">
          <p class="cell">${{ women.price.USD }}</p>
          <s class="cell">${{ women.price.NOK }}</s>
          <p class="cell">-{{ findpercent(women.price.USD, women.price.NOK) }}%</p>
        </div>
        <div class="row">
          <p>Quantity:</p>
          <label for="cell">
            <input type="number" v-model.number="quantity">
          </label>
        </div>
        <div class="cell">
          <button @click="addToCart(women.name, quantity)" type="button" class=" btn-light">
            Add to cart
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['women', 'num', 'addToCart', 'getWomenImgUrl', 'findpercent', 'search'],
  data() {
    return {
      quantity: 0,
      mobile: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return this;
      }
      this.mobile = false;
      return this;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-shirt {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  align-items: center;
  padding: 4% 8% 0 8%;
}

.card-bodyshirt {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e4ec;
  width: 100%;
  box-shadow: 0px 5px 8px rgba(0,0,0,.3);
}

.form {
  display: flex;
  background-color: #e5e4ec;
  flex-direction: column;
  width: 100%;
  padding-bottom: 4%;
}

.title {
  font-size: 1.5em;
  font-weight: 600;
}

.row-shirt {
  margin: 1% 0 0 0;
}

.descript {
  text-align: center;
  margin: 2% 0 0 0;
}

.cell {
  text-align: center;
  margin: 2% 0 0 0;
  font-weight: 700;
}

.cell-shirt {
  margin-right: 4%;
}

.row {
  display: flex;
  flex-direction: row;
}

.btn-light {
  padding: 2%;
  width: 60%;
  font-size: 1.01em;
  margin-top: 2%;
  color: #fff;
  border-color: rgb(241, 33, 102);
  background-color: rgb(241, 33, 102);
}
</style>
