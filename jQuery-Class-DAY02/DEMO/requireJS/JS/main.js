/**
 * --------------------------------
 * Main Javascript File
 * RequireJS를 사용해서 모듈을 호출하는 코드
 *
 * define(id, [dependencies], moduleFn)
 * require()
 * --------------------------------
 */

 //RequireJS 환경설정
 require.config({
 	baseUrl: 'js/',
 	paths: {
 		'jquery':'libs/jquery-1.11.3.min',
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
//RequireJS모듈관리 (의존성관리) - require안에서만 쓸수 있다.
require(['detectizr','jquery'], function(Detectizr, $) {
	console.log('Modernizr를 통해 Flexbox 신기술 적용 유무체크:' + Modernizr);
	console.log('Modernizr:' + Modernizr);
	console.log('Detectizr:' + Detectizr);
	console.log('jQuery 버전:' + $.fn.jquery);
});