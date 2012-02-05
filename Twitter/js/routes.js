(function () {
	var namespace = this;
	this.Router = function () {
		var self = new Backbone.Router();

		Object.defineProperties(self, {
			routes: {
				get: function () {
					return {
						'': 'tweets#index',
						'!/tweets': 'tweets#index',
						'!/tweet': 'tweets#show',
						'!/splash': 'splashes#show',
						'!/users': 'users#index',
						'!/users/new': 'users#new',
						'!/users/:id': 'users#show',
						'!/users/:id/appointments/new': 'appointments#new',
						'!/users/:id/ratings': 'ratings#index',
						'!/users/:id/ratings/new': 'ratings#new',
						'!/payments/:id': 'payments#show',
						'!/appointments': 'appointments#index',
						'!/appointments/:id': 'appointments#show',
						'!/account/edit': 'users#edit',
						'!/users/:id_from/chats/:id_to': 'chats#show',
						'!/logout': 'users#logout'
					};
				}
			}
		});

		function drawRoutes() {
			_(self.routes).chain().values().each(function (resource) {
				var matches = _(resource.match(/^(.*)\.?([^.]*)#(.*)$/)).chain().rest(1).compact().value();
				var actionName = matches.pop();
				var paths = matches[0].split('.');
				var controllerName = _(paths.pop() + 'Controller').classify();
				var module = _(paths).inject(function (n, name) {
					return n[name];
				}, namespace);
				self[resource] = function () {
					var controller = new (module[controllerName])();
					var args = Array.prototype.slice.call(arguments, 0);
					var last = _(args).last();
					if (last && last.indexOf('=') !== -1) {
						args.push($.unparam(args.pop()));
					}
					controller[actionName].apply(controller, args);
				};
			});
			self._bindRoutes();
		}

		drawRoutes();
		return self;
	};
}).apply(twitter);