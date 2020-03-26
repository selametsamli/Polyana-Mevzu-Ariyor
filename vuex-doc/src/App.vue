<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1 class="text-center">VUEX</h1>
        <hr>
        <app-result :counter="counter"></app-result>
        <hr>
        <app-second-result :counter="counter"></app-second-result>

        <hr>
        <app-counter @counterEvent="counter += $event"></app-counter>
      </div>
    </div>
  </div>
</template>

<script>
  import Result from "./components/Result";
  import Counter from "./components/Counter";
  import SecondResult from "./components/SecondResult";

  export default {
    data() {
      return {
        counter: 0
      }
    },
    components: {
      appResult: Result,
      appSecondResult: SecondResult,
      appCounter: Counter
    }
  }
</script>

<style>
</style>
