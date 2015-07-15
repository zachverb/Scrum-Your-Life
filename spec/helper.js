var request = require("request");
var base_url = "http://localhost:3000/api/";

module.exports = {
  standardGet: function(endpoint, done, callback) { 
    request.get(base_url + endpoint, function(err, res, body) {
      expect(res.statusCode).toBe(200);
      if(callback !== undefined && res.statusCode === 200) {
        callback(body, done);
      } else {
        done();
      }
    })
  }
}