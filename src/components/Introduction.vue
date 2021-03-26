<template>
  <div class="introduction">
    <div
      class="introduction__item left"
      style="
        background-image: url('https://user-images.githubusercontent.com/66562512/110658748-88ad6380-81f4-11eb-8486-61a50ce204cb.png');
      "
    >
      <img
        src="https://user-images.githubusercontent.com/66562512/110658256-1ccafb00-81f4-11eb-9f38-4a5f389ee2b1.png"
        alt=""
      />
      <router-link :to="{ name: 'foods' }"
        ><button>show now</button></router-link
      >
    </div>
    <div
      class="introduction__item center"
      style="
        background-image: url('https://user-images.githubusercontent.com/66562512/110658755-89de9080-81f4-11eb-9e93-79aecc3c587a.png');
      "
    >
      <img
        src="https://user-images.githubusercontent.com/66562512/110658261-1ccafb00-81f4-11eb-8e14-d64610cdf69d.png"
        alt=""
      />
      <router-link :to="{ name: 'foods' }"
        ><button>show now</button></router-link
      >
    </div>
    <div
      class="introduction__item"
      style="
        background-image: url('https://user-images.githubusercontent.com/66562512/110658761-8b0fbd80-81f4-11eb-9998-8f69080f15c6.png');
      "
    >
      <img
        src="https://user-images.githubusercontent.com/66562512/110658249-1b99ce00-81f4-11eb-8b65-2b5e74cfcef2.png"
        alt=""
      />
      <router-link :to="{ name: 'foods' }"
        ><button>show now</button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "introduction",
  async created() {
    const data = await fetch(
      "https://ogami-shop-default-rtdb.firebaseio.com/food.json"
    ).then((response) => response.json());
    this.foods = data;
    this.$store.state.foods = data;
  },
};
</script>
