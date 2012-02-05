(function () {
	this.Tweets = function () {
		var self = new (Backbone.Collection.extend({
			model: twitter.Tweet,
			url: 'http://search.twitter.com/search.json?q=video&callback=?',
			parse: function(response) {
				return response.results;
			}
		}));

		return self;
	};
}).apply(twitter);