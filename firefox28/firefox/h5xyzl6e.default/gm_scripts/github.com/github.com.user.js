// ==UserScript==
// @name        github.com
// @namespace   github.com
// @description fix github rendering with old firefox releases (27)
// @version     0.1
// @date        2015-02-11
// @grant       none
// ==/UserScript==
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

//github.com/user
addGlobalStyle('.one-fourth {width: 20%}');
addGlobalStyle('.one-half {width: 47%}');
addGlobalStyle('img.avatar {max-width: 200px; max-height: 200px;}');

//github.com
addGlobalStyle('.one-third {width: 33%}');
addGlobalStyle('.two-thirds {width: 63%}');
addGlobalStyle('.input-block {width: 85%}');
addGlobalStyle('.filter-bar .filter-input {width: 90%}');
addGlobalStyle('.form-control, input[type="text"], input[type="password"], input[type="email"], input[type="number"], input[type="tel"], input[type="url"], textarea {min-height: 18px}');
addGlobalStyle('.site-search input[type="text"] {width: 90%}');
addGlobalStyle('.site-search.repo-scope input[type="text"] {padding-left: 5%}');
