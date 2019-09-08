var service = angular.module('services');

var urlBase = "http://localhost::port/api/";



service.factory('RolesFactory', function($resource){

	return $resource(urlBase + '/Role',{port:'58839'},{
		query: {method: 'GET', isArray: true},
		create: {method: 'POST'}
	})

});

service.factory('RoleFactory',function($resource){


	return $resource(urlBase + '/Role?id=@Id',{port:'58839'},{

		show: {method: 'GET'},
		update: { method: 'PUT', isArray: true},
		delete: {method: 'DELETE'}

	})

});

