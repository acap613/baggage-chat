const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = "mongodb+srv://mofos:mofos@cluster0-g1izq.mongodb.net/test?retryWrites=true&w=majority";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
