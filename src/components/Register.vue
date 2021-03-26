<template>
  <div class="login">
    <div class="container">
      <div class="container">
        <div class="login__auth">
          <h2>login</h2>
          <div class="login__auth-form">
            <form action="" id="login">
              <div class="form__group">
                <label for="username">Username or email address</label>
                <div class="form__group-input">
                  <input
                    type="text"
                    id="username"
                    v-model="username"
                    @input="isUser(username)"
                  />
                </div>
                <div class="form__group-explain username"></div>
              </div>
              <div class="form__group">
                <label for="password">Password</label>
                <div class="form__group-input">
                  <input
                    type="password"
                    id="password"
                    v-model="password"
                    @input="isPassword(password)"
                  />
                  <div class="input__eye">
                    <span
                      :class="{ hidden: !this.showPassword }"
                      @click.prevent="togglePassword"
                      ><i class="far fa-eye"></i
                    ></span>
                    <span
                      :class="{ hidden: this.showPassword }"
                      @click.prevent="togglePassword"
                      ><i class="far fa-eye-slash"></i
                    ></span>
                  </div>
                </div>
                <div class="form__group-explain password"></div>
              </div>
              <div class="form__group">
                <label for="re-password">Confirm Password</label>
                <div class="form__group-input">
                  <input
                    type="password"
                    id="re-password"
                    v-model="re_password"
                    @input="isRepeatPassword(re_password)"
                  />
                  <div class="input__eye">
                    <span
                      :class="{ hidden: !this.showRepeatPassword }"
                      @click.prevent="toggleRepeatPassword"
                      ><i class="far fa-eye"></i
                    ></span>
                    <span
                      :class="{ hidden: this.showRepeatPassword }"
                      @click.prevent="toggleRepeatPassword"
                      ><i class="far fa-eye-slash"></i
                    ></span>
                  </div>
                </div>
                <div class="form__group-explain repeatPassword"></div>
              </div>
              <div class="form__group form__functions">
                <div class="form__functions-checkbox">
                  <input type="checkbox" id="remember" />
                  <label for="remember">Remember me</label>
                </div>
                <div class="form__functions-button">
                  <button>Forget your password</button>
                </div>
              </div>
              <div class="form__group form__button">
                <button
                  class="form__button-login"
                  @click.prevent="validLoginForm"
                >
                  register
                </button>
                <router-link :to="{ name: 'login' }">
                  <button class="form__button-create">or login</button>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      showPassword: false,
      showRepeatPassword: false,
      username: "",
      password: "",
      re_password: "",
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
      const passwordElement = this.getElement("#password");
      passwordElement.type == "password"
        ? (passwordElement.type = "text")
        : (passwordElement.type = "password");
    },
    toggleRepeatPassword() {
      this.showRepeatPassword = !this.showRepeatPassword;
      const re_passwordElement = this.getElement("#re-password");
      re_passwordElement.type == "password"
        ? (re_passwordElement.type = "text")
        : (re_passwordElement.type = "password");
    },
    validLoginForm() {
      this.isUser(this.username);
      this.isPassword(this.password);
      this.isRepeatPassword(this.re_password);
      if (this.password !== "" && this.re_password !== "") {
        this.comparePassword(this.password, this.re_password);
      }
    },
    isUser(username) {
      const explain = this.getElement(".form__group-explain.username");
      if (username === "") {
        explain.innerText = "Please input your username!";
      } else {
        explain.innerText = "";
      }
    },
    isPassword(password) {
      const explain = this.getElement(".form__group-explain.password");
      if (password === "") {
        explain.innerText = "Please input your password!";
      } else {
        explain.innerText = "";
      }
    },
    isRepeatPassword(re_password) {
      const explain = this.getElement(".form__group-explain.repeatPassword");
      if (re_password === "") {
        explain.innerText = "Please confirm your password!";
      } else {
        explain.innerText = "";
      }
    },
    comparePassword(password, re_password) {
      const explain = this.getElement(".form__group-explain.repeatPassword");
      if (password !== re_password) {
        explain.innerText = "The two passwords that you entered do not match!";
      } else {
        explain.innerText = "";
      }
    },
    getElement(selector) {
      const element = document.querySelector(selector);
      return element;
    },
  },
};
</script>
