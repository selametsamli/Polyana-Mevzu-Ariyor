<template>
  <div>
    <lamp-status v-for="lamp in 5"></lamp-status>
  </div>
</template>

<script>
  import LampStatus from "./LampStatus";

  export default {
    components: {
      "lamp-status": LampStatus,
    }
  }
</script>
