<template>
  <div class="about">
    <div class="about__top">
      <div class="container">
        <breadcumbs />
      </div>
    </div>
    <div class="about__content">
      <div class="about__content-story container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="story__text">
              <h2>The Story About Us</h2>
              <div class="border"></div>
              <p>
                Tyna Giang's integrated agro-forestry farming model is the first
                project in Vietnam to achieve the highest ranking in the "100
                projects to combat climate change" by the Ministry of
                Environment, Energy and Sea. France organized in 2016 ...
              </p>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit. Neque porro quisquam est, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="story__video">
              <img
                src="https://user-images.githubusercontent.com/66562512/112166929-a7631f80-8c22-11eb-8444-0dcd52bad393.png"
                alt=""
              />
              <button><i class="fas fa-play"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="about__content-statistical">
          <div class="statistical__wraper row">
            <div class="col-12 col-sm-6 col-md-4">
              <div class="statistical__wraper-item">
                <div class="item__icon">
                  <img
                    src="https://user-images.githubusercontent.com/66562512/112166972-ae8a2d80-8c22-11eb-9acc-95eef4fb9aa1.png"
                    alt=""
                  />
                </div>
                <div class="item__data">
                  <div class="item__data-countup">
                    <h4>{{ this.clients }}</h4>
                    <span>%</span>
                  </div>
                  <p>Happy Client</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="statistical__wraper-item">
                <div class="item__icon">
                  <img
                    src="https://user-images.githubusercontent.com/66562512/112166968-adf19700-8c22-11eb-8a44-dd07c8fd9516.png"
                    alt=""
                  />
                </div>
                <div class="item__data">
                  <div class="item__data-countup">
                    <h4>{{ this.engineers }}</h4>
                  </div>
                  <p>Our Engineer</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-md-4">
              <div class="statistical__wraper-item">
                <div class="item__icon">
                  <img
                    src="https://user-images.githubusercontent.com/66562512/112166965-adf19700-8c22-11eb-9835-f2cd6292e71d.png"
                    alt=""
                  />
                </div>
                <div class="item__data">
                  <div class="item__data-countup">
                    <span>+</span>
                    <h4>{{ this.farms }}</h4>
                  </div>
                  <p>Our Farm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about__content-introduction">
        <div class="introduction__five">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="introduction__five-img">
                  <img
                    src="https://user-images.githubusercontent.com/66562512/112166959-acc06a00-8c22-11eb-8859-2481cf8aabaf.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-12 col-md-8">
                <div class="introduction__five-benefits">
                  <div class="benefits__title">
                    <h2>Why choose us</h2>
                    <div class="border"></div>
                  </div>
                  <div class="benefits__details row">
                    <div class="col-12 col-md-6">
                      <div class="benefits__details-item">
                        <div class="item__image">
                          <img
                            src="https://user-images.githubusercontent.com/66562512/110658349-33715200-81f4-11eb-81ec-68e41b5b3551.png"
                            alt=""
                          />
                        </div>
                        <div class="item__content">
                          <h5>Eat Healthier</h5>
                          <p>
                            Modi tempora incidunt ut labore dolore magnam
                            aliquam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="benefits__details-item">
                        <div class="item__image">
                          <img
                            src="https://user-images.githubusercontent.com/66562512/110658350-3409e880-81f4-11eb-91e9-c53073559389.png"
                            alt=""
                          />
                        </div>
                        <div class="item__content">
                          <h5>We Have Brands</h5>
                          <p>
                            Modi tempora incidunt ut labore dolore magnam
                            aliquam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="benefits__details-item">
                        <div class="item__image">
                          <img
                            src="https://user-images.githubusercontent.com/66562512/110658355-34a27f00-81f4-11eb-9218-f1ec6ef21a84.png"
                            alt=""
                          />
                        </div>
                        <div class="item__content">
                          <h5>Fresh And Clean Products</h5>
                          <p>
                            Modi tempora incidunt ut labore dolore magnam
                            aliquam
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="benefits__details-item">
                        <div class="item__image">
                          <img
                            src="https://user-images.githubusercontent.com/66562512/110658357-353b1580-81f4-11eb-8990-27648aa0e693.png"
                            alt=""
                          />
                        </div>
                        <div class="item__content">
                          <h5>Modern Process</h5>
                          <p>
                            Modi tempora incidunt ut labore dolore magnam
                            aliquam
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="introduction__famer">
          <div class="container">
            <h2>We are farmer</h2>
            <div class="border"></div>
            <div class="introduction__famer-content row">
              <div class="col-12 col-sm-6 col-lg-3">
                <div
                  class="content__item"
                  style="
                    background-image: url('https://user-images.githubusercontent.com/66562512/112166948-aaf6a680-8c22-11eb-8208-8cfa0154bcea.png');
                  "
                >
                  <div class="content__item-infor">
                    <h3>Katie Harrison</h3>
                    <h5>Barber</h5>
                    <ul class="infor__network">
                      <li>
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-invision"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-pinterest-p"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <div
                  class="content__item"
                  style="
                    background-image: url('https://user-images.githubusercontent.com/66562512/112166943-aa5e1000-8c22-11eb-9770-4e33b08b2505.png');
                  "
                >
                  <div class="content__item-infor">
                    <h3>John Harrison</h3>
                    <h5>Sercurity</h5>
                    <ul class="infor__network">
                      <li>
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-invision"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-pinterest-p"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <div
                  class="content__item"
                  style="
                    background-image: url('https://user-images.githubusercontent.com/66562512/112166935-a8944c80-8c22-11eb-84db-25cd44cfaf13.png');
                  "
                >
                  <div class="content__item-infor">
                    <h3>Katie Perry</h3>
                    <h5>WORKER</h5>
                    <ul class="infor__network">
                      <li>
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-invision"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-pinterest-p"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-lg-3">
                <div
                  class="content__item"
                  style="
                    background-image: url('https://user-images.githubusercontent.com/66562512/112166948-aaf6a680-8c22-11eb-8208-8cfa0154bcea.png');
                  "
                >
                  <div class="content__item-infor">
                    <h3>Katie Harrison</h3>
                    <h5>Barber</h5>
                    <ul class="infor__network">
                      <li>
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-invision"></i></a>
                      </li>
                      <li>
                        <a href=""><i class="fab fa-pinterest-p"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcumbs from "@/components/Breadcumbs.vue";
export default {
  name: "about",
  components: { Breadcumbs },
  data() {
    return {
      clients: 100,
      engineers: 142,
      farms: 16,
    };
  },
  methods: {
    countup(time) {
      const countup = setInterval(() => {
        if (this.clients < 100) {
          this.clients = this.clients + 1;
        }
        if (this.engineers < 142) {
          this.engineers = this.engineers + 1;
        }
        if (this.farms < 16) {
          this.farms = this.farms + 1;
        }
      }, time);
      if (this.clients === 100 && this.engineers === 142 && this.farms === 16) {
        clearInterval(countup);
      }
    },
  },
  created() {
    this.clients = 0;
    this.engineers = 0;
    this.farms = 0;
    this.countup(20);
  },
  mounted() {
    window.addEventListener("load", () => {
      this.countup(20);
    });
  },
};
</script>