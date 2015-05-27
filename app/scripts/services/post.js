'use strict';

app.factory('Post', function($resource){
  return $resource('https://incandescent-fire-5861.firebaseio.com/:id.json');
});
