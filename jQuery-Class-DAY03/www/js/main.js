/**
 * --------------------------------
 * require([의존파일리스트], 콜백함수)
 * --------------------------------
 */

/**
 * --------------------------------
 * RequireJS 환경설정
 * --------------------------------
 */

/* 처음코드
 var jquery_path = 'http://code.jquery.com/jquery.min.js';

require([jquery_path], function() {
	var body = document.boody;
	//console.log('DOM body: ', body);
	//consol.log('$(body):', $(body);

		$('body').addClass('assign-jquery').height(window.innerHeight).attr('data-body', 'root')
}); */

/* 두번째코드 
//var jquery_path = 'http://code.jquery.com/jquery.min.js';
require([js/libs/jquery.min.js], function() {
	var body = document.boody;
	//console.log('DOM body: ', body);
	//consol.log('$(body):', $(body);

		$('body').addClass('assign-jquery').height(window.innerHeight).attr('data-body', 'root')
});
*/
/* 세번째 코드 */
/* require.config ({
	baseUrl: 'js',
	paths: {
		'jquery':'libs/require.min'
	}
});

require([], function() {
	var body = document.body;
	body.classList.add('no-assign-jquery');
	body.style.height = window.innerHeight +'px';
	boody.setAttribute('data-body', 'root');
}) */

/*  */


require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'libs/jquery.min'
	}
});

/**
 * DOMScript Code
 * 별도의 모듈 호출 X
 * --------------------------------
 */
// require([], function() {
// 	var body = document.body;
// 	body.classList.add('no-assign-jquery');
// 	body.style.height = window.innerHeight + 'px';
// 	body.setAttribute('data-body', 'root');
// });

/**
 * jQuery Code
 * jQuery 모듈 호출
 * --------------------------------
 */

require(['jquery'], function() {
	// 문서가 준비되면... DOMReady 되면...
	// require() 함수 내부의 콜백 함수는 DOMReady 된 이후 실행된다.

	var $body = $('body');

	// 만약 body 요소의 margin 설정 값이 존재하면.... 초기화하라.
	if ( parseInt($body.css('margin')) > 0 ) {
		$body.css('margin', 0);
	}

	// 동적으로 #page 요소를 만든다. body 요소의 마지막 자식요소로 붙인다.
	var $page = $('<div id="page"/>').appendTo('body');

	//<div/>
	// console.log($page);

	// 브라우저 창의 뷰포트 높이만큼을 #page 요소의 높이로 설정한다.
	var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
	// console.log(viewportHeight);
	// var $doc = $('html, body');
	$page.height(viewportHeight);

	// #page 요소에 배경이미지를 설정하고, 배경이미지 크기를 cover로 변경한다. 가운데 배치한다.
	var bgImgPath = 'https://unsplash.imgix.net/photo-1430760814266-9c81759e5e55?dpr=2&fit=crop&fm=jpg&h=750&q=75&w=1050';

	var page_cssMap = {
		'background': 'url('+ bgImgPath +') no-repeat center',
		'background-size': 'cover'
	};

	$page.css(page_cssMap);

	// $('body')
	// 	.addClass('assign-jquery')
	// 	.height(window.innerHeight)
	// 	.attr('data-body', 'root');

});