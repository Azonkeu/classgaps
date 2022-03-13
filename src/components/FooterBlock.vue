<template>
  <footer class="footer">
    <div class="link-block">
      <div class="block">
        <p class="overview">ONLINE SHOPPING</p>
        <ul class="footer-ul">
          <li><router-link class="link" to="/">Home</router-link></li>
          <li><router-link class="link" to="/men">Men</router-link></li>
          <li><router-link class="link" to="/women">Women</router-link></li>
          <li><router-link class="link" to="/kids">Kids</router-link></li>
          <li><router-link  class="link" to="/home-&-living">Home & Living</router-link></li>
        </ul>
      </div>
      <div class="block-two">
        <p class="overview">USEFULL LINKS</p>
        <ul class="footer-ul">
          <li><a class="link" href="#">Contact</a></li>
          <li><a class="link" href="#">FAQ</a></li>
          <li><a class="link" href="#">Shipping</a></li>
          <li><a class="link" href="#">Cancellation</a></li>
          <li><a  class="link" href="#">Terms Of Use</a></li>
        </ul>
      </div>
     </div>
     <div class="icons-class">
       <i class="fa-brands fa-github mag fa-1x" style="color: white"></i>
       <i class="fa-brands fa-linkedin-in mag fa-1x" style="color: white"></i>
       <i class="fa-solid fa-envelope fa-1x mag" style="color: white"></i>
     </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  background-color: #f44f78;
  padding: 5%;
  margin: 7% 0 0 0;
}

.overview {
  text-decoration: underline;
  color: #fff;
  margin-bottom: 5%;
}

li {
  list-style: none;
}

.link {
  color: #fff;
  font-size: 1.1em;
}

.link-block {
  display: flex;
  flex-direction: row;
  margin-left: 2%;
  @media only screen and (min-width:992px) {
    margin-left: 8%;
  }
}

.block-two {
  margin-left: 5%;
  @media only screen and (min-width:992px) {
    margin-left: 14%;
  }
}
.icons-class {
  display: flex;
  flex-direction: row;
  margin: 2% 0 0 2%;
   @media only screen and (min-width:992px) {
    margin: 3% 0 0 9%;
  }
}

.mag {
  margin-right: 3%;
}
</style>
