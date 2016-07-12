TweenMax.from(".angularjs", 2, {x:-600, rotation:360});

function TodoCtrl($scope){// here, it's named the exact same way as in the html file, "TdoCtrl" in this example
  // $scope.totalTodos = 7; // through the magic of binding, which are the double curly braces {{}}, this will appear on the html page

  $scope.todos = [
  {text: 'Learn AngularJS', done:false}, 
  {text: 'Build an app', done:false},
  {text: 'Three', done:false},
  {text: 'Four', done:false},
  {text: 'Five', done:false},
  {text: 'Six', done:false},
  {text: 'SEVEN!', done:false}
  ];

  // $scope.totalTodos = $scope.todos.length; // this updates the actual numbers of todos on the list, because it is set to the length of the todo when you refresh
  // but if you add another item, it won't update, because it's only being assigned once.

  $scope.getTotalTodos = function (){ // this updates the actual numbers everytime it's refreshed and everytime something is added, because it gets the total todos length and returns it as a value 
    return $scope.todos.length;
  }
  
  $scope.addTodo = function(){ // this entire block is the function for the action when you click on the ng-click to add an item
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = ''; //this clears out the text form after you add an item
  }

  $scope.clearCompleted = function(){ // this clears out the completed items and only returns as a result the items that are not done
    $scope.todos = _.filter($scope.todos, function(todo){
      return !todo.done;
    })
  };
};


