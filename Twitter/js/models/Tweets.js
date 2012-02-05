(function () {
	this.Tweets = function () {
		var self = new (Backbone.Collection.extend({
			model: this.Tweet,
			url: 'http://search.twitter.com/search.json?q=video'
		}));

		return self;
	};
}).apply(twitter);