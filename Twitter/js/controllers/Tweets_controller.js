(function () {
	this.TweetsController = function () {
		var self = {};

		self.index = function () {
			alert("index");
			var tweets = new twitter.Tweets();
			var view = new twitter.views.tweets.Index({
				collection: tweets
			});
			view.render();
			twitter.application.$el.empty().append(view.el);
		};

		return self;
	};
}).apply(twitter);