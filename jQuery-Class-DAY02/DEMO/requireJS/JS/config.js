/* config.js */
require.config({
	paths:{// 모듈 단축 경로 지정 또는 이름 별칭(Alias) 지정
 		'jquery':'libs/jquery-1.11.3.min',   // "/js/lib" 과 동일하다. baseUrl 기준
 		'modernizr': 'libs/modernizr.custom.97510',
 		'detectizr': 'libs/detectizr.min'
	},
	//shim 설정
 	shim: {
 		'modernizr' : {
 			exports : 'Modernizr'
 		},
 		'detectizr' : {
 			exports : 'Detectizr',
 			deps: ['modernizr']
 		}
 	}
});