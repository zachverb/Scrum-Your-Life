var base_url = "http://localhost:3000/api/";
var request = require("request");
var helper = require("./helper.js");


describe('POST /boards', function() {
  it('responds with 200', function(done) {
    request.post({
        url: base_url + 'boards',
        form: { title: 'Test' }
      }, function(err, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      })
  })
})

describe('GET /boards', function(){
  it('responds with json', function(done){
    helper.standardGet('boards', done);
  })
})

describe('GET /boards/1', function() {
  it('responds with 200', function(done) {
    helper.standardGet('boards/1', done);
  })
})