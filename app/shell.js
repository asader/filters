define(['plugins/router'], router => ({
  router,
  activate() {
    return router.map([
      { route: ['', 'home'], moduleId: 'search/index', title: 'Поиск', nav: 1 },

    ]).buildNavigationModel()
      .mapUnknownRoutes('search/index', 'not-found')
      .activate();
  },
}));
