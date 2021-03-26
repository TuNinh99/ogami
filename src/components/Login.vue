<template>
  <div class="login">
    <div class="container">
      <div class="login__auth">
        <h2>login</h2>
        <div class="login__auth-form">
          <form action="" id="login">
            <div class="form__group">
              <label for="username">Username or email address</label>
              <div class="form__group-input">
                <input type="text" id="username" v-model="username" @input="isUser(username)"/>
              </div>
              <div class="form__group-explain username"></div>
            </div>
            <div class="form__group">
              <label for="password">Password</label>
              <div class="form__group-input">
                <input type="password" id="password" v-model="password"                   @input="isPassword(password)"/>
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
              <button class="form__button-login" @click.prevent="validLoginForm">sign in</button>
              <router-link :to="{name: 'register'}">
                  <button class="form__button-create">or create an account</button>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      showPassword: false,
      username: "",
      password: "",
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
    validLoginForm() {
        this.isUser(this.username);
        this.isPassword(this.password);
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
    getElement(selector) {
      const element = document.querySelector(selector);
      return element;
    },
  },
};
</script>
