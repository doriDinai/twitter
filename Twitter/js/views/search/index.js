(function () {
	this.views = this.views || {};
	this.views.search = this.views.search || {};
	this.views.search.Index = function (options) {
		var self = new (Backbone.View.extend({
			id: 'search_index',
			className: 'search',
			tagName: 'search',
			model: Search,
			$searchBtn: null
		}))(options);

		var search = self.model;
		var $searchQuery = null;
		var $tmplSearch = $("#tmpl-search");

		function refresh() {
			//self.$el.empty();
			//$tmplSearch.tmpl(search.toJSON()).appendTo(self.$el);
		}


		self.render = function () {
			//search.bind('reset', refresh);
			//search.fetch();

			$tmplSearch.tmpl(search.toJSON()).appendTo(self.$el);
			$searchQuery = $("#searchQuery");
			$searchQuery.bind('keyup', function (event) {
				search.query = event.target.value;
			});
			self.$searchBtn = $("#searchBtn");

			return self;
		};


		return self;
	};

}).apply(twitter);