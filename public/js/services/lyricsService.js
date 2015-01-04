'use strict';

angular.module('lyricsService', [])
  .factory('lyricsService', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('/api/lyrics');
      },
      create: function(lyricData) {
        return $http.post('/api/lyrics', lyricData);
      },
      delete: function(index) {
        return $http.delete('/api/lyrics/' + index);
      }
    };
  }]);