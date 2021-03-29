<template>
  <div class="banner">
    <div class="banner__slide">
      <swiper
        class="banner__slide-carousel"
        :scrollbar="{
          el: '.carousel__item',
          draggable: true,
        }"
        :loop="true"
        :autoplay="{ delay: 5000 }"
        :navigation="{
          nextEl: '.banner__next',
          prevEl: '.banner__previous', 
        }"
      >
        <!-- item 1  -->
        <swiper-slide
          :class="{ carousel__item: true }"
          style="
            background: url('https://user-images.githubusercontent.com/66562512/110658753-8945fa00-81f4-11eb-8f8a-acfc716de549.png')
              center no-repeat;
          "
        >
          <div class="container">
            <div class="carousel__item-wraper">
              <div class="wraper__content">
                <h6>fruit fresh</h6>
                <h1 :class="{ show: !this.active[0] }">orange lemon</h1>
                <h3 :class="{ show: !this.active[0] }">
                  16,00 US$ / <span>pakage</span>
                </h3>
                <router-link :to="{ name: 'foods' }">
                  <button :class="{ show: !this.active[0] }">
                    shop now
                  </button></router-link
                >
              </div>
              <div :class="{ wraper__image: true, show: !this.active[0] }">
                <img
                  src="https://user-images.githubusercontent.com/66562512/110657538-7d0d6d00-81f3-11eb-9791-a4be14873fb2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </swiper-slide>

        <!-- item 2 -->
        <swiper-slide
          :class="{ carousel__item: true }"
          style="
            background: url('https://user-images.githubusercontent.com/66562512/110658756-8a772700-81f4-11eb-9183-b52c74aee885.png')
              center no-repeat;
          "
        >
          <div class="container">
            <div class="carousel__item-wraper">
              <div class="wraper__content">
                <h6>butter & eggs</h6>
                <h1>spice oganic</h1>
                <h3>12,59 US$ / <span>pakage</span></h3>
                <router-link :to="{ name: 'foods' }">
                  <button>shop now</button></router-link
                >
              </div>
              <div :class="{ wraper__image: true }">
                <img
                  src="https://user-images.githubusercontent.com/66562512/110657538-7d0d6d00-81f3-11eb-9791-a4be14873fb2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="banner__previous">
      <i class="fas fa-angle-left"></i>
    </div>
    <div class="banner__next">
      <i class="fas fa-angle-right"></i>
    </div>
    <benefits />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Autoplay, Scrollbar } from "swiper";

SwiperCore.use([Navigation, Autoplay, Scrollbar]);

import Benefits from "@/components/Benefits.vue";
import "swiper/swiper.scss";
export default {
  components: { Benefits, Swiper, SwiperSlide },
  name: "banner",
  data() {
    return {
      slides: 2,
      position: 0,
      active: [true, false],
    };
  },
  methods: {
    handlePrevious() {
      this.position = this.position - 1;
      if (this.position < 0) {
        this.position = this.slides - 1;
      }
      this.isSlideActive(this.position);
    },
    handleNext() {
      this.position = this.position + 1;
      if (this.position === this.slides) {
        this.position = 0;
      }
      this.isSlideActive(this.position);
    },
    isSlideActive(position) {
      for (let index = 0; index < this.active.length; index++) {
        this.active[index] = false;
      }
      this.active[position] = true;
    },
  },
  mounted() {},
  watch: {},
};
</script>

