(function () {
	this.TweetsController = function () {
		var self = {};

		self.index = function () {
			var search = new Search();
			var searchView = new twitter.views.search.Index({
				model: search
			});

			twitter.application.tweets = new twitter.Tweets();
			var tweets = twitter.application.tweets;
			var tweetsView = new twitter.views.tweets.Index({
				collection: tweets
			});

			var makeQuery = function () {
				tweets.query = search.query;
				tweetsView.render();
			}

			// Setting search view
			twitter.application.$el.empty();
			twitter.application.$el.append(searchView.$el);
			searchView.render();
			searchView.$searchBtn.bind('click', function (event) {
				makeQuery();
			});

			// Setting tweets view
			twitter.application.$el.append(tweetsView.$el);
		};

		self.show = function (id) {
			var tweetView = new twitter.views.tweets.Show({
				model: twitter.application.tweets.get(parseInt(id))
			});

			// Setting tweet view
			twitter.application.$el.empty();
			twitter.application.$el.append(tweetView.$el);
			tweetView.render();
		};

		return self;
	};
}).apply(twitter);