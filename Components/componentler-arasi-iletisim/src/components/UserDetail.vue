<template>
    <div class="wcol-md-6">
        <h3>Child Component 1</h3>
        <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
        <p> Kullanıcı adı {{name}}</p>
        <p> Kullanıcı adı {{switchName()}}</p>
        <p>Kullanıcı Yaşı {{age}}</p>
        <button @click="sendToParent">Veriyi Parent'a Gönder</button>

    </div>
</template>
<script>
    export default {
        props: {
            // name: [String, Array]
            name: {
                type: String,
                //required: true,
                default: 'Lorem impsum'
            },
            age: String
        },
        methods: {
            switchName() {
                return this.name.split('').reverse().join('');
            },
            sendToParent() {
                this.$emit('data', 'Child');
            }
        }
    }
</script>
<style scoped>
    div {
        background-color: lightcoral;
        padding: 20px;
        border: 1px solid #666;
        display: inline-block;
    }
</style>
