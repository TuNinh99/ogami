<template>
  <div class="cart">
    <div class="cart__container container">
      <breadcumbs />
      <step-block />
      <div class="cart__container-table" v-if="this.cart.length !== 0">
        <table>
          <colgroup>
            <col style="width: 9.375em" />
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
            <col style="width: 20%" />
          </colgroup>
          <thead>
            <tr>
              <th>image</th>
              <th>product name</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
              <th>
                <button class="remove__btn" @click.prevent="removeAllCart">
                  <i class="fas fa-times"></i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in Object.values(this.cart)" :key="index">
              <td class="table__img">
                <div class="table__img-wraper">
                  <img :src="item.image" alt="" />
                </div>
              </td>
              <td class="table__name">{{ item.name }}</td>
              <td class="table__price">
                <span>{{ item.price }}</span> US$
              </td>
              <td class="table__quantity">
                <div class="table__quantity-selector">
                  <div class="selector__number">{{ item.quantity }}</div>
                  <div class="selector__controller">
                    <button
                      :class="{
                        'selector__controller-minus': true,
                        show: item.quantity <= 1 ? true : false,
                      }"
                      :disabled="item.quantity <= 1 ? true : false"
                      @click.prevent="item.quantity--"
                    >
                      -
                    </button>
                    <button
                      class="selector__controller-plus"
                      @click.prevent="item.quantity++"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
              <td class="table__total">
                <span>{{ (item.price * item.quantity).toFixed(2) }}</span> US$
              </td>
              <td class="table__remove">
                <button class="remove__btn" @click.prevent="removeItem(index)">
                  <i class="fas fa-times"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cart__container-footer" v-if="this.cart.length !== 0">
        <div class="footer__coupon">
          <input type="text" placeholder="Coupo Code" />
          <button>apply coupon</button>
        </div>
        <div class="footer__update">
          <button class="footer__update-btn" @click.prevent="updateQuantity">
            update cart
          </button>
        </div>
      </div>
      <div class="cart__container-total" v-if="this.cart.length !== 0">
        <h5>cart total</h5>
        <table>
          <tbody>
            <tr>
              <th>subtotal</th>
              <td>{{ this.$store.state.totalPay }} US$</td>
            </tr>
            <tr>
              <th>shipping</th>
              <td>Free shipping</td>
            </tr>
            <tr class="total">
              <th>total</th>
              <td>{{ this.$store.state.totalPay }} US$</td>
            </tr>
          </tbody>
        </table>
        <router-link :to="{ name: 'checkout' }"
          ><button>Proceed to Checkout</button></router-link
        >
      </div>
      <div class="cart__container-nothing" v-else>
        <i class="far fa-list-alt"></i>
        <h6>Nothing in your cart</h6>
      </div>
    </div>
    <div :class="{ model: true, enable: this.stateNotify }">
      <div class="notify">
        <p>{{ this.contentNotify }}</p>
        <div class="notify__close" @click.prevent="cancelNotify">
          <i class="fas fa-times"></i>
        </div>
        <div class="notify__button">
          <button class="notify__button-cancel" @click.prevent="cancelNotify">
            Cancel
          </button>
          <button class="notify__button-ok" @click.prevent="removeItemCart">
            OK
          </button>
        </div>
      </div>
    </div>
    <div
      :class="{ layer: true, enable: this.stateNotify }"
      @click.prevent="cancelNotify"
    ></div>
  </div>
</template>

<script>
import Breadcumbs from "@/components/Breadcumbs.vue";
import StepBlock from "@/components/StepBlock.vue";
export default {
  components: { Breadcumbs, StepBlock },
  data() {
    return {
      cart: null,
      quantity: null,
      total: [],
      stateNotify: false,
      contentNotify: null,
      indexItemRemove: null,
    };
  },
  name: "the-cart",
  methods: {
    removeAllCart() {
      this.contentNotify = "Are you sure to all products from cart";
      this.indexItemRemove = null;

      this.stateNotify = !this.stateNotify;
      this.manipulateClass("add", "body", "fixed");
    },
    removeItem(index) {
      this.contentNotify = "Are you sure to remove this product from cart";
      this.indexItemRemove = index;

      this.stateNotify = !this.stateNotify;
      this.manipulateClass("add", "body", "fixed");
    },
    cancelNotify() {
      this.manipulateClass("remove", "body", "fixed");
      this.stateNotify = !this.stateNotify;
    },
    removeItemCart() {
      this.manipulateClass("remove", "body", "fixed");
      this.stateNotify = !this.stateNotify;

      if (this.indexItemRemove === null) {
        this.cart.length = 0;
        localStorage.setItem("cart", JSON.stringify(this.cart));
        this.$store.state.totalPay = 0;
      } else {
        this.cart.splice(this.indexItemRemove, 1);
        localStorage.setItem("cart", JSON.stringify(this.cart));
        this.$store.state.amount = this.cart.length;
        this.caculateTotal(this.cart);
      }
    },
    updateQuantity() {
      const quantities = [];
      const cart = Object.values(this.cart);
      const quantityElements = document.querySelectorAll(".selector__number");
      for (let i = 0; i < quantityElements.length; i++) {
        quantities.push(Number(quantityElements[i].innerText));
      }
      quantities.map((quantity, index) => {
        if (cart[index].quantity !== quantity) {
          cart[index].quantity = quantity;
        }
      });
      this.caculateTotal(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    caculateTotal(listProducts) {
      const total = listProducts.reduce((total, item) => {
        total = total + Number(item.quantity) * Number(item.price);
        return total;
      }, 0);
      this.$store.state.totalPay = total.toFixed(2);
    },
    manipulateClass(mode, selector, manipulateClass) {
      const element = document.querySelector(selector);
      if (mode === "add") {
        element.classList.add(manipulateClass);
      } else {
        element.classList.remove(manipulateClass);
      }
    },
  },
  created() {
    this.$store.state.stepActive == 0;

    this.cart = JSON.parse(localStorage.getItem("cart"));
  },
};
</script>
