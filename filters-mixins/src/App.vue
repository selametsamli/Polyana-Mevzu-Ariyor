<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{message | toUppercase| toLowerCase}}</p>
        <input type="text" v-model="searchText">
        <ul>
          <li v-for="product in filtered ">{{product}}</li>
        </ul>
        <app-filter-list></app-filter-list>
      </div>
    </div>
  </div>
</template>

<script>
  import FilterList from "./FilterList";
  import {productMixin} from "./productMixin";

  export default {
    mixins: [productMixin],
    components: {
      appFilterList: FilterList
    },
    data() {
      return {
        message: "Selam sürtükler | Umarım iyisinizdir",
        products: ['Monitör', 'Masa', 'Klave', 'Şişe'],
        searchText: '',
      }
    },
    created() {
      console.log('app.vue Cretated')
    }


  }
</script>

<style>

</style>
