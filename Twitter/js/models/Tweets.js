var Tweets = Backbone.Collection.extend({
	model: Tweet,
	url: 'http://search.twitter.com/search.json?q=video',
});