require.config
  baseUrl: 'javascripts/'
  paths:
    jquery: 'libs/jquery-2.1.0.min'
    backbone: 'libs/backbone-min'
    underscore: 'libs/underscore-min'
    marionette: 'libs/backbone.marionette.min'
    models: 'App/models'
    collections: 'App/collections'
    views: 'App/views'
    templates: 'App/templates'
  shim:
    underscore:
      exports: '_'
    backbone:
      deps: ['underscore', 'jquery']
      exports: 'Backbone'
    marionette:
      deps: ['backbone', 'underscore', 'jquery']
      exports: 'Backbone.Marionette'

require ['models/MovieModel', 'templates'], (MovieModel, JST)->
  console.warn JST({num: 293648})
  movie = new MovieModel
  movie.fetch()