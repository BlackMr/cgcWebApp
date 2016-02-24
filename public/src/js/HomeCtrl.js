angular.module('Cgcwebapp')
  .controller('HomeCtrl', function($scope) {
    console.log("homecontroller speaking");

    $('.dropdown-menu li a').click(function(){$('.navbar-toggle').click();});
  });