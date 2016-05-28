'use strict';

/**
 * @ngdoc function
 * @name myhutApp.factories:hutFactory
 * @description
 * # hutFactory
 * Factory of the myhutApp
 */


angular.module('myhutApp')
    .factory('hutFactory', ['$http', function($http) {

    var urlBase = '/api/huts';
    var hutFactory = {};

    // hutFactory.getHuts = function () {
    //     return $http.get(urlBase);
    // };
    hutFactory.getHuts = function () {
var dummyHuts = [
{
'id': 1,
'navn' : 'navn1',
'description' : 'description1',
'location' : 'location1',
'capacity' : 'capacity1',
'image':'image1'
},
{
'id': 2,
'navn' : 'navn2',
'description' : 'description2',
'location' : 'location2',
'capacity' : 'capacity2',
'image':'image2'
},
{
'id': 2,
'navn' : 'navn2',
'description' : 'description2',
'location' : 'location2',
'capacity' : 'capacity2',
'image':'image2'
},
{
'id': 3,
'navn' : 'navn3',
'description' : 'description3',
'location' : 'location3',
'capacity' : 'capacity3',
'image':'image3'
},
{
'id': 4,
'navn' : 'navn4',
'description' : 'description4',
'location' : 'location4',
'capacity' : 'capacity4',
'image':'image4'
},
];
        return dummyHuts;
    };

    return hutFactory;
}]);
