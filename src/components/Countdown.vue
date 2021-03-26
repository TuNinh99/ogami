<template>
  <div class="countdown">
    <div class="countdown__container container">
      <div class="countdown__container-block">
        <p class="block__digit">{{ day }}</p>
        <p class="block__text">Day</p>
      </div>
      <div class="countdown__container-block">
        <p class="block__digit">{{ hourETA }}</p>
        <p class="block__text">Hour</p>
      </div>
      <div class="countdown__container-block">
        <p class="block__digit">{{ minuteETA }}</p>
        <p class="block__text">Min</p>
      </div>
      <div class="countdown__container-block">
        <p class="block__digit">{{ secondETA }}</p>
        <p class="block__text">Sec</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "countdown",
  data() {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      setTime: null,
    };
  },
  computed: {
    hourETA() {
      return this.hour >= 10 ? this.hour : `0${this.hour}`;
    },
    minuteETA() {
      return this.minute >= 10 ? this.minute : `0${this.minute}`;
    },
    secondETA() {
      return this.second >= 10 ? this.second : `0${this.second}`;
    },
  },
  methods: {
    calculateETA(currentDate) {
      const destinationDate = new Date(
        this.setTime.year + "- " + this.setTime.month + "-" + this.setTime.day
      ).setHours(
        Number(this.setTime.hour),
        Number(this.setTime.minute),
        Number(this.setTime.second),
        0
      ); //Đặt time đếm ngược tới bao nhiêu
      let diff = destinationDate - currentDate;
      if (diff >= 0) {
        let milliseconds = diff % 1000;
        diff = (diff - milliseconds) / 1000;
        this.second = diff % 60;
        diff = (diff - this.second) / 60;
        this.minute = diff % 60;
        diff = (diff - this.minute) / 60;
        this.hour = diff % 24;
        this.day = (diff - this.hour) / 24;
      }else{
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
        this.day = 0
      }
    },
  },
  async created() {
    const data = await fetch(
      "https://ogami-shop-default-rtdb.firebaseio.com/countdown.json"
    ).then((response) => response.json());
    this.setTime = data;

    setInterval(() => {
      const currentDate = new Date();
      this.calculateETA(currentDate);
    }, 1000);
  },
};
</script>

