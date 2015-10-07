define(function (require) 
{
   
  var angular = require('angular'), Controllers = angular.module('controllers', []);
   
  Controllers.controller('angAlunoController', require('controllers/angAlunoController'));
   
  return Controllers;
   
});