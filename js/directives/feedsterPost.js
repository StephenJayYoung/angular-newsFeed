app.directive('feedsterPost', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      post: '=' 
      // The post value is what is going to be shown in the index.html, 
      // as well as the first value used in dot notation in the html directive
    }, 
    templateUrl: 'js/directives/feedsterPost.html'
  }; 
});


