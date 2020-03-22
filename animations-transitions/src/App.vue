<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>

        <select class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>

        <button class="btn btn-primary" @click="show=!show">Kutuyu Göster/Gizle</button>
        <br><br>
        <transition :name="activeEffect">
          <div class="alert alert-success" v-if="!show">Bu bir success metinidir.</div>
        </transition>
        <transition name="slide" type="animation" appear>
          <div class="alert alert-danger" v-if="!show">Bu bir danger metinidir.</div>
        </transition>
        <br><br>
        <transition appear
                    enter-class=""
                    enter-active-class="animated swing"
                    leave-class=""
                    leave-active-class="animated pulse">
          <div class="alert alert-danger" v-if="!show">Bu bir danger metinidir.</div>
        </transition>
        <hr>
        <br>
        <transition name="fade" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">Bu bir success metinidir.</div>
          <div class="alert alert-danger" v-else key="danger">Bu bir success metinidir.</div>
        </transition>
        <hr>
        <br><br>

        <button class="btn btn-primary" @click="showJS=!showJS">Kutuyu Göster/Gizle</button>
        <br><br>
        <transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="afterLeaveCancelled">
          <div style="width: 300px; background-color: #fbbd08;border: 1px solid #666;width: 100px;height: 100px;"
               v-if="showJS">Bu bir success metinidir.
          </div>
        </transition>
        <hr>
        <br><br>
        <h3>Dianmik Komponenetler arası Geçiş</h3>
        <button class="btn btn-danger" @click="activeComponent='appHome'">Home</button>
        <button class="btn btn-primary" @click="activeComponent='appPost'">Post</button>
        <br><br>
        <transition name="fade" mode="out-in">
          <component :is="activeComponent">

          </component>

        </transition>
        <hr>
        <button @click="addNewItem" class="btn btn-danger">Yeni Eleman Ekle</button>
        <br><br>
        <ul class="list-group">
          <transition-group name="slide">
            <li :key="item" v-for="(item,index) in numberList" class="list-group-item" @click="removeItem(index)">
              Number: {{item}}
            </li>
          </transition-group>


        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Post from "./components/Post"
  import Home from "./components/Home"

  export default {
    components: {
      appPost: Post,
      appHome: Home
    },
    data() {
      return {
        show: false,
        activeEffect: 'fade',
        showJS: false,
        elementWidth: 100,
        activeComponent: 'appPost',
        numberList: [1, 2, 3, 4, 5]
      }
    },
    methods: {


      beforeEnter(el) {
        console.log('beforeEnter');
        this.elementWidth = 100;
        el.style.width = this.elementWidth + 'px';
      },
      enter(el, done) {
        console.log('enter');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth + round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 50);
        done();
      },
      afterEnter(el) {
        console.log('afterEnter');
      },
      afterEnterCancelled(el) {
        console.log('afterEnterCancelled');
      },
      beforeLeave(el) {
        console.log('beforeLeave');
        this.elementWidth = 300;
        el.style.width = this.elementWidth + 'px';
      },
      leave(el, done) {
        console.log('leave');
        let round = 1;
        const interval = setInterval(() => {
          el.style.width = (this.elementWidth - round * 10) + 'px';
          round++;
          if (round > 20) {
            clearInterval(interval);
            done();
          }
        }, 50);
      },
      afterLeave(el) {
        console.log('afterLeave');
      },
      afterLeaveCancelled(el) {
        console.log('afterLeaveCancelled');
      },
      addNewItem() {
        const position = Math.floor(Math.random() * this.numberList.length);
        this.numberList.splice(position, 0, this.numberList.length + 1);
      },
      removeItem(index) {
        this.numberList.splice(index, 1);
      },
    }
  }
</script>

<style>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-leave {
    /* opacity: 1;*/
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .slide-enter {
    opacity: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity 0.5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity 3s;
    opacity: 0;
    position: absolute;
  }
  .slide-move{
    transition: transform 1s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(0px);

    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);

    }
  }

</style>
