const itemRouter = require("./items");

function route(app){
    app.use("/items", itemRouter);
    app.use("/", function(req, res, next) {res.send("NOT FOUND")});
}

module.exports = route;
