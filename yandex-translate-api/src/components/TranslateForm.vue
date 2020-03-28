<template>
  <form @submit.prevent="translateIt" class="well">
    <textarea v-model="translateText" cols="30" rows="5" class="form-control"
              placeholder="Çevirmek istediğiniz kelime/cümle yazınız."></textarea>
    <select v-model="translateTo" class="form-control">
      <option v-for="(value,key) in languages" :value="key">{{value}}</option>
    </select>
    <br>
    <div class="text-left" v-if="detectedLang">
      <strong>Tespit Edilen Dil : {{detectedLang}} </strong>
    </div>
    <br>
    <button type="submit" class="btn btn-primary btn-block">Çevir Gelsin!</button>
  </form>
</template>

<script>
  import axios from "axios"

  export default {
    data() {
      return {
        translateText: '',
        translateTo: '',
        languages: {},
        detectedLang: ''
      }
    },
    methods: {
      translateIt() {
        let url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200328T165131Z.ca385f1d1f851652.e74c57549bde2037055d7535b3bb08a7da747c41&text=" +
          this.translateText + "&lang=" + this.translateTo;
        axios.get(url)
          .then(response => {
            this.detectedLang = this.languages[this.translateTo];
            this.$emit("translatedEvent", response.data.text[0]);

            let history = {
              from: this.languages[response.data.lang.split('-')[0]],
              to: this.detectedLang,
              translateText: this.translateText,
              translatedTo: response.data.text[0],
            }
            this.$emit('historyEvent', history);
            this.translateText = '';
            this.translateTo = '';
          }).catch(e => console.log(e));

      }
    },
    created() {
      axios.get("https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=trnsl.1.1.20200328T165131Z.ca385f1d1f851652.e74c57549bde2037055d7535b3bb08a7da747c41&ui=tr")
        .then(response => {
          this.languages = response.data.langs
        }).catch(e => console.log(e))
    }
  }
</script>

<style>
</style>
