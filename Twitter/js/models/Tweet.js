(function () {
	this.Tweet = function () {
		var self = new (Backbone.Model.extend({
			set: function (attributes, options) {
				return Backbone.Model.prototype.set.call(this, attributes, options);
			}

		}));

		return self;
	};
}).apply(twitter);

var TweetAlt = Backbone.Model.extend({
});