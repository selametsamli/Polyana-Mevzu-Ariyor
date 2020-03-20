<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <br><br>
      <buttun @click="selectedComponent = 'appMemory'" class="btn-sm btn btn-primary">appMemory</buttun>
      <buttun @click="selectedComponent = 'NewMemory'" class="btn-sm btn btn-primary">appNewMemory</buttun>
      <buttun @click="selectedComponent = 'Author'" class="btn-sm btn btn-primary">appAuthor</buttun>
      <br><b></b>
      <p>{{selectedComponent}}</p>

      <keep-alive>
        <component :is="selectedComponent">
          <h1 slot="heading">Güzel bir gün...</h1>
          <p>Bu çok güzel bir anıydı..</p>
        </component>
      </keep-alive>
    </div>

  </div>
</template>

<script>
  import Memory from "./components/Memory"
  import NewMemory from "./components/NewMemory"
  import Author from "./components/Author"

  export default {
    data: function () {
      return {
        selectedComponent: 'app-memory'
      }
    },
    components: {
      appMemory: Memory,
      NewMemory: NewMemory,
      Author: Author
    }
  }
</script>

