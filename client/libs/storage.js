export default {
  get: function(k) {
    try {
      return JSON.parse(localStorage.getItem(k));
    }
    catch(e) {
      return null;
    }
  },
  set: function(k, v) {
    console.log("We settin it", v);
    localStorage.setItem(k, JSON.stringify(v));
  }
}