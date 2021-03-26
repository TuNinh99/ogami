<template>
  <div class="partner">
    <div class="partner__wraper">
      <div class="container">
        <div class="partner__wraper-slick" id="slide">
          <swiper
            class="swiper"
            :slides-per-view="6"
            :autoplay="{ delay: 3000 }"
            :breakpoints="{
              320: {
                slidesPerView: 3,
                spaceBetween: 100,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: -20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 0,
              },
            }"
          >
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[0]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[1]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[2]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[0]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[1]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[2]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[0]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[1]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[2]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[0]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[1]" alt="" />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slick__item">
                <img :src="this.partner[2]" alt="" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Scrollbar, Autoplay } from "swiper";

SwiperCore.use([Scrollbar, Autoplay]);

import "swiper/swiper.scss";
export default {
  name: "partner",
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      partner: [
        "https://user-images.githubusercontent.com/66562512/110658133-02911d00-81f4-11eb-947f-264d30fb72d2.png",
        "https://user-images.githubusercontent.com/66562512/110658140-03c24a00-81f4-11eb-9a0b-57f179a213f1.png",
        "https://user-images.githubusercontent.com/66562512/110658136-0329b380-81f4-11eb-942d-dd0581ddbb0b.png",
      ],
    };
  },
};
</script>