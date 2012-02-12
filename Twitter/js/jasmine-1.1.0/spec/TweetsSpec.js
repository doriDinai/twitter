describe("Tweets", function () {
	// simple spec
	it("Checks whether the fetch method was called", function () {
		var tweets = new twitter.Tweets();
		var tweetsView = new twitter.views.tweets.Index({
			collection: tweets
		});
		spyOn(tweets, "fetch");
		tweetsView.render();
		expect(tweets.fetch).toHaveBeenCalled();
	});

	it("Checks whether the tweets fetch method returned data", function () {
		var tweets = new twitter.Tweets();
		var tweetsView = new twitter.views.tweets.Index({
			collection: tweets
		});
		spyOn(Backbone, 'sync').andCallFake(function (method, model, options) {
			options.success(TweetsTestResponse1);
		});
		// Pre-condition (default value). 
		expect(tweets.models.length).toEqual(0);
		// Cause AJAX call to be invoked. 
		tweets.fetch();
		// Post-condition. 
		expect(tweets.models.length).not.toEqual(0);
	});

	it("Checks whether the click event was triggered", function () {
		var search = new Search();
		var searchView = new twitter.views.search.Index({
			model: search
		});

		twitter.application.$el.append(searchView.$el);

		searchView.render();

		searchView.$searchBtn
		spyOnEvent(searchView.$searchBtn, 'click');
		searchView.$searchBtn.click();
		expect('click').toHaveBeenTriggeredOn(searchView.$searchBtn);

	});
});