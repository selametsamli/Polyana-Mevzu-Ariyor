<template>
  <div class="container">
    <h3> User Detail Component</h3>
    <hr>
    <p>Kullanıcının ID Bilgisi : {{$route.params.id}}</p>

    <router-link
      tag="button"
      class="btn btn-primary"
      :to="navigationLink">
      Kullanıcı Düzenle
    </router-link>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        navigationLink: {
          name: 'userEdit', params: {id: this.$route.params.id}, query: {name: 'selamet', lastName: 'samli'},
          hash: "#data"
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      console.log('Component seviyesinde kontrol!!');
      next();
    }
  }
</script>
