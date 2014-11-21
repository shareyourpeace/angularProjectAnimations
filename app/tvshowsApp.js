/*  see notes at the end */
(function() {
var app = angular.module('showsApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
   $routeProvider
        .when('/', {
            controller: 'ShowsController',
            templateUrl: 'app/views/shows.html'
            })
        .when('/actors/:showId',{
            controller: 'ActorsController',
            templateUrl: 'app/views/actors.html'
            })
        .when('/orders', {
            controller: 'AllActorsController',
            templateUrl: 'app/views/allactors.html'
        })    
         .otherwise( {redirectTo: '/'});
        });   
}());


/*/*Routing. 
 * get angular-route.js from angularJS.org
 * include ngRoute as a dependency 
 * use the OBJECT $routeProvider to CONFIGURE ROUTES and ASSOCIATE a CONTROLLER with a VIEW
 * as you CONFIGURE a MODULE, you can reference the ngRoute Module
 * you can CALL app.config(FUNCTION ($routeProvider) {
 * app represents the module:
 * var app = angular.module('customersApp',['ngRoute'] );
 * $routeProvider dynamically injected 
 * app.config(FUNCTION ($routeProvider) // 
 * routes follow in the code.
 * which ALLOW you to ACCOSIATE a CONTROLLER with a VIEW and you can CONFIGURE a SPA
 * .config function is used to configure a route.
 * 3 things: 
 * a PATH
 * a VIEW
 * the CONTROLLER which is the brain for the VIEW
 * 
 * 
 * app.config(FUNCTION ($routeProvider) {
 *  $routeProvider
 *  .when('/',
 *  - the following between the { } is called an OBJECT LITERAL
 *  {
 *   controller: 'CustomersController',
 *   templateURL: '/app/views/customers.html'
 *   })
 *   .when('/orders',
 *    {
 *    controller: 'OrdersController',
 *   templateURL: '/app/views/orders.html'
 *   })
 */
 