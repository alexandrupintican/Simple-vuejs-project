<template>
  <div>
    <b-container fluid>
    <b-row>
      <b-col md="6" v-for="category in data.categories.categories" :key="category.id">
        <image-category :data="data.products" :category="category.id"></image-category>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>

<script>
import MY_JSON from "../assets/data.json";
import ImageCategory from "../components/ImageCategory.vue";

export default {
  name: "Home",
  components: {
    ImageCategory,
  },
  data() {
    return {
      data: MY_JSON,
    };
  },
};
</script>

<style lang="scss">

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
