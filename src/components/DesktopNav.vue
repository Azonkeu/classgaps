<template>
  <div class="landing-wrapper">
    <header  class="header" :class="{'scrolled-nav' : scrolledNav}">
      <nav  class="navbar">
        <div class="logo-nav">
          <img src="../assets/images/favicon-32x32.png" class="logo-img" alt="logo">
          <p class="logo-textx">torex</p>
        </div>
        <ul v-show="!mobile" class="navigation">
          <li class="lix"><router-link class="link" to="/">Home</router-link></li>
          <li><router-link class="link" to="/men">Men</router-link></li>
          <li><router-link class="link" to="/women">Women</router-link></li>
          <li><router-link class="link" to="/kids">Kids</router-link></li>
          <li><router-link  class="link" to="/home-&-living">Home & Living</router-link></li>
          <li>
            <button v-show="!mobile" @click="toggle" class="top-bar-cart-link">
              <i class="fa-solid fa-cart-shopping fa-2x" style="color: white"></i>
              <span class="white">Cart ({{ totalQuantity }})</span>
            </button>
          </li>
        </ul>
        <div class="icon">
          <button
            type="button"
            class="button"
            @click="toggleMobileNav"
            v-show="mobile"
            :class="{'icon-active' : mobileNav}"
          >
            <i class="fas fa-bars fa-2x" style="color: white"></i>
          </button>
        </div>
        <transition name="mobile-nav">
          <div>
          <div class="top-bar-cart">
            <button v-if="mobile" @click="toggle" class="top-bar-cart-link">
              <i class="fa-solid fa-cart-shopping fa-2x" style="color: white"></i>
              <span class="white">Cart ({{ totalQuantity }})</span>
            </button>
          </div>
          <ul v-show="mobileNav" class="dropdown-nav" id="dropdown">
            <li class="lin">
              <router-link class="lin" to="/" @click="closeDropdown">
                Home
              </router-link>
            </li>
            <li class="lin">
            <router-link class="lin" to="/men" @click="closeDropdown">Men</router-link></li>
            <li class="lin">
              <router-link class="lin" to="/women" @click="closeDropdown">
                Women
              </router-link>
            </li>
            <li class="lin">
              <router-link class="lin" to="/kids" @click="closeDropdown">
                Kids
              </router-link>
            </li>
            <li class="lin">
              <router-link class="lin" to="/home-&-living" @click="closeDropdown">
                Home & Living
              </router-link>
            </li>
        </ul>
        </div>
        </transition>
      </nav>
    </header>
    <div class="slideset">
    </div>
  </div>
  <SideBar
    :toggle="toggle"
    :cart="cart"
    :inventory="inventory"
    :removeItem="removeItem"
    :showSidebar="showSidebar"
  />
</template>

<script>
import SideBar from './SideBar.vue';

export default {
  props: ['inventory', 'toggle', 'totalQuantity', 'cart', 'removeItem', 'showSidebar'],
  components: {
    SideBar,
  },
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      search: '',
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    closeDropdown() {
      this.mobileNav = !this.mobileNav;
    },
    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return this;
      }
      this.scrolledNav = false;
      return this;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return this;
      }
      this.mobile = false;
      this.mobileNav = false;
      return this;
    },
  },
};

</script>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

.landing-wrapper {
  height: 100%;
}

header {
  z-index: 99;
  width: 100%;
  transition: .5s ease all;
  background-color: #f44f78;
  position: fixed;
  display: flex;
  align-items: center;
  height: 3.8rem;

  .navbar {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 90%;
    padding: 12px 0;
    margin: 0 auto;
    transition: .5s ease all;
    @media(min-width: 1140px){
      max-width: 1140px;
    }

    ul,
    .link {
      font-weight: 500;
      list-style: none;
      text-decoration: none;
      color: #fff;
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    li {
      margin-left: 5%;
    }

    .link {
      font-size: 1.1em;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover {
        border-color: blue;
        color: blue;
      }
    }

    .icon {
      display: flex;
      position: absolute;
      top: 0;
      align-items: center;
      right: 5px;
      height: 100%;
      width: 15%;

      .button {
        background-color: #f44f78;
        width: 100%;
        border: none;

        i {
          cursor: pointer;
          font-size: 35px;
          transition: 0.8s ease all;
          background-color: #fff;
        }
      }
    }

    .icon-active {
      transform: rotate(180deg);
    }

    .navigation {
      display: flex;
      align-items: center;
      flex: 1;
      //justify-content: flex-end;
    }

    .dropdown-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      background-color: #f44f78;
      align-items: flex-start;
      justify-content: flex-start;
      padding-top: 5%;
      padding-left: 5%;
      width: 70%;
      height: 100%;
      top: 0;
      right: 0;
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: 1s ease all;
    }

    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transition: translateX(-250px);
    }

    .mobile-nav-enter-to {
      transition: translateX(0);
    }
  }
}

.close {
  display: none;
}

.scrolled-nav {
  background-color: #ed5f5f;
  nav {
    padding: 8px 0;
  }
}

.slideset {
  background: url('../assets/images/back/shop.png');
  background-size: cover;
  height: 28rem;
  max-width: 100%;
  box-shadow: 0px 5px 8px rgba(0,0,0,.3);
  animation: animate 60s infinite;
  @media only screen and (min-width:992px) {
    height: 32rem;
  }
}

@keyframes animate {
  35%{
    background-size: cover;
    background: url('../assets/images/background/redx.png');
    @media only screen and (min-width:992px) {
      background-size: cover;
      background: url('../assets/images/background/redx.png');
      background-repeat: no-repeat;
    }
  }

  55%{
    background-size: cover;
    background: url('../assets/images/background/black.png');
    @media only screen and (min-width:992px) {
      background-size: cover;
      background: url('../assets/images/background/black.png');
      background-repeat: no-repeat;
    }
   }

   80%{
    background-size: cover;
    background: url('../assets/images/background/manx.png');
    @media only screen and (min-width:992px) {
      background: url('../assets/images/background/manx.png');
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
}

.top-bar-cart-link {
  background-color: transparent;
  border-color: transparent;
}

.white {
  color: #fff;
  font-size: 1.2em;
}

.top-bar-cart {
  display: flex;
  justify-content: flex-end;
  margin-left: 15%;
  width: 100%;
}

.logo-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 32%;
  margin-right: 6%;
}

.logo-textx {
  color: #ffff55;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
}

.lin {
  margin-top: 6%;
  color: #fff;
  font-size: 1.1em;
}

.lin:hover {
  text-decoration: underline;
  color: blue;
}

.lix {
  margin-left: 9%;
}

</style>
