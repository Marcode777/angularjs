function TodoCtrl($scope){
  $scope.totalTodos = 7;

  $scope.todos = [
  { text: 'Learn AngularJS', done:false}, 
  {text: 'Build an app', done:false}
  ];
}