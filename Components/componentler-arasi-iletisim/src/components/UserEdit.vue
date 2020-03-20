<template>
    <div class="col-md-s6">
        <h3>Child Component 2</h3>
        <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
        <p>Kullanıcı yaşı {{age}}</p>
        <button @click="changeAge ">Yaş bilgisini değiştir</button>
    </div>
</template>
<script>
    export default {
        props: ['age'],
        methods: {
            changeAge() {
                this.age = 30;
                this.$emit('ageWasEdited', this.age)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgoldenrodyellow;
        padding: 20px;
        border: 1px solid #666;
        display: inline-block;
    }
</style>

