<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">

      <app-memory>
        <h1>Başlık</h1>
        <p>Bu çok güzel bir anıydı</p>
      </app-memory>

    </div>

  </div>
</template>

<script>
  import Memory from "./Memory"

  export default {
    components: {
      appMemory: Memory
    }
  }
</script>

