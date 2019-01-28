import socket from './util/socket/socket';

export default {
  data: function() {
    return {
      password: ''
    }
  },
  computed: {
    signedIn: function() {
      return this.$store.state.signedIn;
    }
  },
  methods: {
    go: function() {
      socket.emit('login', String(this.password).replace(/ /g,''));
    }
  },
  mounted: function() {
    socket.on('passCheck', (pass) => {
      this.$store.commit('setSignIn', pass);
      if (pass) {
        try {
          var page = window.location.href.split('/');
          this.$router.push('/' + page[page.length-1]);
        }catch {
          this.$router.push('/home');
        }
        socket.emit('getData', 'please');
      }else {
        alert('Wrong password.');
      }
    });

    this.$store.commit('setItemData', require('./util/json/itemData.json'));

    socket.on('priceData', (priceData) => {
      this.$store.commit('setPriceData', priceData);
    });
  }
};
