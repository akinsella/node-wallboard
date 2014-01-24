var fs = require('fs');

exports.experiencelevels = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/experiencelevels.json", "utf-8")));
};

exports.presentationtypes = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/presentationtypes.json", "utf-8")));
};

exports.schedule = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/schedule.json", "utf-8")));
};

exports.speakers = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/speakers.json", "utf-8")));
};

exports.events = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/events.json", "utf-8")));
};

exports.tracks = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/tracks.json", "utf-8")));
};

exports.presentations = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/presentations.json", "utf-8")));
};

exports.rooms = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/rooms.json", "utf-8")));
};

exports.day1 = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/day1.json", "utf-8")));
};

exports.day2 = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/day2.json", "utf-8")));
};

exports.day3 = function(req, res) {
	res.charset = 'UTF-8';
	res.send(JSON.parse(fs.readFileSync("data/day3.json", "utf-8")));
};
