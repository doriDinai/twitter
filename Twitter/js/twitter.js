var twitter = window.twitter || {};

(function () {
	var self = this;

	function initialize() {
		twitter.location = window.location;
	}

	initialize();

	return self;
}).apply(twitter);