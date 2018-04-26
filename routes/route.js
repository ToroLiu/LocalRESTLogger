
var appRouter = function(app) {
	app.post("/log", function(req, res) {
		if (!req.body.msg) {
			return res.status(404).send({
				"status": "No `msg` content."
			});
		}

		console.log(req.body.msg);
		return res.status(200).send({
			"status": "ok"
		});
	});
};

module.exports = appRouter;