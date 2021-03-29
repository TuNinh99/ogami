<template>
  <div class="contact">
    <the-header/>
    <div class="container">
      <div class="contact__breadcumbs">
        <breadcumbs />
      </div>
      <div class="contact__content">
        <div class="contact__content-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14889.841659863629!2d105.72807128730793!3d21.09420274527309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455767245ab9b%3A0x4aa0f318120eec65!2zVGjGsOG7o25nIEPDoXQsIELhuq9jIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1616489917978!5m2!1svi!2s"
            width="100%"
            height="600"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div class="contact__content-methods">
          <div class="row">
            <div class="col-12 col-sm-4 none-padding">
              <div class="methods__item">
                <i class="el-icon-location-outline"></i>
                <p>60-49 Road 11378</p>
                <p class="methods__item-bottom">New York</p>
              </div>
            </div>
            <div class="col-12 col-sm-4 none-padding">
              <div class="methods__item">
                <i class="el-icon-message"></i>
                <p><span>Phone:</span> 0123456789</p>
                <p class="methods__item-bottom">
                  <span>Mail:</span> info.deercreative@gmail.com
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-4 none-padding">
              <div class="methods__item">
                <i class="el-icon-time"></i>
                <p><span>Week Days: </span>10:00 – 22:00</p>
                <p class="methods__item-bottom"><span>Sunday: </span>Close</p>
              </div>
            </div>
          </div>
        </div>
        <div class="contact__content-form">
          <h3>Leave Message</h3>
          <p>Our staff will call back later and answer your questions.</p>
          <form action="" id="review">
            <div class="wraper">
              <div class="form__group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  v-model="name"
                  @input="isName(name)"
                />
                <div class="form__group-explain name"></div>
              </div>
              <div class="form__group" style="margin-left: 4%">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  v-model="email"
                  @input="isEmail(email)"
                />
                <div class="form__group-explain email"></div>
              </div>
            </div>
            <div class="form__group">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                v-model="message"
                @input="isMessage(message)"
              ></textarea>
              <div
                class="form__group-explain messageInput"
                style="margin-bottom: 2.5em"
              ></div>
            </div>

            <button @click.prevent="validateMessageForm">send message</button>
          </form>
        </div>
      </div>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import Breadcumbs from "@/components/Breadcumbs.vue";
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
export default {
  name: "contact",
  components: { Breadcumbs,TheFooter, TheHeader},
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    validateMessageForm() {
      this.isName(this.name);
      this.isEmail(this.email);
      this.isMessage(this.message);
      const explains = document.querySelectorAll(
        ".form__group.form__group-explain"
      );
      let checkValue = 0;
      for (let i = 0; i < explains.length; i++) {
        if (explains[i].innerText === "") {
          checkValue++;
        }
      }
      if (checkValue === explains.length) {
        this.notify("Message has been sent!");
      }
      this.name = "";
      this.email = "";
      this.message = "";
    },
    isName(name) {
      const explain = this.getElement(".form__group-explain.name");
      if (name === "") {
        explain.innerText = "Please input your name!";
      } else {
        explain.innerText = "";
      }
    },
    isEmail(email) {
      const explain = this.getElement(".form__group-explain.email");
      if (email === "") {
        explain.innerText = "Please input your email address!";
      } else {
        const re = /\S+@\S+\.\S+/;
        if (re.test(email)) {
          explain.innerText = "";
        } else {
          explain.innerText = "Your email number is not valid!";
        }
      }
    },
    isMessage(message) {
      const explain = this.getElement(".form__group-explain.messageInput");
      if (message === "") {
        explain.innerText = "Please fill in the message before sending!";
      } else {
        explain.innerText = "";
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
    this.$store.state.breadcrumbs[0] = "contact";
  },
  mounted() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};
</script>

