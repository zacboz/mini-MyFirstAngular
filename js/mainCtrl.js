angular.module('friendsList').controller('mainCtrl', function($scope){

  $scope.name = 'Zach';
  $scope.friends = [{name:"Rob"}, {name:"Jimmy"}, {name:"Kyelle"}, {name:"Zander"}];


  $scope.addFriend = function(){
    //gets whats in input box and adds to array
    $scope.friends.push($scope.newFriend);
    //clears out input box;
    $scope.newFriend = "";
  }

  $scope.toggleGoodness = function(friendObj){
          friendObj.isNaughty = !friendObj.isNaughty;
  }

  });
