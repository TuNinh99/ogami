<template>
  <div class="checkout">
    <div class="container">
      <breadcumbs />
      <div class="checkout__top">
        <step-block />
      </div>
      <div class="checkout__content">
        <div class="checkout__content-billing">
          <div class="billing__form">
            <h3>Billing details</h3>
            <form action="" id="checkout-form">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="billing__form-group">
                    <label for="checkout-firstname" class="Obligatory"
                      >First name</label
                    >
                    <input
                      type="text"
                      id="checout-firstname"
                      placeholder="Your firstname..."
                      v-model="firstName"
                      @input="isFirstName(firstName)"
                    />
                    <div class="group__explain first-name"></div>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="billing__form-group">
                    <label for="checkout-lastname" class="Obligatory"
                      >Last name</label
                    >
                    <input
                      type="text"
                      id="checout-lastname"
                      placeholder="Your lastname..."
                      v-model="lastName"
                      @input="isLastName(lastName)"
                    />
                    <div class="group__explain last-name"></div>
                  </div>
                </div>
              </div>
              <div class="billing__form-group">
                <label for="checkout-company">Company name (optional)</label>
                <input
                  type="text"
                  id="checkout-company"
                  placeholder="Your company..."
                />
              </div>
              <div class="billing__form-group">
                <label for="checkout-address" class="Obligatory"
                  >Street address</label
                >
                <input
                  type="text"
                  id="checkout-address"
                  placeholder="Your address..."
                  v-model="address"
                  @input="isAddress(address)"
                />
                <div class="group__explain address"></div>
              </div>
              <div class="billing__form-group">
                <label for="checkout-town">Town / City(optional)</label>
                <input
                  type="text"
                  id="checkout-town"
                  placeholder="Your town / city..."
                />
              </div>
              <div class="billing__form-group">
                <label for="checkout-phone" class="Obligatory">Phone</label>
                <input
                  type="phone"
                  id="checkout-phone"
                  placeholder="Your phone..."
                  name="phone"
                  v-model="phone"
                  @input="isPhone(phone)"
                />
                <div class="group__explain phone"></div>
              </div>
              <div class="billing__form-group">
                <label for="checkout-email" class="Obligatory"
                  >Email address</label
                >
                <input
                  type="email"
                  id="checkout-email"
                  placeholder="Your email..."
                  name="email"
                  v-model="email"
                  @input="isEmail(email)"
                />
                <div class="group__explain email"></div>
              </div>
              <div class="billing__form-group">
                <label for="checkout-notes">Order notes (optional)</label>
                <textarea
                  type="notes"
                  id="checkout-notes"
                  placeholder="Your notes..."
                />
              </div>
            </form>
          </div>
        </div>
        <div class="checkout__content-order">
          <h3>Your order</h3>
          <table>
            <tbody>
              <tr v-for="(item, index) in this.cart" :key="index">
                <th class="order__name">
                  {{ item.name }} <span>x</span> {{ item.quantity }}
                </th>
                <td>
                  {{ (Number(item.price) * Number(item.quantity)).toFixed(2) }}
                  US$
                </td>
              </tr>
              <tr>
                <th>subtotal</th>
                <td>{{ this.$store.state.totalPay }} US$</td>
              </tr>
              <tr>
                <th>shipping</th>
                <td>Free shipping</td>
              </tr>
              <tr>
                <th>total</th>
                <td class="order__total">
                  {{ this.$store.state.totalPay }} US$
                </td>
              </tr>
            </tbody>
          </table>
          <div class="order__footer">
            <div class="order__footer-radio">
              <div class="radio__group">
                <input type="radio" id="cash" name="order" value="0" checked />
                <label for="cash">Cash on delivery</label>
              </div>
              <br />
              <div class="radio__group">
                <input type="radio" id="paypal" name="order" value="1" />
                <label for="paypal">Paypal</label>
              </div>
              <br />
            </div>
            <button @click.prevent="validateBillingForm">place order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepBlock from "@/components/StepBlock.vue";
import Breadcumbs from "@/components/Breadcumbs.vue";
export default {
  components: { StepBlock, Breadcumbs },
  name: "checkout",
  data() {
    return {
      cart: null,
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    validateBillingForm() {
      this.isFirstName(this.firstName);
      this.isLastName(this.lastName);
      this.isAddress(this.address);
      this.isPhone(this.phone);
      this.isEmail(this.email);
      const explains = document.querySelectorAll(".group__explain");
      let checkValue = 0;
      for (let i = 0; i < explains.length; i++) {
        if (explains[i].innerText === "") {
          checkValue++;
        }
      }
      if (checkValue === explains.length) {
        this.$router.push({ name: "completed" });
        this.notify("Ordered successfully!");
      }
    },
    isFirstName(firstName) {
      const explain = this.getElement(".first-name");
      if (firstName === "") {
        explain.innerText = "Please input your first name!";
      } else {
        explain.innerText = "";
      }
    },
    isLastName(lastName) {
      const explain = this.getElement(".last-name");
      if (lastName === "") {
        explain.innerText = "Please input your last name!";
      } else {
        explain.innerText = "";
      }
    },
    isAddress(address) {
      const explain = this.getElement(".address");

      if (address === "") {
        explain.innerText = "Please input your street address!";
      } else {
        explain.innerText = "";
      }
    },
    isPhone(phone) {
      const explain = this.getElement(".phone");
      if (phone === "") {
        explain.innerText = "Please input your phone!";
      } else {
        const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (phone.match(phoneno)) {
          explain.innerText = "";
        } else {
          explain.innerText = "Your phone number is not valid!";
        }
      }
    },
    isEmail(email) {
      const explain = this.getElement(".email");
      if (email === "") {
        explain.innerText = "Please input your email address!";
      } else {
        const val1 = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        const val2 = /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/;
        if (val1.test(email) || val2.test(email)) {
          explain.innerText = "";
        } else {
          explain.innerText = "Your email number is not valid!";
        }
      }
    },
    notify(message) {
      this.$store.state.message = message;
      this.$store.state.showMessage = !this.$store.state.showMessage;
      setTimeout(() => {
        this.$store.state.showMessage = !this.$store.state.showMessage;
      }, 3000);
    },
    getElement(selector) {
      const element = document.querySelector(selector);
      return element;
    },
  },
  created() {
    this.$store.state.stepActive = 1;
    this.cart = JSON.parse(localStorage.getItem("cart"));
  },
};
</script>

