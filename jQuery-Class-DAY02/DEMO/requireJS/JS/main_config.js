/**
 * --------------------------------
 * Main Javascript File
 * RequireJS를 사용해서 모듈을 호출하는 코드
 *
 * define(id, [dependencies], moduleFn)
 * require()

 config.js를 별도 관리할 경우
 * --------------------------------
 */

/* main.js */
require(['config'], function() {//config.js파일을 불러옴.
	require(['detectizr','jquery'], function(Detectizr, $) {
		console.log('Modernizr를 통해 Flexbox 신기술 적용 유무체크:' + Modernizr);
		console.log('Modernizr:' + Modernizr);
		console.log('Detectizr:' + Detectizr);
		console.log('jQuery 버전:' + $.fn.jquery);
	});
});