(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone'], function(Backbone) {
    var MovieModel;
    return MovieModel = (function(_super) {
      __extends(MovieModel, _super);

      function MovieModel() {
        return MovieModel.__super__.constructor.apply(this, arguments);
      }

      MovieModel.prototype.urlRoot = '/api/movies';

      return MovieModel;

    })(Backbone.Model);
  });

}).call(this);
