<template>
  <div>
    <navigation-bar></navigation-bar>
    <b-container fluid>
      <b-row>
        <b-col md="6" v-for="product in filteredData" :key="product.id">
          <product-card
            :name="product.name.en"
            :brand="product.brand"
            :size="product.size"
            :stock="product.stock"
            :images="product.images"
            :price="product.price"
          ></product-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import NavigationBar from "../components/NavigationBar.vue";

export default {
  components: { ProductCard, NavigationBar },
  props: {
  },
  data() {
    return {
      data: this.$route.query.Data,
      filteredData: Array,
      selectedCategory: this.$route.query.SelectedCategory,
    };
  },
  mounted() {
    this.filteredData = this.data.filter(x => x.categories.includes(this.selectedCategory))
  },
};
</script>