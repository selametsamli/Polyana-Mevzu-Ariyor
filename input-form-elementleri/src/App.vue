<template>
    <div class="container">
        <h3>Form Verileriyle Çalışmak</h3>
        <hr>
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-warning">
                    <div class="panel-heading">
                        <h4>Başvuru Formu</h4>
                    </div>
                    <div class="panel-body">
                        <form>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="email">Kullanıcı Adı</label>
                                        <input type="text" id="username" class="form-control"
                                               :value="userData.username"
                                               @input="userData.username= $event.target.value">
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Şifre</label>
                                        <input type="password" id="password" class="form-control"
                                               v-model.lazy="userData.password">
                                    </div>
                                    <div class="form-group">
                                        <label for="age">Yaş</label>
                                        <input type="number " id="age" class="form-control"
                                               v-model.number.trim="userData.age">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="message">Açıklama</label><br>
                                    <textarea id="message" rows="3" class="form-control"
                                              v-model="userData.message"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>
                                            <input v-model="userData.interest" type="checkbox" value="yazilim"> Yazılım
                                        </label>
                                        <label>
                                            <input v-model="userData.interest" type="checkbox" value="donanim"> Donanım
                                        </label>
                                    </div>

                                </div>
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
                            </div>
                            <div class="row">
                                <div class="col-md-12 from-group">
                                    <label>Şehir</label>
                                    <select v-model="userData.selectedCity" class="form-control">
                                        <option :selected="city == 'Adana'" v-for="city in userData.cities">{{city}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <app-switch v-model="switched"></app-switch>
                                </div>
                            </div>
                            <hr>

                            <div class="row">
                                <div class="col-md-12">
                                    <button @click.prevent="submit"
                                            class="btn btn-primary">Gönder!
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6" v-if="isSubmited">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h4>Form Verileri</h4>
                    </div>
                    <div class="panel-body">
                        <p>Kullanıcı Adı: {{userData.username}}</p>
                        <p>Şifre: {{userData.password}}</p>
                        <p>Yaş: {{userData.age}}</p>
                        <p style="white-space:pre;">Açıklama:{{userData.message}} </p>
                        <p><strong>İlgi Alanları</strong></p>
                        <ul>
                            <li v-for="item in userData.interest">{{item}}</li>
                        </ul>
                        <p>Cinsiyet: {{userData.gender}}</p>
                        <p>Şehir: {{userData.selectedCity}}</p>
                        <p>Toggle: {{switched}}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Switch from "./Switch";

    export default {
        components: {
            appSwitch: Switch,
        },
        data() {
            return {
                userData: {
                    username: '',
                    password: '',
                    age: null,
                    message: '',
                    interest: [],
                    gender: '',
                    cities: ['İstanbul', 'Ankara', 'Adana', 'Izmir', 'Rize'],
                    selectedCity: '',
                },
                switched: true,
                isSubmited: false,
            }
        },
        methods: {
            submit() {
                this.isSubmited = true
            }
        }
    }
</script>

<style>

</style>
