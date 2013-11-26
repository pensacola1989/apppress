angular.module('adminModels', ['ngResource', 'adminConstants']);
angular.module('adminDirectives', ['adminConstants']);
angular.module('adminServices', ['ngResource', 'adminConstants']);
angular.module('adminControllers', ['adminServices']);
