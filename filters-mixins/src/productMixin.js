export const productMixin = {
  data() {
    return {
      products: ['Monitör', 'Masa', 'Klave', 'Şişe'],
      searchText: '',
    }
  },
  computed: {
    filtered() {
      return this.products.filter((element) => {
        return element.match(this.searchText);
      })
    }
  },
  created() {
    console.log('Mixin çalıştı!!');
  }
};
