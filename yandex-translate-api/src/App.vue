<template>
  <div class="container">
    <h1 class="text-center">Vue-Translator</h1>
    <h5 class="text-center">Vue.js ile Translator</h5>
    <br>
    <div class="row">
      <div class="col-md-12 text-center">
        <app-translate-form
          @historyEvent="history.push($event)"
          @translatedEvent="translatedText=$event"/>
        <h3 class="text-success text-center">{{translatedText}}</h3>

        <app-search-history :history="history"/>

      </div>
    </div>
  </div>
</template>

<script>
  import SearchHistory from "./components/SearchHistory";
  import TranslateForm from "./components/TranslateForm";

  export default {
    components: {
      appSearchHistory: SearchHistory,
      appTranslateForm: TranslateForm
    },
    data() {
      return {
        translatedText: '',
        history: []
      }
    }

  }
</script>

<style>
</style>
