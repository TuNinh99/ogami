<template>
  <div class="main__content-top">
    <h4>Ogami shop</h4>
    <div class="top__selectors">
      <div
        class="top__selectors-filter"
        @click.prevent="this.toggleSort = !this.toggleSort"
      >
        <div class="filter__text">{{ this.modeSort }}</div>
        <i class="fas fa-angle-down"></i>
      </div>
      <ul
        :class="{
          'top__selectors-dropdown': true,
          visible: this.toggleSort,
        }"
      >
        <li class="dropdown__item selected" @click.prevent="selectFilter">
          default
        </li>
        <li class="dropdown__item" @click.prevent="selectFilter">a to z</li>
        <li class="dropdown__item" @click.prevent="selectFilter">z to a</li>
        <li class="dropdown__item" @click.prevent="selectFilter">
          hight to low price
        </li>
        <li class="dropdown__item" @click.prevent="selectFilter">
          low to hight price
        </li>
      </ul>
    </div>
    <div class="top__view">
      <div
        :class="{ 'top__view-item': true, selected: this.selected.large }"
        @click.prevent="modeView(1)"
      >
        <i class="fas fa-th-large"></i>
      </div>
      <div
        :class="{ 'top__view-item': true, selected: this.selected.list }"
        @click.prevent="modeView(2)"
      >
        <i class="fas fa-th-list"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-content-shop",
  data() {
    return {
      selected: {
        large: true,
        list: false,
      },
      toggleSort: false,
      modeSort: "default",
    };
  },
  methods: {
    modeView(num) {
      if (num === 1) {
        this.selected.large = true;
        this.selected.list = false;
      } else {
        this.selected.large = false;
        this.selected.list = true;
      }
    },
    selectFilter(e) {
      this.modeSort = e.target.innerText;
      this.toggleSort = !this.toggleSort;
      const sortItems = document.querySelectorAll(
        ".top__selectors-dropdown .dropdown__item"
      );
      for (let i = 0; i < sortItems.length; i++) {
        sortItems[i].classList.remove("selected");
      }
      e.target.classList.add("selected");

      this.$store.state.sort = this.modeSort.toLowerCase();
    },
  },
};
</script>
