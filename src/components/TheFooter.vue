<template>
  <div class="footer">
    <div class="footer__top">
      <div class="footer__top-infor container">
        <div class="row">
          <!-- contact  -->
          <div class="col-12 col-sm-6 col-md-4">
            <div class="infor__item">
              <div class="infor__item-heading">
                <img
                  src="https://user-images.githubusercontent.com/66562512/110656983-0bcdba00-81f3-11eb-98eb-58bb16972ac6.png"
                  alt=""
                />
              </div>
              <div class="infor__item-content">
                <li class="content__text">
                  Address: 60-49 Road 11378 New York
                </li>
                <li class="content__text">Phone: +65 11.188.888</li>
                <li class="content__text">
                  Email: info.deercreative@gmail.com
                </li>
              </div>
              <ul class="infor__item-network">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-pinterest-p"></i></a>
              </ul>
            </div>
          </div>

          <!-- information -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="infor__item">
              <h5 class="infor__item-heading">information</h5>
              <ul class="infor__item-content">
                <li class="content__text"><a href="">Aboute us</a></li>
                <li class="content__text"><a href="">Check out</a></li>
                <li class="content__text"><a href="">Contact</a></li>
                <li class="content__text"><a href="">Services</a></li>
              </ul>
            </div>
          </div>

          <!-- my account -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="infor__item">
              <h5 class="infor__item-heading">my account</h5>
              <ul class="infor__item-content">
                <li class="content__text"><a href="">My account</a></li>
                <li class="content__text"><a href="">Contact</a></li>
                <li class="content__text"><a href="">Shop Cart</a></li>
                <li class="content__text"><a href="">Tracking Order</a></li>
              </ul>
            </div>
          </div>

          <!-- Quick shop -->
          <div class="col-12 col-sm-6 col-md-2">
            <div class="infor__item">
              <h5 class="infor__item-heading">products</h5>
              <ul class="infor__item-content">
                <li class="content__text"><a href="">Vegetables</a></li>
                <li class="content__text"><a href="">Fresh fruit</a></li>
                <li class="content__text"><a href="">Juice</a></li>
                <li class="content__text"><a href="">Fast food</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__subcribe">
      <div class="footer__subcribe-container container">
        <div class="container__content">
          <h5>Join Our Newsletter Now</h5>
          <p>Get E-mail updates about our latest shop and special offers.</p>
        </div>
        <div class="container__input">
          <input type="email" placeholder="Enter your email" name="email" />
          <button type="submit">subcribe</button>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-container container">
        <p>Copyright © 2019 Ogami - All Rights Reserved.</p>
        <img
          src="https://user-images.githubusercontent.com/66562512/110657333-551e0980-81f3-11eb-92d3-43d60297c2c8.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-footer",
};
</script>
