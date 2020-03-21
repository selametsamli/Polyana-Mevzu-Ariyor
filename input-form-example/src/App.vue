<template>
    <div class="container">
        <form v-if="!isOk">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h3> Üye kayıt formu</h3>
                    <hr>
                    <div class="row">
                        <app-fullname v-model="userData.fullname"></app-fullname>
                        <div class="form-group">
                            <label for="password">Şifre</label>
                            <input type="password" id="password" class="form-control"
                                   v-model.lazy="userData.password">
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="number " id="age" class="form-control"
                                   v-model.number.trim="userData.email">
                        </div>
                        <div class="row">
                            <div class="col-md-12 form-group">
                                <label>
                                    <input v-model="userData.gender" type="radio" value="erkek"> Erkek
                                </label>
                                <label>
                                    <input v-model="userData.gender" type="radio" value="kadin"> Kadın
                                </label>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <button @click.prevent="isOkChange()"
                                            class="btn btn-primary">Gönder!
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>


                    <!-- Soru 3 -->
                    <!-- Yukarıdaki uygulamayı düzenleyerek Tam Ad (Ad + Soyad) alanı için bir Form Kontrol Elemanı üretiniz -->
                </div>
            </div>

        </form>
        <hr>
        <div class="row" v-if="isOk">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4>Girdiğiniz Bilgier</h4>
                    </div>
                    <div class="panel-body">
                        <p>Tam Ad: {{userData.fullname}} </p>
                        <p>E-mail: {{userData.email}}</p>
                        <p>Şifre: {{userData.password}} </p>
                        <p>Cinsiyet:{{userData.gender}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from "./FullName";

    export default {
        components: {
            appFullname: FullName,
        },
        data() {
            return {
                userData: {
                    //name: '',
                    //surname: '',
                    fullname: '',
                    email: '',
                    password: '',
                    gender: null,
                },
                isOk: false,

            }
        },
        methods: {
            isOkChange() {
                this.isOk = true;
            }
        }
    }
</script>

<style>
</style>
