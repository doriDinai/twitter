(function () {
	this.Application = function (options) {
		options = options || {};
		var self = {};
		var $el = options.el ? $(options.el) : $('#app');
		var $popup = options.popup ? $(options.popup) : $('#popup');
		var routes;

		Object.defineProperties(self, {
			el: {
				get: function () {
					return $el[0];
				},
				set: function (element) {
					$el = $(element);
				}
			},
			$el: {
				get: function () {
					return $el;
				},
				set: function ($element) {
					$el = $element;
				}
			},
			popup: {
				get: function () {
					return $popup[0];
				},
				set: function (element) {
					$popup = $(element);
				}
			},
			$popup: {
				get: function () {
					return $popup;
				},
				set: function ($element) {
					$popup = $element;
				}
			}
		});

		self.ready = function () {
			Backbone.useJSONP = true;
			routes = new twitter.Router();
			$.preloadCssImages();
			$el = $("#app");
			Backbone.history.start();
		};

		return self;
	};

	var application = new this.Application();
	Object.defineProperty(this, 'application', {
		get: function () {
			return application;
		}
	});
}).apply(twitter);

$(twitter.application.ready);