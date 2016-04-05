// ==UserScript==
// @name        Pinterest without registration
// @namespace   http://andrealazzarotto.com/
// @version     1.5
// @description Allows to browse Pinterest without login/registration, removing the offending modal popup
// @include     http://*.pinterest.com/*
// @include     https://*.pinterest.com/*
// @copyright   2014+, Andrea Lazzarotto
// @require     http://code.jquery.com/jquery-latest.min.js
// @license     GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// ==/UserScript==

$(document).ready(function () {
	if(!!$("div.HomePage").length)
		location.href = "https://www.pinterest.com/categories";

	$("head").append("<style>.UnauthBanner, body > .Modal, .ModalManager > .Modal {display: none !important; } " +
		".noScroll { overflow: auto !important; } " +
		"div.gridContainer > div, .Grid { height: auto !important; }</style>");
	$("body").removeClass("noTouch");
	
	$('.leftHeaderContent > .searchFormHidden').css('float', 'right');
	$('.searchFormHidden').removeClass('searchFormHidden');
	$('form[name=search] .tokenizedInputWrapper').css({
		'border-left': $('form[name=search] .tokenizedInputWrapper').css('border-right'),
		'border-radius': '6px'
	});
});