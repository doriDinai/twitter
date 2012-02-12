(function () {
	this.TweetsController = function () {
		var self = {};

		self.index = function () {
			// Setting up the search
			if (twitter.application.search == null) {
				twitter.application.search = new Search();
			}
			var search = twitter.application.search;
			var searchView = new twitter.views.search.Index({
				model: search
			});

			twitter.application.$el.empty();
			twitter.application.$el.append(searchView.$el);
			searchView.render();
			searchView.$searchBtn.bind('click', function (event) {
				makeQuery();
			});

			// Setting up the tweets
			if (twitter.application.tweets == null) {
				twitter.application.tweets = new twitter.Tweets();
			}
			var tweets = twitter.application.tweets;
			var tweetsView = new twitter.views.tweets.Index({
				collection: tweets
			});

			twitter.application.$el.append(tweetsView.$el);
			if (tweets.models) {
				tweetsView.populate();
			}

			var makeQuery = function () {
				tweets.query = search.get('query');
				tweetsView.render();
			}
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