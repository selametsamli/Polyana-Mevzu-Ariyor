## Components

#### Component Yapısı:

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <my-comp></my-comp>
  <my-comp></my-comp>
</div>
```

```Javascript
Vue.component('my-comp', {
  data: function() {
    return {
      status: 'Pasif'
    }
  },
  template: '<p> Sunucu Durmu : {{status}} </p>'
});

new Vue({
  el: '#app',
})
```

#### Component'leri Local ve Global Olarak Kayıt Etmek

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <my-comp></my-comp>
</div>
<hr>
<div id="app2">
  <my-comp></my-comp>
</div>
```


```Javascript
var cmp = {
  data: function() {
    return {
      status: 'Pasif'
    }
  },
  template: '<p> Sunucu Durmu : {{status}}  <button @click="changeStatus"> Değiştir </button></p>',
  methods: {
    changeStatus: function() {
      this.status = 'Aktif';
    }
  }
}
new Vue({
  el: '#app',
  components: {
    'my-comp': cmp,
  }
})

new Vue({
  el: '#app2',
})


```
