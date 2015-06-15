/* 메인 script파일 
RequireJS를 사용해서 모듈을 호출하는 코드

define(id, [dependencies], moduleFn)
require()
*/

//RequireJS환경설정
require.config({
	baseUrl:'js/',
	paths: {
		'jquery':'libs/jquery-1.11.3.min',
		'modernizr': 'libs/modernizr.custom.97510',
		'detectizr' : 'libs/detectizr.min'
	},
//shim설정
	shim:{
		'modernizr' : {
			exports:'Detectizr',
			deps:['modernizr']
		}
	}
});
//RequireJS모듈관리 (의존성관리) - require안에서만 쓸수 있다.
require(['detectizr','jquery'], function(Detectizr, $) {
	var $html = $('html');
	$body $('body')

	if ($html.hasClass('video')) {
		console.log ('video 지원해!');
	} else {
		console.log ('video 지원안해!!');
	}

	//사용자 모바일에서 접근여부?
	if ($html.hasClass('desktop')) {
		console.log('데스크톱에서 접근했어요')
	} else {
		console.log('모바일에서 접근했어요')
	}

	$body.addClass('using-requirejs').height(window.innerHeight).css({
		'background': '#e45e36', 
		'color': '#fff'
	})
	.append('<h1>wow! RequireJS Good!!</h1>');
});
