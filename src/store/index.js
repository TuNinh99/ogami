import {
  createStore
} from "vuex";

export default createStore({
  state: {
    toggle_departments: false,
    products: null,
    product: null,
    valueFilter: null,
    allWeekProduct: null,
    foods: null,
    sort: 'default',
    item: null,
    stateNotify: false,
    contentNotify: null,
    indexItemRemove: null,
    showMessage: false,
    message: 'Product added to cart',
    amount: 0,
    totalPay: 0,
    stepActive: 0,
  },
  getters: {
    compare: state => {
      return state.product.price === state.product.sale ? false : true;
    },
    price: state => {
      return Number(state.product.sale)
    },
    images: state => {
      return Object.values(state.product.images)
    },
    images_food: state => {
      console.log(state.food);
      return Object.values(state.food.images || {});
    },
    products_week: state => {
      const values = Object.values(state.products);
      const filter = values.filter(value => value.type === state.valueFilter)
      filter !== null ? state.products = filter : '';
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});