'use strict';

var lyricsService = function($http) {
  return {
    get: function() {
      return $http.get('/api/lyrics');
    },
    create: function() {
      return $http.post('/api/lyrics', lyricData);
    },
    delete: function(index) {
      return $http.delete('/api/lyrics/' + index);
    }
  }
}

lyricsService.$inject = ['$http'];

module.exports = lyricsService; 