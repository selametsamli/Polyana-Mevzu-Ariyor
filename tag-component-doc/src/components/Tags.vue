<template>
  <div class="tag-container">

    <Tag
      v-for="(tag,index) in tags"
      :tag='tag'
      :index='index'
      :tagColor ='color'
      @removeOneTagEvent="removeOneTag($event)"
    />

    <input
      type="text"
      @keydown.enter="addTags()"
      @keydown.backspace="removeTag()"
    >
    <div v-if="error" class="error">Bu etiket daha önceden eklenmiş</div>
  </div>
</template>

<script>
  import Tag from './Tag'

  export default {
    components: {
      Tag
    },
    data() {
      return {
        tags: [],
        error: false,
      }
    },
    methods: {
      addTags() {
        let text = event.target;
        let matchedTag = false;
        if (text.value.length > 0) {

          this.tags.forEach(tag => {
            if (tag.toLowerCase() == text.value.toLowerCase()) {
              matchedTag = true;
            }
          });

          if (!matchedTag) {
            this.tags.push(text.value);
            text.value = ' ';
          } else {
            this.error = true;
            setTimeout(() => {
              this.error = false;
            }, 2000)
          }
        }

      },
      removeTag() {
        if (event.target.value.length <= 0) {

          this.tags.splice(this.tags.length - 1, 1);
        }

      },
      removeOneTag(index) {
        this.tags.splice(index, 1);
      }
    },
    props: {
      value: {
        required: false,
      }, color: {
        type: String,
        required: false,
        default: "primary"
      }
    },
    created() {
      if (this.value) {

        if (this.value.length > 0) {
          console.log('tetiklendi');

          this.tags = this.value.split(",");
        }
      }
    },
    watch: {
      tags() {
        this.$emit("input", this.tags.join(','));

      }
    }
  }
</script>

<style scoped>
  .tag-container {
    border: 1px solid #ccc;
    padding: 20px;
  }

  input {
    outline: none;
    height: 30px;
    width: 100px;
  }

  .error {
    font-size: 12px;
    color: red;
    margin-top: 5px;
  }

</style>
