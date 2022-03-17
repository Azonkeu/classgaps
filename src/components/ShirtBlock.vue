<template>
  <div class="card-shirt">
    <div class="card-bodyshirt">
      <div class="card-img">
        <img :src="getShirtImgUrl(item.image)" alt="shirt" class="shirt-image">
      </div>
      <form class="form">
        <p class="title">{{ item.name }}</p>
        <p class="descript">{{ item.description }}</p>
        <div class="row margin">
          <p class="cell">${{ item.price.USD }}</p>
          <s class="cell grey">${{ item.price.NOK }}</s>
          <p class="cell col">-{{ findpercent(item.price.USD, item.price.NOK) }}%</p>
        </div>
        <div class="row">
          <p class="quantity">Quantity:</p>
          <label for="cell">
            <input class="input" type="number" v-model="quantity">
          </label>
        </div>
        <div class="cell">
          <button @click="addToCart(item.name, quantity)" type="button" class="btn-light">
            Add to cart
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  props: ['item', 'index', 'addToCart', 'getShirtImgUrl', 'findpercent'],
  data() {
    return {
      quantity: 0,
    };
  },
};
</script>

<style lang="scss">
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
  padding: 0 2% 0 5%;
}

.cell-shirt {
  margin-right: 4%;
}

.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;
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

.col {
  color: rgb(228, 82, 82);
}

.grey {
  color: rgb(149, 144, 144);
}

.margin {
  margin: 2% 0 2% 0;
}

.quantity {
  margin: 0 1% 0 0;
  font-weight: 600;
}

.input {
  width: 80%;
}

</style>
