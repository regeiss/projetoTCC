require.config(
{
	urlArgs: "bust=" + (new Date()).getTime(),
	paths: {
		'angular': '../vendor/angular/angular',
		'jquery': '../vendor/jquery/jquery',
		'bootstrapJs': '../vendor/bootstrap/bootstrap'
	},
	shim: 
	{
		'bootstrapJs': ['jquery'],
		'angular': {'exports': 'angular'}
	}
});

window.name = "NG_DEFER_BOOTSTRAP!";

require(['angular','app','bootstrapJs'], function(angular, app) 
{
	'use strict';
	var $html = angular.element(document.getElementsByTagName('html')[0]);
	angular.element().ready(function() 
	{
		angular.resumeBootstrap([app.name]);
	});
}
);