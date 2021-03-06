requirejs.config({
  paths: {
    text: '../lib/require/text',
    durandal: '../lib/durandal/js',
    plugins: '../lib/durandal/js/plugins',
    transitions: '../lib/durandal/js/transitions',
    knockout: '../lib/knockout/knockout-3.4.0',
    bootstrap: '../lib/bootstrap/js/bootstrap',
    jquery: '../lib/jquery/jquery-1.9.1',
    select2: '../lib/select2/select2',
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jQuery',
    },
  },
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'], (system, app, viewLocator) => {
  // >>excludeStart("build", true);
  system.debug(true);
  // >>excludeEnd("build");

  app.title = 'Durandal Samples';

  // specify which plugins to install and their configuration
  app.configurePlugins({
    router: true,
    dialog: true,
    widget: {
      kinds: ['expander'],
    },
  });

  app.start().then(() => {
    viewLocator.useConvention();
    app.setRoot('shell');
  });
});
