import socket from '../util/socket/socket';
import * as util from '../util/shared';

export default {
  data: function() {
    return {
      inputFloat: '0.0123456789',
      outputFloat: ''
    };
  },
  created: function() {
    this.inputFloat = 0.0123456789;
    document.getElementById('ieeeInput').select();
  },
  watch: {
    inputFloat: function(value) {
      try {
        this.outputFloat = util.getIEEE754(Number(this.inputFloat));
      }catch {
        alert('Something went wrong. Make sure you have entered a proper float/decimal.');
      }
    }
  }
}
