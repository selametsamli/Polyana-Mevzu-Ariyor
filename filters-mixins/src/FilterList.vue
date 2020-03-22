<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">

        <input type="text" v-model="searchText">
        <ul>
          <li v-for="product in filtered ">{{product}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {productMixin} from "./productMixin";

  export default {
    mixins: [productMixin],
    created() {
      console.log('FilterList Component Created');
    }
  }
</script>

<style>

</style>
