(function() {
  require.config({
    baseUrl: '/javascripts/',
    paths: {
      jquery: '/javascripts/libs/jquery-2.1.0.min',
      backbone: '/javascripts/libs/backbone-min',
      underscore: '/javascripts/libs/underscore-min',
      marionette: '/javascripts/libs/backbone.marionette.min',
      models: '/javascripts/App/models/',
      collections: '/javascripts/App/collections/',
      views: '/javascripts/App/views/'
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
