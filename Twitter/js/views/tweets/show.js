(function () {
	this.views = this.views || {};
	this.views.tweets = this.views.tweets || {};
	this.views.tweets.Show = function (options) {
		var self = new (Backbone.View.extend({
			id: 'tweets_show',
			className: 'tweet',
			tagName: 'tweet',
			model: TweetAlt
		}))(options);

		var tweet = self.model;
		var $tmplTweetsShow = $("#tmpl-tweets-show");

		function refresh() {
			//self.$el.empty();
			//$tmplTweetsIndex.tmpl(tweets.toJSON()).appendTo(self.$el);
		}


		self.render = function () {
			//tweet.bind('reset', refresh);
			//tweet.fetch();

			$tmplTweetsShow.tmpl(tweet.toJSON()).appendTo(self.$el);

			return self;
		};


		return self;
	};

}).apply(twitter);