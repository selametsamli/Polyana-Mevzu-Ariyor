<template>
  <div>
      <span class="tag" :class="selectedTheme">
      <span class="content">{{tag}}</span>
        <span class="close" @click="$emit( 'removeOneTagEvent',index)">X</span>
    </span>
  </div>
</template>


<script>
  export default {
    props: ['tag', 'index', 'tagColor'],
    data() {
      return {
        selectedTheme: null
      }
    },
    created() {
      this.selectedTheme = this.tagColor;
    }
  }
</script>

<style scoped>

  .success {
    background-color: #D5EDDB;
    border: 1px solid #c3e6cb;
    color: #155724;
  }

  .primary {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
  }

  .secondary {
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
  }

  .info {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  }

  .warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }

  .danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }


  .tag {
    float: left;
    padding: 10px;
    cursor: default;
    font-size: 14px;
    margin-right: 10px;
    border-radius: 5px;
  }

  .tag .close {
    font-size: 12px;
    cursor: pointer;
  }

  .tag * {
    font-size: 14px;
  }
</style>
