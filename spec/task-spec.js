var request = require("request");
var boardRoute = "boards/1/";
var base_url = "http://localhost:3000/api/" + boardRoute;
var helper = require("./helper.js");
var task = {
	title: "Test",
	estimate: 10,
	description: "This is a description. Lalala"
}

var taskNoEstimate = {
	title: "Test2",
	description: "This is the description. It can b kind of long"
}

var createdTask;

describe("Tasks", function() {

	describe("Post tasks", function() {
		it("should return a new task", function(done) {
			request.post({
				url: base_url + 'tasks',
				form: task
			}, function(err, res, body) {
				expect(res.statusCode).toBe(200);
				if(res.statusCode === 200) {
					createdTask = JSON.parse(body);
				}
				done();
			})
		})

		it("should be able to exist without an estimate", function(done) {
			request.post({
				url: base_url + 'tasks',
				form: taskNoEstimate
			}, function(err, res, body) {
				expect(res.statusCode).toBe(200);
				done();
			})
		})
	});

	describe("Get tasks", function() {
		it("should return a json array", function(done) {
      		helper.standardGet(boardRoute + "tasks", done);
		})
	});



	describe("Get specific task", function() {
		it("should return the specific task", function(done) {
			helper.standardGet(boardRoute + "tasks/" + createdTask.id, done);
		})
	});

	describe("Post task", function() {
		it("should return 200", function(done) {
			request.post({
				url: base_url + 'tasks/' + createdTask.id + "/state",
				form: { state: "Done" }
			}, function(err, res, body) {
				expect(res.statusCode).toBe(200);
				done();
			})
		})
	});

	describe("DELETE task", function() {
		it("should return OK", function(done) {
			request.del({
				url: base_url + 'tasks/' + createdTask.id
			}, function(err, res, body) {
				expect(res.statusCode).toBe(200);
				done();
			});
		});
	});
})