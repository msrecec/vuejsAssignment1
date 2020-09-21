const assignment = Vue.createApp({
  data() {
    return {
      name: 'Mislav',
      age: 25,
      imgUrl: 'https://vuejs.org/images/logo.png'
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    }
  }
});

assignment.mount('#assignment');