(function () {
	this.views = this.views || {};
	this.views.tweets = this.views.tweets || {};
	this.views.tweets.Index = function (options) {
		var self = new (Backbone.View.extend({
			id: 'tweets_index',
			className: 'tweets index',
			tagName: 'article'
		}))(options);

		var tweets = self.collection;
		//var $tmpl = $.tmpl('tweets-index', { tweets: tweets.toJSON() });
		//var $tweets = $tmpl.find('.tweets');
		var $tmplTweetsIndex = $("#tmpl-tweets-index");

		function refresh() {
			var $tweetTemplate = $.tmpl('tweets-tweet', tweets.toJSON());

			self.$el.empty();
			$tmplTweetsIndex.tmpl(tweets.toJSON()).appendTo(self.$el);
//			$(".detailsBtn").bind('click', function (event) {
//				alert(event.target.id.replace("detailsBtn", ""));
//			});
		}


		self.render = function () {
			tweets.bind('reset', refresh);
			tweets.fetch();

			//$tmpl.appendTo(self.el);

			return self;
		};


		return self;
	};

}).apply(twitter);