<template>
  <transition-group name="slideContainer" mode="out-in">
    <component
      key="mainComponent"
      :is="activeComponent"
      @activeComponentEvent="activeComponent=$event">
      <canvas key="canvas" id="canvas" v-show="activeComponent == 'app-celebrate'"></canvas>
    </component>
  </transition-group>
</template>
<script>

  import Celebrate from './components/Celebrate';
  import GameCards from './components/GameCards';
  import Card from './components/Card';
  import DefaultCard from './components/DefaultCard';
  import Failure from './components/Failure';

  export default {
    components: {
      appGameCards: GameCards,
      appCard: Card,
      appCelebrate: Celebrate,
      appDefaultCard: DefaultCard,
      appFailure: Failure,
    },
    data() {
      return {
        activeComponent: 'app-game-cards',
      }
    }
  }
</script>
<style>
  body {
    font-family: sans-serif;

  }

  .slideContainer-enter {
  }

  .slideContainer-enter-active {
    animation: slide-in .3s ease-out forwards;
  }

  .slideContainer-leave {
  }

  .slideContainer-leave-active {
    animation: slide-out .3s ease-out forwards;
  }


  @keyframes slide-in {
    from {
      transform: translateX(-1000px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(1000px);
      opacity: 0;
    }
  }
</style>
