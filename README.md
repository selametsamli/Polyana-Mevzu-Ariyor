
# VueJS Notları



```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <h1>{{hello()}}</h1>
</div>
```

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Selam Sürtüler",
  },
  methods: {
    hello: function() {
      return 'Selam Sürtükler';
    }
  }
})
```
```javascript
new Vue({
  el: "#app",
  data: {
    title: "Selam Sürtüler ",
    description: "Desciription"
  },
  methods: {
    hello: function() {
      return this.title + this.description;
    }
  }
})
```

* v-once ile re-render işlemi engelleme
* v-html --> link döndürmemizi sağlar
```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">
  <p v-once>{{title}}</p>
  <h1>{{hello()}}</h1>
  <p v-html='blogLink'></p>
</div>
```

```javascript
new Vue({
  el: "#app",
  data: {
    title: "Selam Sürtüler ",
    description: "Desciription",
    link: "https://www.link.com",
    blogLink: "<a href='www.link.com'>Link</a>"
  },
  methods: {
    hello: function() {
      this.title = "Merhaba!!"
      return this.title;
    }
  }
})
```

* example

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="exercise">

  <p>VueJS Muazzam bir Framework - {{name}} {{age}}</p>
  <p>{{ageCarpim()}}</p>
  <p>{{randomUret()}}</p>
  <div>
    <input type="text" v-on:input="changeTitle">
  </div>
</div>

```

```javascript
new Vue({
  el: "#exercise",
  data: {
    name: "Selamet",
    age: 23,
  },
  methods: {
    ageCarpim: function() {
      age = this.age;
      age = age * 5;
      return age
    },
    randomUret: function() {
      return Math.random()*1
    },
    changeTitle: function(event){
    	this.name = event.target.value;
    }
  }
})

```

### Eventler 


```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<div id="app">

  <button v-on:click="showAlert('selamet')">Show</button>
  <button v-on:click="counter++">Arttır</button>
  <button v-on:click="counterDegeriArttir(3,$event)">Arttır</button>

  <p>{{counter}}</p>
  <p v-on:mousemove="updateCoords(2, $event)">Coords {{x}},{{y}}
    <span v-on:mousemove.stop>GİZLİ BÖLME</span>
  </p>
  <input type="text" v-on:keyup.enter.space='showAlert2()'>
</div>
```

```javascript
new Vue({
  el: "#app",
  data: {
    counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
    showAlert: function(name) {
      alert(name);
    },
    counterDegeriArttir: function(step) {
      this.counter += step;
    },
    updateCoords: function(step, event) {
      this.counter += step;
      this.x = event.clientX;
      this.y = event.clientY;
    },
    showAlert2: function(event) {
      alert(event.target.value);
    }
  }
})
```
* v-model='name' input içerisinde kullanılırsa her yerdeki name değişkenini değiştirir.


#### computed vs methods
* methods --> alakalı olsun olmasın herhangi bir değerin değişmesi durumda çalışır bu durumun önüne computed kullanarak geçilir 

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<div id='app'>
  <button v-on:click='counter++'>Arttır</button>
  <button v-on:click='counter--'>azalt</button>
  <button v-on:click='secondCounter++'>2. Counter arttır</button>

  <p>Counter: {{counter}} | {{secondCounter}}</p>
  <p>{{result()}} || {{output }}</p>

</div>


```

```javascript
new Vue({
  el: '#app',
  data: {
    counter: 0,
    secondCounter:0,
  },
  methods: {
    result: function() {
    		console.log('Result çalıştı');
				return this.counter >10 ? "10'dan büyüktür" : "10'dan küçüktür"
    },
  },
  computed :{
  	output : function(){
    	console.log('Output çalıştı')
    	return this.secondCounter >10 ? "10'dan büyüktür" : "10'dan küçüktür"
    }
  }
})


```

#### Watch

* Computed  asenkron olarak çalışmaz,
* watch ile bu işlemi yaparız, watch asenkron olarak çalışır.

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<div id='app'>
  <button v-on:click='counter++'>Arttır</button>
  <p>Counter: {{counter}}</p>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
  watch : {
  	counter : function(value){
    	vm = this;
    	setTimeout(function(){
      	vm.counter =0
      },1500)
    }
  }
})


```

* v-on:click ---> @click
* v-bin:href --> :href 

--- 

#### Dinamik Still İşlemleri:

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: gray;
    display: inline-block;
    margin-right: 5px;
  }
  .yellow {
    background-color: yellow;
  }
</style>
<div id='app'>
  <div @click='attachedClass = !attachedClass' :class='{yellow : attachedClass}' class='box'></div>
  <div class='box'></div>
  <div class='box'></div>
</div>
```


```javascript
new Vue({
  el: '#app',
  data: {
    attachedClass: false
  }
})
```
