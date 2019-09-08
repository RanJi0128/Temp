var services = angular.module('services',[]);

services.factory('UsuariosFactory',function($resource){

	return $resource('http://localhost::port/api/Usuario/',{port: '58839'},{
		query: {method: 'GET', isArray: true},
		queryPacientesSenhaTemporaria: {method: 'GET', url:'http://localhost::port/api/Usuario/GetWithSenhaTemporaria', isArray: true},//,
		getUsuariosByUserLogado: {method: 'GET', url:'http://localhost::port/api/Usuario/GetUsuariosByUserLogado', isArray: true},//,
	});

});

services.factory('UsuariosPacienteFactory',function($resource){

	return $resource('http://localhost::port/api/Usuario/CadastrarPaciente/',{port: '58839'},{
		cadastrarPaciente: {method: 'POST'}//,
	});

});

services.factory('UsuariosPessoaFactory',function($resource){

	return $resource('http://localhost::port/api/Usuario/PostPessoa/',{port: '58839'},{
		create: {method: 'POST'},
		cadastrarNovaSenha: {method: 'PUT', url:'http://localhost::port/api/Usuario/CadastrarNovaSenha/'}
	});

});

services.factory('UsuarioFactory',function($resource){

	return $resource('http://localhost::port/api/Usuario?id=:id/',{port: '58839',id: '@id'},{
		show: {method: 'GET' },
		showByEmail: {method: 'GET'},
		update: {method: 'PUT'},
		desassociarPaciente: {method: 'PUT', url:'http://localhost::port/api/Usuario/DesassociarPaciente/'},
		delete: {method: 'DELETE'}
	});

});


