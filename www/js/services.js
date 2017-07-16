angular.module('starter.services', [])

.factory('Tasks', function($http) {

  // Some fake testing data
  var tasks = [
    {
      id: 0,
      name: 'Take out Trash',
      description: 'I need to make sure I take out the trash before mom gets home'
    },
    {
      id: 1,
      name: 'Clean Dishes',
      description: 'Also I need to clean the dishes before anyone gets home. Don\'t need any one to pile more on',
    },
    {
      id: 2,
      name: 'Feed Kitten',
      description: 'Gotta feed mittens in like 5 minutes or else he will get a little cranky',
    }
  ];

  return {
    all: function() {
      return tasks;
    },
    create: function(newTask){
      var order = {
        id: tasks.length + 1,
        name: newTask.taskName,
        description: newTask.taskDes
      };
      tasks.push(order);
      $http.post("http://localhost:8080/order", order)
      return true;
    },
    remove: function(task) {
      tasks.splice(tasks.indexOf(task), 1);
    },
    get: function(taskId) {
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === parseInt(taskId)) {
          return tasks[i];
        }
      }
      return null;
    }
  };
});
