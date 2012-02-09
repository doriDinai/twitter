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
	created_at: "",
	show_created_at: function () {
		var date = new Date(created_at);
		return (date.toLocalTime() + " " + date.toLocalDate());
	}
});