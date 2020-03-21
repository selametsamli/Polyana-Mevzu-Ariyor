<template>
    <div>
        <div class="form-group">
            <label for="ad">Ad</label>
            <input type="text" id="name" class="form-control"
                   :value="firstName" @input="nameChange(true,$event)">
        </div>
        <div class="form-group">
            <label for="soyad">Soyad</label>
            <input type="text" id="surname" class="form-control"
                   :value="lastName" @input="nameChange(false,$event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        computed: {
            firstName() {
                return this.value.split(' ')[0];
            },
            lastName() {
                return this.value.split(' ')[1];
            }
        },
        methods: {
            nameChange(isFirst, event) {
                let fullName = '';
                if (isFirst) {
                    fullName = event.target.value + ' ' + this.lastName;
                } else {
                    fullName = this.firstName + ' ' + event.target.value;
                }
                this.value = fullName;
                this.$emit('input', this.value)
            }
        }
    }
</script>