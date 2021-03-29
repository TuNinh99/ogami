<template>
  <div class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-left">
          <div class="left__emai">
            <i class="fas fa-envelope"></i>
            info.deercreative@gmail.com
          </div>
          <div class="left__phone">
            <i class="fas fa-phone-alt"></i>
            +65 11.188.888
          </div>
        </div>
        <ul class="header__top-right">
          <li class="right__network">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
          </li>
          <li class="right__languages">
            <div
              :class="{ 'right__languages-select': true, opacity: this.toggle }"
              @click.prevent="this.toggle = !this.toggle"
            >
              <div
                :class="{
                  select__country: true,
                }"
              >
                <img :src="this.image" alt="" />
                <span>{{ country }}</span>
                <i class="fas fa-angle-down"></i>
              </div>
            </div>
            <ul
              :class="{
                'right__languages-dropdown': true,
                active: this.toggle,
              }"
            >
              <li class="dropdown__item" @click.prevent="select">
                <img :src="this.flags.English" alt="" />
                <span :class="{ selected: !this.selectLanguage.english }"
                  >English</span
                >
              </li>
              <li class="dropdown__item" @click.prevent="select">
                <img :src="this.flags.Japan" alt="" />
                <span :class="{ selected: !this.selectLanguage.japan }"
                  >Japan</span
                >
              </li>
              <li class="dropdown__item" @click.prevent="select">
                <img :src="this.flags.Vietnam" alt="" />
                <span :class="{ selected: !this.selectLanguage.vietnam }"
                  >Vietnam</span
                >
              </li>
            </ul>
          </li>
          <li class="right_login">
            <router-link :to="{ name: 'login' }">
              <i class="el-icon-user"></i>
              <span>Login</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="header__menu">
      <div class="container">
        <div class="header__nav">
          <router-link to="/" class="header__nav-logo">
            <img
              src="https://user-images.githubusercontent.com/66562512/110656983-0bcdba00-81f3-11eb-98eb-58bb16972ac6.png"
              alt=""
            />
          </router-link>
          <div class="header__nav-navbar">
            <router-link to="/" class="navbar__item" active-class="active" exact
              >home</router-link
            >
            <router-link
              :to="{ name: 'foods' }"
              class="navbar__item"
              active-class="active"
              >shop</router-link
            >
            <router-link
              :to="{ name: 'services' }"
              class="navbar__item"
              active-class="active"
              >Services</router-link
            >
            <router-link
              :to="{ name: 'about' }"
              class="navbar__item"
              active-class="active"
              >About us</router-link
            >
            <router-link
              :to="{ name: 'contact' }"
              class="navbar__item"
              active-class="active"
              >Contact us</router-link
            >
          </div>

          <div class="header__nav-function">
            <router-link :to="{ name: 'wish-list' }" class="function__item">
              <i class="far fa-heart"></i>
              <div class="function__item-number wish-list">
                <span>{{ this.$store.state.amountWishlist }}</span>
              </div>
            </router-link>
            <router-link :to="{ name: 'cart' }" class="function__item">
              <i class="el-icon-shopping-cart-2" style="font-weight: 600"></i>
              <div class="function__item-number">
                <span>{{ this.$store.state.amount }}</span>
              </div>
              <span class="function__item-total"
                >{{ this.$store.state.totalPay }} US$</span
              >
            </router-link>
          </div>
          <div class="header__nav-icon" @click.prevent="showMenuMobile">
            <i class="fas fa-bars"></i>
          </div>
          <div class="header__nav-mobile">
            <div class="mobile__top">
              <div class="mobile__top-logo">
                <img
                  src="https://user-images.githubusercontent.com/66562512/110656983-0bcdba00-81f3-11eb-98eb-58bb16972ac6.png"
                  alt=""
                />
              </div>
              <div class="mobile__top-close" @click.prevent="closeMenuMobile">
                <i class="el-icon-close"></i>
              </div>
            </div>
            <ul class="mobile__nav">
              <li @click.prevent="closeMenuMobile">
                <router-link
                  to="/"
                  class="mobile__nav-item"
                  active-class="active"
                  exact
                  >home</router-link
                >
              </li>
              <li @click.prevent="closeMenuMobile">
                <router-link
                  :to="{ name: 'foods' }"
                  class="mobile__nav-item"
                  active-class="active"
                  >shop</router-link
                >
              </li>
              <li @click.prevent="closeMenuMobile">
                <router-link
                  :to="{ name: 'services' }"
                  class="mobile__nav-item"
                  active-class="active"
                  >Services</router-link
                >
              </li>
              <li @click.prevent="closeMenuMobile">
                <router-link
                  :to="{ name: 'about' }"
                  class="mobile__nav-item"
                  active-class="active"
                  >About us</router-link
                >
              </li>
              <li @click.prevent="closeMenuMobile">
                <router-link
                  :to="{ name: 'contact' }"
                  class="mobile__nav-item"
                  active-class="active"
                  >Contact us</router-link
                >
              </li>
              <li @click.prevent="closeMenuMobile">
                <router-link
                  :to="{ name: 'login' }"
                  class="mobile__nav-item"
                  active-class="active"
                  >Login</router-link
                >
              </li>
              <li @click.prevent="closeMenuMobile">
                <router-link
                  :to="{ name: 'register' }"
                  class="mobile__nav-item"
                  active-class="active"
                  >Register</router-link
                >
              </li>
              <li @click.prevent="closeMenuMobile">
                <a
                  :to="{ name: 'login' }"
                  class="mobile__nav-item"
                  style="border: none"
                  >Logout</a
                >
              </li>
            </ul>
          </div>
          <div
            class="header__nav-layout"
            @click.prevent="closeMenuMobile"
          ></div>
        </div>
        <div class="header__function">
          <div class="header__function-departments">
            <div
              class="departments__heading"
              @click.prevent="
                this.$store.state.toggle_departments = !this.$store.state
                  .toggle_departments
              "
            >
              <i class="fas fa-bars"></i>
              <span>all departments</span>
              <i class="fas fa-angle-down"></i>
            </div>
            <department />
          </div>
          <div class="header__function-categories">
            <span class="categories__select">
              <div
                class="categories__select-heading"
                @click.prevent="
                  this.toggle_categories = !this.toggle_categories
                "
              >
                <div class="heading__text">{{ this.value_category }}</div>
                <i class="fas fa-angle-down"></i>
              </div>
              <ul
                :class="{
                  'categories__select-dropdown': true,
                  show: this.toggle_categories,
                }"
              >
                <li
                  class="dropdown__item"
                  @click.prevent="handleGetValueCategory"
                >
                  all categories
                </li>
                <li
                  class="dropdown__item"
                  @click.prevent="handleGetValueCategory"
                >
                  bread
                </li>
                <li
                  class="dropdown__item"
                  @click.prevent="handleGetValueCategory"
                >
                  fresh meat
                </li>
                <li
                  class="dropdown__item"
                  @click.prevent="handleGetValueCategory"
                >
                  ocean foods
                </li>
                <li
                  class="dropdown__item"
                  @click.prevent="handleGetValueCategory"
                >
                  oranges
                </li>
                <li
                  class="dropdown__item"
                  @click.prevent="handleGetValueCategory"
                >
                  organic drinks
                </li>
                <li
                  class="dropdown__item"
                  style="border: none"
                  @click.prevent="handleGetValueCategory"
                >
                  vegetables
                </li>
              </ul>
            </span>

            <input type="search" name="search" placeholder="What do you nead" />
            <button class="categories__search-btn">search</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Department from "./Department.vue";
