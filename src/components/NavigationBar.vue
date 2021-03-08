<template>
  <div>
    <b-navbar sticky toggleable="lg" type="light" variant="light">
      <b-navbar-brand :to="{ path: '/' }">BESTSELLER</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item v-if="selectedCategory === 'kids'" @click="onClickAdults" >Adults clothing</b-nav-item>
          <b-nav-item v-if="selectedCategory === 'adults'" @click="onClickKids">Kids clothing</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import router from '../router/index.js'

export default {
  name: "NavigationBar",
  props: {
  },
  data() {
    return {
      data: this.$route.query.Data,
      filteredData: Array,
      selectedCategory: this.$route.query.SelectedCategory,
    };
  },
  methods: {
    onClickAdults() {
      router.push({
        name: "adultswear",
        query: { Data: this.data, SelectedCategory: 'adults' },
        props: true,
      });
    },
    onClickKids() {
      router.push({
        name: "kidswear",
        query: { Data: this.data, SelectedCategory: "kids" },
        props: true,
      });
    },
  },
};
</script>

<style lang="scss">
.bg-light {
  background-color: gray;
}
</style>