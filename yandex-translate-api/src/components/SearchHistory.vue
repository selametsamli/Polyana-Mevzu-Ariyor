<template>
  <div class="well" v-if="history.length>0">
    <h3>Arama Geçmişi</h3>
    <ul class="list-group text-left">
      <li class="list-group-item" v-for="item in history">
        <div>
          <strong>{{item.from}} => {{item.to}}</strong>
        </div>
        <br>
        <div>
          <strong class="text-success">{{item.translateText}}</strong>:
          <span class="text-info">{{item.translatedTo}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ["history"]
  }
</script>

<style>
</style>
