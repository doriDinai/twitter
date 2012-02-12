(function () {
	this.Tweets = function () {
		var self = new (Backbone.Collection.extend({
			model: twitter.Tweet,
			url: function () {
				return ('http://search.twitter.com/search.json?q=' + this.query + '&callback=?');
			},
			parse: function (response) {
				return response.results;
			},
			query: ""
		}));

		return self;
	};
}).apply(twitter);