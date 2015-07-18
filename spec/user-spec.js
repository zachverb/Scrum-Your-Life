var request = require("request");
var base_url = "http://localhost:3000/api/"
var userId = 0;
var userToken = 0;
var userData = {
  email: 'test@test.test',
  name: 'test',
  password: 'password',
  number: '203-343-2343'
};

describe("POST /signup", function() {
  it("should return 200", function(done) {
    request.post({
        url: base_url + 'signup',
        form: userData
      },
      function(err, res, body) {
        expect(res.statusCode).toBe(200);
        if (res.statusCode === 200) {
          body = JSON.parse(body);
          userId = body.id;
          userToken = body.token;
        }
        done();
      }
    );
  });

  it("should return 409", function(done) {
    request.post({
        url: base_url + 'signup',
        form: userData
      },
      function(err, res, body) {
        expect(res.statusCode).toBe(409);
        done();
      }
    );
  });
});

describe("POST /authenticate", function() {
  it("should return 200 and a token", function(done) {
    request.post({
        url:base_url + 'authenticate',
        form: userData
      },
      function(err, res, body) {
        expect(res.statusCode).toBe(200);
        if(res.statusCode == 200) {
          body = JSON.parse(body);
          expect(body.token).toBe(userToken);
        }
        done();
      }
    )
  })
})