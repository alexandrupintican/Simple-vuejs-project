<template>
  <div>
    <b-img
      @click="onClick"
      thumbnail
      :src="require(`../assets/${category}_clothing.png`)"
      fluid
      class="image"
    ></b-img>
    <span class="my-span">{{ camelize(category) }}</span>
  </div>
</template>

<script>
import router from "../router/index.js";

export default {
  name: "ImageCategory",
  props: {
    category: String,
    data: Array,
  },
  components: {},
  data: function () {
    return {
      selectedCategory: "",
    };
  },
  methods: {
    onClick() {
      this.selectedCategory = this.category;
      router.push({
        name: this.category + "wear",
        query: { Data: this.data, SelectedCategory: this.selectedCategory },
        props: true,
      });
    },
    camelize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};
</script>

<style lang="scss">
.image {
  position: relative;
  width: 100%; /* for IE 6 */
}
.image:hover {
  filter: blur(8px);
}
.my-span {
  position: absolute;
  top: 20vw;
  left: 15vw;
  color: rgb(70, 70, 70);
  font: bold 120px/90px Helvetica, Sans-Serif;
  letter-spacing: -1px;
  padding: 10px;
}
</style>