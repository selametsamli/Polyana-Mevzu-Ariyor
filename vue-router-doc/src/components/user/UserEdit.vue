<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <p>
      Ad : {{$route.query.name}}


    </p>
    <p>Soyad : {{$route.query.lastName}}</p>
    <button class="btn btn-primary" @click="save=true">Onayla</button>

    <div style="height: 800px;">
      <p id="data">Burada benim gelecek bazı bilgilerim olabilir!!</p>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      save : false
    },
    beforeRouteLeave(to, from, next) {
      if (this.save) {
        next();
      } else {
        if (confirm('Tüm bilgileriniz kaybolacak emin misiniz')) {
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>
