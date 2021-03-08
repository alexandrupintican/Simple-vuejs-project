<template>
  <div>
    <b-card
      border-variant="secondary"
      no-body
      class="overflow-hidden"
      style="float: left; width: 500px; height: 332px; object-fit: scale-down;margin: 1vw 0 0 5vw"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img v-bind:src="images[0]"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body v-bind:title="name" v-bind:sub-title="brand">
            <b-card-text>
              There are currently {{ inStock }} products in stock.
            </b-card-text>
            <b-card-text> Price: {{ price }} dkk. </b-card-text>
            <b-button :disabled="isDisabled" @click="onClick" variant="dark"
              >{{ buttonText }}</b-button
            >
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    name: {
      type: String,
      default: function() {
        return "You should buy this"
      }
    },
    brand: String,
    size: Array,
    stock: Number,
    images: {
      type: Array,
      default: function () {
        return ["../assets/image-not-found.jpg"];
      },
    },
    price: Number,
  },
  data: function () {
    return {
      inStock: this.stock,
      isDisabled: false,
      buttonText: "Purchase",
    };
  },
  mounted() {
    if (this.stock === 0) {
      this.isDisabled = true;
      this.buttonText = "Out of stock";
    }
  },
  methods: {
    onClick: function () {
      if (this.inStock > 0) {
        this.inStock--;
      }
      if (this.inStock === 0) {
        this.isDisabled = true;
        this.buttonText = "Out of stock";
      }
      this.$bvToast.toast("You've succesfuly purchased " + this.name + ".", {
        autoHideDelay: 1000,
        title: 'Purchase completed'
      });
    },
  },
};
</script>
