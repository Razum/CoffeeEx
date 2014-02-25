(function() {
  require.config({
    baseUrl: '/javascripts/',
    paths: {
      jquery: 'libs/jquery-2.1.0.min',
      backbone: 'libs/backbone-min',
      underscore: 'libs/underscore-min',
      marionette: 'libs/backbone.marionette.min',
      models: 'App/models',
      collections: 'App/collections',
      views: 'App/views'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      marionette: {
        deps: ['backbone', 'underscore', 'jquery'],
        exports: 'Backbone.Marionette'
      }
    }
  });

  require(['models/MovieModel'], function(MovieModel) {
    var movie;
    console.warn(new MovieModel);
    movie = new MovieModel;
    return movie.fetch();
  });

}).call(this);
