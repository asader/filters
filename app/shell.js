define(['plugins/router'], function (router) {
    return {
        router: router,
        activate: function () {
            return router.map([
                { route: ['', 'home'],                          moduleId: 'search/index',                title: 'Поиск',           nav: 1 }

            ]).buildNavigationModel()
              .mapUnknownRoutes('search/index', 'not-found')
              .activate();
        }
    };
});