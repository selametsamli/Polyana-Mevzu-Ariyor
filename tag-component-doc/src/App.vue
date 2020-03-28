<template>
  <div class="container">
    <app-tags v-model="tags" color="success"></app-tags>
    <app-tags v-model="tags2"  color="danger"></app-tags>
    <app-tags v-model="tags2"  color="primary"></app-tags>
    <app-tags v-model="tags2"  color="info"></app-tags>
    <app-tags v-model="tags2"  color="warning"></app-tags>
    <app-tags v-model="tags2"  color="secondary"></app-tags>

  </div>

</template>


<script>
  import Tags from "./components/Tags"

  export default {
    components: {
      appTags: Tags
    },
    data() {
      return {
        tags: "deneme,test",
        tags2: "klavye,mouse,telefon"
      }
    }
  }

</script>

<style>
  body {
    font-family: sans-serif;
  }


</style>