export default {
  components: { Department },
  name: "the-header",
  data() {
    return {
      toggle: false,
      country: "English",
      image:
        "https://user-images.githubusercontent.com/66562512/110658313-29e7ea00-81f4-11eb-8d21-711f1d52b564.png",
      flags: {
        English:
          "https://user-images.githubusercontent.com/66562512/110658313-29e7ea00-81f4-11eb-8d21-711f1d52b564.png",
        Japan:
          "https://user-images.githubusercontent.com/66562512/110658305-28b6bd00-81f4-11eb-9d17-911c096a1dbf.png",
        Vietnam:
          "https://user-images.githubusercontent.com/66562512/110658315-2a808080-81f4-11eb-9e55-3429c0a595f6.png",
      },
      selectLanguage: {
        english: false,
        japan: true,
        vietnam: true,
      },
      toggle_categories: false,
      value_category: "all categories",
    };
  },
  methods: {
    select(e) {
      this.el = e.path[1].lastChild;
      this.country = this.el.innerText;
      this.hiddenAll();
      if (this.country === "English") {
        this.image = this.flags.English;
        this.selectLanguage.english = false;
      } else {
        if (this.country === "Japan") {
          this.image = this.flags.Japan;
          this.selectLanguage.japan = false;
        } else {
          this.image = this.flags.Vietnam;
          this.selectLanguage.vietnam = false;
        }
      }
    },
    hiddenAll() {
      this.selectLanguage.english = true;
      this.selectLanguage.japan = true;
      this.selectLanguage.vietnam = true;
      this.toggle = !this.toggle;
    },
    handleGetValueCategory(e) {
      this.value_category = e.target.innerText;
      this.toggle_categories = !this.toggle_categories;
    },
    manipulateDOM(selector, mode, className) {
      const element = document.querySelector(selector);
      if (mode !== "" && className !== "") {
        mode === "add"
          ? element.classList.add(className)
          : element.classList.remove(className);
      } else {
        return element;
      }
    },
    showMenuMobile() {
      const menuMobile = document.querySelector(".header__nav-mobile");
      const headerMenu = document.querySelector(".header__menu");
      const body = document.querySelector("body");
      const layout = document.querySelector(".header__nav-layout");
      const options = document.querySelector(".options");
      menuMobile.classList.add("show");
      body.classList.add("body__transform");
      layout.classList.add("fixed");
      options.classList.add("hidden");
      headerMenu.classList.remove("fixed");
      this.$emit("toggleLayer");
    },
    closeMenuMobile() {
      const menuMobile = document.querySelector(".header__nav-mobile");
      const headerMenu = document.querySelector(".header__menu");
      const body = document.querySelector("body");
      const layout = document.querySelector(".header__nav-layout");
      const options = document.querySelector(".options");
      menuMobile.classList.remove("show");
      body.classList.remove("body__transform");
      layout.classList.remove("fixed");
      options.classList.remove("hidden");
      headerMenu.classList.add("fixed");
      this.$emit("toggleLayer");
    },
  },
  created() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    this.$store.state.amount = cart.length;
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        this.manipulateDOM(".header__top", "add", "hidden");
        this.manipulateDOM(".header__function", "add", "hidden");
        this.manipulateDOM(".header__menu", "add", "fixed");
      } else {
        this.manipulateDOM(".header__top", "remove", "hidden");
        this.manipulateDOM(".header__function", "remove", "hidden");
        this.manipulateDOM(".header__menu", "remove", "fixed");
      }
    });
  },
};
</script>
