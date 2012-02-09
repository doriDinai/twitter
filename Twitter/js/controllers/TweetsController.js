(function () {
	this.TweetsController = function () {
		var self = {};

		self.index = function () {
			var search = new Search();
			var searchView = new twitter.views.search.Index({
				model: search
			});

			var tweets = new twitter.Tweets();
			var tweetsView = new twitter.views.tweets.Index({
				collection: tweets
			});

			var makeQuery = function () {
				tweets.query = search.query;
				tweetsView.render();
			}

			// Setting search view
			twitter.application.$el.append(searchView.$el);
			searchView.render();
			searchView.$searchBtn.bind('click', function (event) {
				makeQuery();
			});

			// Setting tweets view
			twitter.application.$el.append(tweetsView.$el);
		};

		return self;
	};
}).apply(twitter);