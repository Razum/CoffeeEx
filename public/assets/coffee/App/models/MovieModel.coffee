define ['backbone'], (Backbone)->
  class MovieModel extends Backbone.Model
    urlRoot: '/api/movies'
